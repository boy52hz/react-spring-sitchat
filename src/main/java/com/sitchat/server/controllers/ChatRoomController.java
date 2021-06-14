package com.sitchat.server.controllers;

import com.sitchat.server.websocket.ChatMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Deque;

@RestController
public class ChatRoomController {

    @Autowired
    ChatRoomTemporaryDataSource rooms;

    @Bean
    public ChatRoomTemporaryDataSource chatRoomTemporaryDataSource() {
        return new ChatRoomTemporaryDataSource();
    }

    @GetMapping("/history/{room}")
    public ResponseEntity<?> getHistory(@PathVariable String room) {
        Deque<ChatMessage> messages = rooms.getMessages(room);
        System.out.println(rooms.getMessages(room));
        for (ChatMessage msg : messages) {
            System.out.println(msg);
        }
        return ResponseEntity.ok(messages);
    }
}
