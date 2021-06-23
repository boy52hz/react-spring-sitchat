package com.sitchat.server.websocket;


public class StatsMessage {
    private int online;

    public StatsMessage(int online) {
        this.online = online;
    }

    public int getOnline() {
        return online;
    }

    public void setOnline(int online) {
        this.online = online;
    }

    public StatsMessageWrapper wrap() {
        return new StatsMessageWrapper(this);
    }

}
