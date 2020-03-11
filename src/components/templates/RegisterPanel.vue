<template>
  <v-card>
    <v-card-title class="title">WordCloud</v-card-title>
    <div id="app">
      <wordcloud :data="res" nameKey="name" valueKey="value" color="Accent"></wordcloud>
    </div>
  </v-card>
</template>

<script>
import wordcloud from "vue-wordcloud";
import axios from "axios";
import config from "@/config/params.js";

export default {
  name: "app",
  components: {
    wordcloud
  },
  data() {
    return {
      endpoint: config.route + "twitter_word_cloud",
      res: []
    };
  },
  mounted() {
    axios.get(this.endpoint).then(response => (this.res = response.data.words));
  }
};
</script>