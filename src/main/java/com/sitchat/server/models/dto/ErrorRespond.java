package com.sitchat.server.models.dto;

public class ErrorRespond {
    private final String message;

    public ErrorRespond(String message) {
        this.message = message;
    }

    public String getMessage() {
        return message;
    }
}
