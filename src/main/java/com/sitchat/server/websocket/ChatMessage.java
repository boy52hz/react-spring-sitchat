package com.sitchat.server.websocket;

import com.sitchat.server.models.User;
import com.sitchat.server.models.dto.user.UserDto;

public class ChatMessage {
    private UserDto from;
    private String to;
    private String content;
    private String dateTime;

    public ChatMessage(UserDto from, String to, String content, String dateTime) {
        this.from = from;
        this.to = to;
        this.content = content;
        this.dateTime = dateTime;
    }

    public UserDto getFrom() {
        return from;
    }

    public void setFrom(UserDto from) {
        this.from = from;
    }

    public String getTo() {
        return to;
    }

    public void setTo(String to) {
        this.to = to;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public String getDateTime() {
        return dateTime;
    }

    public void setDateTime(String dateTime) {
        this.dateTime = dateTime;
    }

    @Override
    public String toString() {
        return "ChatMessage{" + "from='" + from + '\'' +
                ", to='" + to + '\'' +
                ", content='" + content + '\'' +
                ", dateTime='" + dateTime + '\'' +
                '}';
    }
}
