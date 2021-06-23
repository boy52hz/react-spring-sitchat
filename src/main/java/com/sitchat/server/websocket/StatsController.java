package com.sitchat.server.websocket;

import com.sitchat.server.controllers.ChatRoomTemporaryDataSource;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.messaging.simp.user.SimpSubscription;
import org.springframework.messaging.simp.user.SimpUserRegistry;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Controller;

import java.util.Set;

@Controller
@EnableScheduling
public class StatsController {

    private final SimpUserRegistry simpUserRegistry;
    private final SimpMessagingTemplate simpMessagingTemplate;

    @Autowired
    ChatRoomTemporaryDataSource rooms;

    public StatsController(SimpUserRegistry simpUserRegistry, SimpMessagingTemplate simpMessagingTemplate) {
        this.simpUserRegistry = simpUserRegistry;
        this.simpMessagingTemplate = simpMessagingTemplate;
    }

    @Scheduled(fixedDelay = 2000)
    private void sendOnlineStatsToAllRooms() {
        for (String room : rooms.getRooms()) {
            sendOnlineStats(room);
        }
    }

    public void sendOnlineStats(String room) {
        int subCount = getSubsCount(room);
        StatsMessage payload = new StatsMessage(subCount);
        sendStats(room, payload);
    }

    private Set<SimpSubscription> getTopicMessageSubs(String room) {
        return simpUserRegistry.findSubscriptions(s -> s.getDestination().startsWith(MessagingController.WS_TOPIC_MESSAGE + room));
    }

    private int getSubsCount(String room) {
        return getTopicMessageSubs(room).size();
    }

    private void sendStats(String room, StatsMessage payload) {
        StatsMessageWrapper wrappedPayload = payload.wrap();
        simpMessagingTemplate.convertAndSend(MessagingController.WS_TOPIC_STATS_ONLINE + room, wrappedPayload);
    }
}
