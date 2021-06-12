package com.sitchat.server.controllers;

import com.mongodb.MongoWriteException;
import com.sitchat.server.models.AuthenticationRequest;
import com.sitchat.server.models.AuthenticationRespond;
import com.sitchat.server.models.User;
import com.sitchat.server.services.imp.UserDetailsServiceImp;
import com.sitchat.server.services.AuthenticationService;
import com.sitchat.server.utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@RestController
public class AuthenticationController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserDetailsServiceImp userDetailsServiceImp;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private AuthenticationService authenticationService;
    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/register")
    public ResponseEntity register(@RequestBody User user) {
        try {
            authenticationService.register(user);
            return ResponseEntity.status(HttpStatus.CREATED).body(user);
        } catch (MongoWriteException ex) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Cannot register an account");
        }
    }

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) throws Exception {
        try {
            User dbUser = authenticationService.getAccountByUsername(authenticationRequest.getUsername());
            if (dbUser == null) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

            if (!passwordEncoder.matches(authenticationRequest.getPassword(), dbUser.getPassword())) {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
            }

            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
            );

            final UserDetails authDetails = userDetailsServiceImp.loadUserByUsername(authenticationRequest.getUsername());
            final String jwt = jwtUtil.generateToken(authDetails);
            return ResponseEntity.ok(new AuthenticationRespond(jwt));
        } catch (BadCredentialsException ex) {
            throw new Exception("Incorrect Username or Password", ex);
        }
    }
}
