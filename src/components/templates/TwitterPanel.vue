<template>
  <v-card class="mx-auto">
    <v-card-title>
      <v-icon large left color="#26c6da">mdi-twitter</v-icon>
    </v-card-title>
    <v-flex xs12>
      <Timeline :id="user_id" sourceType="profile" :options="{ tweetLimit: '3' }"/>
    </v-flex>
  </v-card>
</template>

<script>
import { Timeline } from "vue-tweet-embed";
import config from "@/config/params.js";

export default {
  components: {
    Timeline
  },
  data: function() {
    return {
      user_id: config.twitter_user_id
    };
  }
};
</script>