<template>
  <v-card xs12 class="card">
    <v-card-title>Word Count</v-card-title>
    <BarChart v-if="loaded" :chartdata="chartdata"/>
    <v-container :class="`d-flex justify-center mb-6`">
      <v-progress-circular v-if="!loaded" indeterminate color="primary"></v-progress-circular>
    </v-container>
  </v-card>
</template>

<script>
import BarChart from "@/components/atoms/BarChart.vue";
import config from "@/config/params.js";
import axios from "axios";

export default {
  name: "BarChartPanel",
  components: {
    BarChart
  },
  props: ["suffix"],
  data() {
    return {
      endpoint: config.route + this.suffix,
      loaded: false,
      chartdata: {
        labels: [],
        datasets: [
          {
            label: "tweet words",
            data: [],
            borderWidth: 1,
            backgroundColor: "#1A237E"
          }
        ]
      }
    };
  },
  mounted() {
    axios
      .get(this.endpoint)
      .then(response =>
        (this.chartdata.datasets[0].data = Array.from(
          response.data.words,
          w => w.value
        ).slice(0, 20)).then(
          (this.chartdata.labels = Array.from(
            response.data.words,
            w => w.name
          ).slice(0, 20)).then((this.loaded = true))
        )
      );
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