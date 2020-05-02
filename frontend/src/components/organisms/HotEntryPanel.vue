<template>
  <v-card xs12 class="card">
    <v-card-title class="title">
      <v-icon>bar_chart</v-icon>
      <div class="cardtitle">Hot Entry</div>
    </v-card-title>
    <BarChart v-if="loaded" :chartdata="chartdata"/>
  </v-card>
</template>

<script>
import BarChart from "@/components/atoms/BarChart.vue";
import config from "@/config/params.js";
import axios from "axios";

export default {
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
            label: "Access",
            data: [],
            backgroundColor: "#1A237E"
          }
        ]
      },
      labels: []
    };
  },
  mounted() {
    axios.get(this.endpoint).then(response => {
      this.chartdata.datasets[0].data = Array.from(
        response.data.result,
        w => w["ga:pageviews"]
      );
      this.chartdata.labels = Array.from(
        response.data.result,
        w => w["ga:pageTitle"]
      );
      this.loaded = true;
    });
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