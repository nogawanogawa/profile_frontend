<script>
import { HorizontalBar } from "vue-chartjs";
import axios from "axios";
import config from "@/config/params.js";

export default {
  extends: HorizontalBar,
  name: "BarChartPanel",
  data() {
    return {
      endpoint: config.route + "twitter_word_cloud",
      data: {
        labels: [],
        datasets: [
          {
            label: "tweet words",
            data: [10, 20, 30, 40, 50, 30, 10, 20, 30, 40, 50, 30],
            borderWidth: 1,
            backgroundColor: "#1A237E"
          }
        ]
      },
      options: {
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: "count"
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
  methods: {},
  mounted() {
    axios
      .get(this.endpoint)
      .then(response =>
        (this.data.datasets[0].data = Array.from(
          response.data.words,
          w => w.value
        ).slice(0, 20)).then(
          (this.data.labels = Array.from(
            response.data.words,
            w => w.name
          ).slice(0, 20)).then(this.renderChart(this.data, this.options))
        )
      );
  }
};
</script>

<style scoped>
.v-input__slider {
  width: 100%;
}
</style>