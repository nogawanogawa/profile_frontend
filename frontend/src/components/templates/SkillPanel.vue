<template>
  <v-card outlined class="skill">
    <v-card-title class="title">
      <v-icon>build</v-icon>
      <div class="cardtitle">Skill</div>
    </v-card-title>
    <v-container>
      <v-card outlined class="card">
        <v-card-title class="headline">Frontend</v-card-title>
        <v-container>
          <v-chip class="ma-2" color="green" text-color="white">Vue.js</v-chip>
        </v-container>
      </v-card>
      <v-card outlined class="card">
        <v-card-title class="headline">Backend</v-card-title>
        <v-container>
          <v-chip class="ma-2" color="deep-orange " text-color="white">Java</v-chip>
          <v-chip class="ma-2" color="light-blue " text-color="white">Python</v-chip>
          <v-chip class="ma-2" color="light-blue darken-4" text-color="white">C/C++</v-chip>
          <v-chip class="ma-2" color="red " text-color="white">Scala</v-chip>
          <v-chip class="ma-2" color="blue " text-color="white">Go</v-chip>
        </v-container>
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