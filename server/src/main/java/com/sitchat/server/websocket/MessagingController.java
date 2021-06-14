package com.sitchat.server.websocket;

import com.sitchat.server.controllers.ChatRoomTemporaryDataSource;
import org.springframework.messaging.handler.annotation.DestinationVariable;
import org.springframework.messaging.handler.annotation.MessageMapping;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Controller;
import org.springframework.web.socket.config.annotation.EnableWebSocket;

import java.security.Principal;

@Controller
@EnableWebSocket
public class MessagingController {

    private final ChatRoomTemporaryDataSource rooms;
    private final String WS_USER_DIRECT = "/queue/direct";
    private final String WS_TOPIC_MESSAGE = "/topic/message";
    private final SimpMessagingTemplate simpMessagingTemplate;

    public MessagingController(SimpMessagingTemplate simpMessagingTemplate, ChatRoomTemporaryDataSource rooms) {
        this.simpMessagingTemplate = simpMessagingTemplate;
        this.rooms = rooms;
    }

    @MessageMapping("/message/{to}")
    public void sendMessage(@DestinationVariable String to, ChatMessage chatMessage, Principal principal) {
        chatMessage.setFrom(principal.getName());
        chatMessage.setTo(to);
        rooms.addMessage(to, chatMessage);
        simpMessagingTemplate.convertAndSend(WS_TOPIC_MESSAGE + "/" + to, chatMessage);
    }

//    @EventListener
//    public void handleSessionSubscribeEvent(SessionSubscribeEvent sessionSubscribeEvent) {
//        StompHeaderAccessor ha = StompHeaderAccessor.wrap(sessionSubscribeEvent.getMessage());
//        Principal user = ha.getUser();
//        String room = ha.getDestination();
//
//        if (!room.startsWith(WS_TOPIC_MESSAGE)) {
//            return;
//        }
//
//        room = room.replace(WS_TOPIC_MESSAGE + "/", "");
//
//        rooms.computeIfAbsent(room, k -> new ArrayList<>());
//        System.out.println(room);
//
//        for (ChatMessage msg : rooms.get(room)) {
//            System.out.println(msg);
//            System.out.println(user.getName());
//            simpMessagingTemplate.convertAndSendToUser(user.getName(), WS_USER_DIRECT, msg);
//        }
//
//        simpMessagingTemplate.convertAndSendToUser(user.getName(), WS_USER_DIRECT, new ChatMessage("AA", "BB", "CC"));
//        simpMessagingTemplate.convertAndSendToUser("dontknow123", WS_USER_DIRECT, new ChatMessage("AA", "BB", "CC"));
//        simpMessagingTemplate.convertAndSendToUser("dontknow124", WS_USER_DIRECT, new ChatMessage("AA", "BB", "CC"));
//    }
}
