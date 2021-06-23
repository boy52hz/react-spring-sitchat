package com.sitchat.server.websocket;

public class StatsMessageWrapper {
    StatsMessage stats;

    public StatsMessageWrapper(StatsMessage stats) {
        this.stats = stats;
    }

    public StatsMessage getStats() {
        return stats;
    }

    public void setStats(StatsMessage stats) {
        this.stats = stats;
    }
}
