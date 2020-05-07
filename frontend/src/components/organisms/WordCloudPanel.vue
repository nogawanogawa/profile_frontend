<template>
  <v-card>
    <v-card-title class="title">
      <v-icon left>cloud_queue</v-icon>WordCloud
    </v-card-title>
    <div v-if="res.length != 0" id="app">
      <wordcloud :data="res" nameKey="name" valueKey="value" color="Category10"></wordcloud>
    </div>
    <v-container :class="`d-flex justify-center mb-6`">
      <v-progress-circular v-if="res.length == 0" indeterminate color="primary"></v-progress-circular>
    </v-container>
  </v-card>
</template>

<script>
import wordcloud from "vue-wordcloud";
import axios from "axios";
import config from "@/config/params.js";

export default {
  name: "WordCloud",
  components: {
    wordcloud
  },
  data() {
    return {
      endpoint: config.route + this.suffix,
      res: []
    };
  },
  props: ["suffix"],
  mounted() {
    axios.get(this.endpoint).then(response => (this.res = response.data.words));
  }
};
</script>