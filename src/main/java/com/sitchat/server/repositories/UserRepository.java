package com.sitchat.server.repositories;

import com.sitchat.server.models.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.Optional;

public interface UserRepository extends MongoRepository<User, String> {
    @Query("{ username: ?0 }")
    User findByUsername(String username);
}
