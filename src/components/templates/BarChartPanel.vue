<template>
  <v-card xs12>
    <v-card-title>Word count</v-card-title>
    <v-spacer></v-spacer>
    {{series[0].data}}
    {{options.xaxis.categories}}
    <div>
      <apexchart width="500" type="bar" :options="options" :series="series"></apexchart>
    </div>
  </v-card>
</template>


<script>
import VueApexCharts from "vue-apexcharts";
import axios from "axios";
import config from "@/config/params.js";

export default {
  name: "BarChartPanel",
  components: {
    apexchart: VueApexCharts
  },
  data: function() {
    return {
      endpoint: config.route + "twitter_word_cloud",
      res: [],
      options: {
        chart: {
          type: "bar",
          id: "vuechart-example"
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        xaxis: {
          categories: null
        }
      },
      series: [
        {
          name: "count",
          data: null
        }
      ]
    };
  },
  methods: {},
  mounted() {
    axios
      .get(this.endpoint)
      .then(response =>
        (this.res = response.data.words).then(
          (this.categories = Array.from(
            this.res,
            x => x.name
          ).slice(0, 10)).then(
            (this.data = Array.from(this.res, x => x.value).slice(
              0,
              10
            ))
          ).then(
        chart.updateOptions({
          xaxis: {
            categories = this.categories
          }
        })
      )
        )
      )
  }
};
</script>

<style scoped>
.v-input__slider {
  width: 100%;
}
</style>