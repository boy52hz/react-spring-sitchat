package com.sitchat.server.filters;

import com.google.gson.Gson;
import com.sitchat.server.services.imp.UserDetailsServiceImp;
import com.sitchat.server.utils.JwtUtil;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwtException;
import org.bson.json.JsonObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.HashMap;
import java.util.Map;

@Component
public class JwtRequestFilter extends OncePerRequestFilter {
    @Autowired
    private UserDetailsServiceImp userDetailsServiceImp;

    @Autowired
    private JwtUtil jwtUtil;

    @Override
    protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
            throws ServletException, IOException {
        final String authorizationHeader = request.getHeader("Authorization");
        String username = null;
        String jwt = null;

        try {
            if (authorizationHeader != null && authorizationHeader.startsWith("Bearer ")) {
                jwt = authorizationHeader.substring(7);
                username = jwtUtil.extractUsername(jwt);
            }

            if (username != null && SecurityContextHolder.getContext().getAuthentication() == null) {
                UserDetails authDetails = userDetailsServiceImp.loadUserByUsername(username);
                if (jwtUtil.validateToken(jwt, authDetails)) {
                    UsernamePasswordAuthenticationToken userPassAuthToken = new UsernamePasswordAuthenticationToken(
                            authDetails, null, authDetails.getAuthorities());
                    userPassAuthToken.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));
                    SecurityContextHolder.getContext().setAuthentication(userPassAuthToken);
                }
            }

            filterChain.doFilter(request, response);

        } catch (JwtException ex) {
            Map<String, String> map = new HashMap<>();
            map.put("message", "Invalid token");
            response.setStatus(401);
            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            PrintWriter out = response.getWriter();
            out.print(new Gson().toJsonTree(map).getAsJsonObject());
            out.flush();
        }


    }
}
