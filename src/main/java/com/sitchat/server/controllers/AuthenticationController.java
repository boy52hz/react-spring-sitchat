package com.sitchat.server.controllers;

import com.mongodb.MongoException;
import com.mongodb.MongoWriteException;
import com.sitchat.server.models.User;
import com.sitchat.server.models.dto.ErrorRespond;
import com.sitchat.server.models.dto.authentication.AuthenticationRequest;
import com.sitchat.server.models.dto.authentication.AuthenticationRespond;
import com.sitchat.server.services.AuthenticationService;
import com.sitchat.server.services.imp.UserDetailsServiceImp;
import com.sitchat.server.utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
public class AuthenticationController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private UserDetailsServiceImp userDetailsServiceImp;
    @Autowired
    private AuthenticationService authenticationService;
    @Autowired
    private JwtUtil jwtUtil;

    @PostMapping("/register")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> register(@RequestBody User user) {
        Map<String, String> response = new HashMap<>();
        try {
            authenticationService.register(user);
            response.put("message", "User " + user.getUsername() + " has been created");
            return new ResponseEntity<>(response, HttpStatus.CREATED);

        } catch (MongoException | org.springframework.dao.DuplicateKeyException ex) {
            response.put("message", "Failed to register an account");
            return new ResponseEntity<>(response, HttpStatus.UNAUTHORIZED);
        }
    }

    @RequestMapping(value = "/authenticate", method = RequestMethod.POST)
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody AuthenticationRequest authenticationRequest) {
        try {
            authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(authenticationRequest.getUsername(), authenticationRequest.getPassword())
            );
            final UserDetails authDetails = userDetailsServiceImp.loadUserByUsername(authenticationRequest.getUsername());
            final String jwt = jwtUtil.generateToken(authDetails);
            return ResponseEntity.status(HttpStatus.OK).body(new AuthenticationRespond(authDetails.getUsername(), jwt));
        } catch (BadCredentialsException ex) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ErrorRespond("Invalid username or password"));
        }
    }
}
