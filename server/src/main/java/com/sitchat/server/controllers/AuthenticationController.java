package com.sitchat.server.controllers;

import com.sitchat.server.configuration.SecurityConfiguration;
import com.sitchat.server.models.AuthenticationRequest;
import com.sitchat.server.models.AuthenticationRespond;
import com.sitchat.server.models.User;
import com.sitchat.server.services.AuthDetailsService;
import com.sitchat.server.services.UserService;
import com.sitchat.server.utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AuthenticationController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private AuthDetailsService authDetailsService;
    @Autowired
    private UserService userService;
    @Autowired
    private JwtUtil jwtUtil;

    @RequestMapping("/")
    public String home() {
        return  "GAY";
    }

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
        try {
            User dbUser = userService.getAccountByUsername(authenticationRequest.getUsername());
            if (dbUser == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

            PasswordEncoder encoder = new BCryptPasswordEncoder();

            if (!encoder.matches(authenticationRequest.getPassword(), dbUser.getPassword())) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
            );

            final UserDetails authDetails = authDetailsService.loadUserByUsername(authenticationRequest.getUsername());
            final String jwt = jwtUtil.generateToken(authDetails);
            return ResponseEntity.ok(new AuthenticationRespond(jwt));
        } catch (BadCredentialsException ex) {
            throw new Exception("Incorrect Username or Password", ex);
        }
    }
}
