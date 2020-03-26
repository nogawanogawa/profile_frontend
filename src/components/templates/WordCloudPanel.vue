<template>
  <v-card>
    <v-card-title class="title">
      <v-icon left>cloud_queue</v-icon>WordCloud
    </v-card-title>
    <div id="app">
      <wordcloud :data="res" nameKey="name" valueKey="value" color="Category10"></wordcloud>
    </div>
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