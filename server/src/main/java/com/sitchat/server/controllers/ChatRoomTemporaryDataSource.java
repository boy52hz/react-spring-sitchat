package com.sitchat.server.controllers;

import com.sitchat.server.websocket.ChatMessage;

import java.util.*;
import java.util.function.Consumer;

public class ChatRoomTemporaryDataSource {

    private final Map<String, ArrayDeque<ChatMessage>> rooms;

    public ChatRoomTemporaryDataSource() {
        this.rooms = new HashMap<>();
    }

    private Deque<ChatMessage> get(String room) {
        return rooms.computeIfAbsent(room, k -> new ArrayDeque<>());
    }

    public ChatRoomTemporaryDataSource addMessage(String room, ChatMessage msg) {
        get(room).push(msg);
        return this;
    }

    public Deque<ChatMessage> getMessages(String room) {
        return new ArrayDeque<>(get(room));
    }

}
