package com.sitchat.server.services;

import com.sitchat.server.configuration.SecurityConfiguration;
import com.sitchat.server.models.User;
import com.sitchat.server.repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public void register(User user) {
        // String hashPwd = SecurityConfiguration.encoder.encode(user.getPassword());
        // user.setPassword(hashPwd);
        userRepository.insert(user);
    }

    public User getAccountByUsername(String username) {
        return userRepository.findByUsername(username).orElseThrow(() -> new RuntimeException(
                String.format("Cannot find account by username %s", username)));
    }

    public List<User> getAll() {
        return userRepository.findAll();
    }
}
