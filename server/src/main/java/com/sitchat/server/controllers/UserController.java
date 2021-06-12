package com.sitchat.server.controllers;

import com.mongodb.MongoWriteException;
import com.sitchat.server.models.User;
import com.sitchat.server.services.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/account")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity register(@RequestBody User user) {
        try {
            userService.register(user);
            return ResponseEntity.status(HttpStatus.CREATED).body(user);
        } catch (MongoWriteException ex) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Cannot register an account");
        }
    }

//    @PostMapping("/login")
//    public ResponseEntity login(@RequestBody Account account) {
//        try {
//            Account dbAccount = accountService.getAccountByUsername(account.getUsername());
//            if (dbAccount == null) {
//                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
//            }
//
//            if (!SecurityConfiguration.encoder.matches(account.getPassword(), dbAccount.getPassword())) {
//                return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
//            }
//
//            return ResponseEntity.status(HttpStatus.OK).body(accountService.login(dbAccount));
//        } catch (Exception ex) {
//            return ResponseEntity.status(HttpStatus.FORBIDDEN).build();
//        }
//    }

    @GetMapping("/{username}")
    public ResponseEntity<User> getAccountByUsername(@PathVariable String username) {
        return ResponseEntity.ok(userService.getAccountByUsername(username));
    }

    @GetMapping
    public ResponseEntity<List<User>> getAll() {
        return ResponseEntity.ok(userService.getAll());
    }
}
