package com.sitchat.server.websocket;

import com.sitchat.server.services.imp.UserDetailsServiceImp;
import com.sitchat.server.utils.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.Message;
import org.springframework.messaging.MessageChannel;
import org.springframework.messaging.simp.config.ChannelRegistration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.messaging.simp.stomp.StompCommand;
import org.springframework.messaging.simp.stomp.StompHeaderAccessor;
import org.springframework.messaging.support.ChannelInterceptor;
import org.springframework.messaging.support.MessageHeaderAccessor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    @Autowired
    private JwtUtil jwtUtil;

    @Autowired
    private UserDetailsServiceImp userDetailsServiceImp;

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        registry.addEndpoint("/ws")
            .setAllowedOrigins("http://localhost:3000") // This allow React to use API
            .withSockJS();
    }

    @Override
    public void configureMessageBroker(MessageBrokerRegistry registry) {
        registry.enableSimpleBroker("/topic");
        registry.setApplicationDestinationPrefixes("/app");
    }

    @Override
    public void configureClientInboundChannel(ChannelRegistration registration) {
        registration.interceptors(new ChannelInterceptor() {

            @Override
            public Message<?> preSend(Message<?> message, MessageChannel channel) {
                StompHeaderAccessor accessor = MessageHeaderAccessor.getAccessor(message, StompHeaderAccessor.class);
                try {
                    if (accessor != null && StompCommand.CONNECT.equals(accessor.getCommand())) {
                        String ah = accessor.getFirstNativeHeader("Authorization");
                        String jwt = ah != null ? ah.replace("Bearer ", "") : null;
                        String username;

                        username = jwtUtil.extractUsername(jwt);

                        if (username != null) {
                            UserDetails authDetails = userDetailsServiceImp.loadUserByUsername(username);
                            if (jwtUtil.validateToken(jwt, authDetails)) {
                                UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(
                                        authDetails.getUsername(), null, authDetails.getAuthorities());
                                accessor.setUser(token);
                            }
                        }
                    }
                } catch (Exception ex) {
                    return null;
                }
                return message;
            }
        });
    }
}
