package com.sitchat.server.controllers;

import com.mongodb.MongoWriteException;
import com.sitchat.server.models.Account;
import com.sitchat.server.services.AccountService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/account")
public class AccountController {
    private final AccountService accountService;

    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @PostMapping
    public ResponseEntity register(@RequestBody Account account) {
        try {
            accountService.register(account);
            return ResponseEntity.status(HttpStatus.CREATED).build();
        } catch (MongoWriteException ex) {
            return ResponseEntity.status(HttpStatus.FORBIDDEN).body("Cannot register an account");
        }
    }

    @GetMapping("/{username}")
    public ResponseEntity<Account> getAccountByUsername(@PathVariable String username) {
        return ResponseEntity.ok(accountService.getAccountByUsername(username));
    }

    @GetMapping
    public ResponseEntity<List<Account>> getAll() {
        return ResponseEntity.ok(accountService.getAll());
    }
}
