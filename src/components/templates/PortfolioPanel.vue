<template>
  <v-card outlined class="skill">
    <v-card-title class="title">
      <v-icon>web_asset</v-icon>
      <div class="cardtitle">Portfolio</div>
    </v-card-title>
    <v-container>
      <v-card outlined class="card">
        <v-card-title class="headline">Profile Site</v-card-title>
        <v-container>This page.</v-container>
      </v-card>
    </v-container>
  </v-card>
</template>

<script>
import config from "@/config/params.js";

export default {
  name: "DetailPanel",
  data: () => ({
    items: config.items
  }),
  methods: {
    click() {
      this.$router.push({ path: "/Home" });
    }
  }
};
</script>

<style scoped>
.v-input__slider {
  width: 100%;
}
.skill {
  margin: 10px;
}
.card {
  margin: 10px;
}
</style>