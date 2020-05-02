<template>
  <div class="example">
    <apexchart type="scatter" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "ScatterExample",
  components: {
    apexchart: VueApexCharts
  },
  data: function() {
    return {
      series: [
        {
          name: "SAMPLE A",
          data: [[22.1, 2]]
        },
        {
          name: "SAMPLE B",
          data: [[6.4, 13.4]]
        },
        {
          name: "SAMPLE C",
          data: [[21.7, 3]]
        }
      ],
      chartOptions: {
        chart: {
          type: "scatter",
          toolbar: {
            show: false
          }
          //          events: {
          //            dataPointSelection: function(event, chartContext, config) {
          //              alert(config);
          //            }
          //          }
        },
        dataLabels: {
          enabled: false
        },
        fill: {
          opacity: 0.8
        },
        xaxis: {
          tickAmount: 10
        },
        legend: {
          show: false
        },
        tooltip: {
          enabled: true,
          x: {
            show: false,
            formatter: undefined
          },
          y: {
            formatter: function() {
              return;
            }
          }
        }
      }
    };
  }
};
</script>

