<template>
  <v-card class="pa-2">
    <v-card-title class="title">
      <v-icon>insert_drive_file</v-icon>
      <div class="cardtitle">最近の投稿</div>
    </v-card-title>
    <v-container>
      <v-card
        class="blog"
        outlined
        hover
        v-for="item in items"
        :key="item"
        v-on:click="window_open(item.link)"
      >
        <v-card-title class="headline">{{item.title}}</v-card-title>
        <v-card-text>{{item.contents}}</v-card-text>
        <v-card-text>{{item.published}}</v-card-text>
      </v-card>
    </v-container>
    <v-card-text class="d-flex flex-row-reverse">
      <a :href="blog_url">more</a>
    </v-card-text>
  </v-card>
</template>

<script>
import axios from "axios";
import config from "@/config/params.js";

export default {
  data: () => ({
    items: [],
    endpoint: config.route
  }),
  props: ["blog", "blog_url"],
  mounted: function() {
    axios.get(this.endpoint + this.blog).then(
      response =>
        (this.items = response.data.entry
          .sort(function(a, b) {
            if (a.published < b.published) {
              return 1;
            } else {
              return -1;
            }
          })
          .slice(0, 4))
    );
  },
  methods: {
    window_open: function(url) {
      window.open(url);
    }
  }
};
</script>

<style scoped>
.blog {
  margin-top: 10px;
}
.cardtitle {
  margin-left: 10px;
}
</style>
