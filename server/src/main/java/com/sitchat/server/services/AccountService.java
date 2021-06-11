package com.sitchat.server.services;

import com.sitchat.server.models.Account;
import com.sitchat.server.repositories.AccountRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AccountService {
    private final AccountRepository accountRepository;

    public AccountService(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    public void register(Account account) {
        accountRepository.insert(account);
    }

    public Account getAccountByUsername(String username) {
        return accountRepository.findByUsername(username).orElseThrow(() -> new RuntimeException(
                String.format("Cannot find account by username %s", username)));
    }

    public List<Account> getAll() {
        return accountRepository.findAll();
    }
}
