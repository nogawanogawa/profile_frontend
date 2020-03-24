<template>
  <v-card xs12 outlined class="card">
    <v-card-title>Word Count</v-card-title>
    <BarChart/>
  </v-card>
</template>

<script>
import BarChart from "@/components/atoms/BarChart.vue";

export default {
  name: "BarChartPanel",
  components: {
    BarChart
  }
};
</script>

<style scoped>
.v-input__slider {
  width: 100%;
}
.card {
  margin-top: 20px;
}
</style>