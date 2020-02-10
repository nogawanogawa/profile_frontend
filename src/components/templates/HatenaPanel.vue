<template>
  <v-card>
    <v-card-title class="title">Tech Blog</v-card-title>
    <v-container>
      <v-card class="blog" color="deep-purple darken-3" dark v-for="item in items" :key="item">
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
    endpoint: config.route + "hatena",
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
  }
};
</script>

<style scoped>
.blog {
  margin-top: 10px;
}
</style>
