<template>
  <v-card>
    <v-card-title class="title">
      <v-icon large left>computer</v-icon>
      <div class="cardtitle">AtCoder</div>
    </v-card-title>
    <AtcoderChart v-if="loaded" :chartdata="chartdata" :height="100" />
    <v-container :class="`d-flex justify-center mb-6`">
      <v-progress-circular v-if="!loaded" indeterminate color="primary"></v-progress-circular>
    </v-container>
    <v-card-text class="d-flex flex-row-reverse">
      <a :href="atcoder_url">more</a>
    </v-card-text>
  </v-card>
</template>


<script>
import AtcoderChart from "@/components/atoms/AtcoderChart.vue";
import config from "@/config/params.js";
import axios from "axios";

export default {
  components: {
    AtcoderChart,
  },
  name: "AtcoderChartContainer",
  data() {
    return {
      atcoder_url: config.atcoder_url,
      endpoint: config.route + "atcoder_graph",
      loaded: false,
      chartdata: {
        labels: [],
        datasets: [
          {
            label: "rate",
            backgroundColor: null,
            data: null,
            lineTension: 0,
            fill: false,
            borderColor: "#CFD8DC",
          },
        ],
        data: null,
      },
      labels: null,
    };
  },
  mounted() {
    axios.get(this.endpoint).then((response) => {
      this.chartdata.datasets[0].data = Array.from(
        response.data.atcoder,
        (w) => w["rating"]
      );
      this.chartdata.labels = Array.from(
        response.data.atcoder,
        (w) => w["date"]
      );
      this.chartdata.datasets[0].backgroundColor = Array.from(
        response.data.atcoder,
        (w) => w["color"]
      );
      this.loaded = true;
    });
  },
};
</script>

