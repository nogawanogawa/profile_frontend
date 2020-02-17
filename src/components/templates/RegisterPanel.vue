<template>
  <v-card>
    <v-card-title class="title">WordCloud</v-card-title>
    <div id="app">
      <wordcloud :data="words" nameKey="name" valueKey="value" color="Accent"></wordcloud>
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
      words: [
        {
          name: "猫",
          value: 26
        },
        {
          name: "猫",
          value: 26
        },
        {
          name: "猫",
          value: 26
        },
        {
          name: "猫",
          value: 26
        },
        {
          name: "猫",
          value: 26
        },
        {
          name: "魚",
          value: 19
        },
        {
          name: "things",
          value: 18
        },
        {
          name: "look",
          value: 16
        },
        {
          name: "two",
          value: 15
        },
        {
          name: "fun",
          value: 9
        },
        {
          name: "know",
          value: 9
        },
        {
          name: "good",
          value: 9
        },
        {
          name: "play",
          value: 6
        }
      ]
    };
  },
  methods: {},
  mounted: function() {
    axios
      .get(this.endpoint)
      .then(response => (this.words = response.data.words));
  }
};
</script>