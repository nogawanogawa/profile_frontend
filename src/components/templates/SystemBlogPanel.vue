<template>
  <v-card class="pa-2">
    <v-card-title class="title">
      <v-icon>developer_board</v-icon>
      <div class="cardtitle">どこにでもいるSEの備忘録</div>
    </v-card-title>
    <v-container>
      <v-card
        class="blog"
        outlined
        flat
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
    endpoint: config.route + "hatena_work",
    blog_url: config.hatena_url
  }),
  mounted: function() {
    axios.get(this.endpoint).then(
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
