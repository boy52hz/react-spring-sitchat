package com.sitchat.server.models;

public class AuthenticationRespond {
    private final String jwt;

    public AuthenticationRespond(String jwt) {
        this.jwt = jwt;
    }

    public String getJwt() {
        return jwt;
    }
}
