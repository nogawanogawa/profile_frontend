<template>
  <v-card>
    <v-card-title class="title">Github Contribution</v-card-title>
    <div class="github">
      <img :src="github_grass_url">
    </div>

    <v-card-text class="d-flex flex-row-reverse">
      <a :href="github_url">more</a>
    </v-card-text>
  </v-card>
</template>

<script>
import config from "@/config/params.js";
export default {
  data() {
    return {
      github_grass_url: config.github_grass_url,
      github_url: config.github_url
    };
  }
};
</script>

<style scoped>
.github {
  margin-left: 20px;
}
img {
  max-width: 100%;
  height: auto;
}
text {
  text-align: right;
}
</style>
