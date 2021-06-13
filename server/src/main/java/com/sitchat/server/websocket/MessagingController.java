package com.sitchat.server.websocket;

import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;

@Controller
public class MessagingController {

    private final SimpMessagingTemplate simpMessagingTemplate;

    public MessagingController(SimpMessagingTemplate simpMessagingTemplate) {
        this.simpMessagingTemplate = simpMessagingTemplate;
    }

    @MessageMapping("/message/{to}")
    public void sendMessage(@DestinationVariable String to, ChatMessage chatMessage) {
        simpMessagingTemplate.convertAndSend("/topic/message/" + to, chatMessage);
    }
}
