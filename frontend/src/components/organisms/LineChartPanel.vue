<template>
  <v-card xs12 class="card">
    <v-card-title class="title">
      <v-icon>insert_chart_outlined</v-icon>
      <div class="cardtitle">Daily Access (last 30 days)</div>
    </v-card-title>
    <line-chart v-if="loaded" :chartdata="chartdata" :width="1000"/>
    <v-container :class="`d-flex justify-center mb-6`">
      <v-progress-circular v-if="!loaded" indeterminate color="primary"></v-progress-circular>
    </v-container>
  </v-card>
</template>


<script>
import LineChart from "@/components/atoms/LineChart.vue";
import config from "@/config/params.js";
import axios from "axios";

export default {
  components: {
    LineChart
  },
  name: "LineChartContainer",
  props: ["suffix"],
  data() {
    return {
      endpoint: config.route + this.suffix,
      loaded: false,
      chartdata: {
        labels: [],
        datasets: [
          {
            label: "Daily Access",
            data: null
          }
        ],
        data: null
      },
      labels: null
    };
  },
  mounted() {
    axios.get(this.endpoint).then(response => {
      this.chartdata.datasets[0].data = Array.from(
        response.data.result,
        w => w["ga:1dayUsers"]
      );
      this.chartdata.labels = Array.from(
        response.data.result,
        w => w["ga:date"]
      );
      this.loaded = true;
    });
  }
};
</script>

<style scoped>
.blog {
  margin-top: 10px;
}
.cardtitle {
  margin-left: 10px;
}
</style>
