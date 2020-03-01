<template>
  <v-card class="pa-2">
    <v-card-title class="title">Meetup Timeline</v-card-title>
    <v-layout>
      <v-card-text :align="`center`" v-if="items.length == 0">No plan</v-card-text>
      <v-timeline :align-top="alignTop" :dense="dense" :reverse="reverse" v-if="items.length != 0">
        <v-timeline-item
          v-for="item in items"
          :key="item"
          :fill-dot="fillDot"
          :hide-dot="hideDot"
          :icon="icon ? 'mdi-star' : ''"
          :icon-color=" iconColor ? 'deep-orange' : ''"
          :left="left"
          :right="right"
          :small="small"
        >
          <template v-slot:icon>
            <v-avatar v-if="avatar">
              <img src="http://i.pravatar.cc/64">
            </v-avatar>
          </template>
          <v-flex xs11>
            <v-card
              color="blue darken-4"
              dark
              class="elevation-2"
              v-on:click="window_open(item.event_url)"
            >
              <v-card-title class="title">{{item.title}}</v-card-title>
              <v-card-text>{{item.started_at}}</v-card-text>
              <v-card-text>{{item.catch}}</v-card-text>
            </v-card>
          </v-flex>
        </v-timeline-item>
      </v-timeline>
    </v-layout>
    <v-card-text class="d-flex flex-row-reverse">
      <a :href="connpass_url">more</a>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from "axios";
import config from "@/config/params.js";

export default {
  data: () => ({
    alignTop: false,
    avatar: false,
    dense: true,
    fillDot: false,
    hideDot: false,
    icon: false,
    iconColor: false,
    left: false,
    reverse: false,
    right: true,
    small: false,
    items: [],
    today: new Date(),
    test: "",
    connpass_url: config.connpass_url,
    endpoint: config.route
  }),
  mounted: function() {
    axios.get(this.endpoint + "connpass").then(
      response =>
        (this.items = response.data.events
          .sort(function(a, b) {
            if (a.started_at > b.started_at) {
              return 1;
            } else {
              return -1;
            }
          })
          .filter(x => x.started_at > this.today.toISOString())
          .slice(0, 5))
    );
  },
  methods: {
    window_open: function(url) {
      window.open(url);
    }
  }
};
</script>