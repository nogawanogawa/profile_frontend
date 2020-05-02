<script>
import { HorizontalBar } from "vue-chartjs";

export default {
  extends: HorizontalBar,
  name: "BarChartPanel",
  props: {
    chartdata: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      options: {
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "access"
              }
            }
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                stepSize: 10
              }
            }
          ]
        }
      }
    };
  },
  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
};
</script>

<style scoped>
.v-input__slider {
  width: 100%;
}
</style>