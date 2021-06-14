package com.sitchat.server.models.dto.authentication;

public class AuthenticationRespond {
    private final String username;
    private final String jwt;

    public AuthenticationRespond(String username, String jwt) {
        this.username = username;
        this.jwt = jwt;
    }

    public String getJwt() {
        return jwt;
    }

    public String getUsername() {
        return username;
    }
}
