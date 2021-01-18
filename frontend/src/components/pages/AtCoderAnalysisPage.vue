<template>
  <AtCoderLayout v-bind:title="title" v-bind:icon="icon">
    <template v-slot:rate>
      <AtcoderPanel v-bind:title="graph_title" v-bind:icon="graph_icon" />
    </template>
    <template v-slot:result>
      <AtcoderResultTable v-bind:items="items" />
    </template>
  </AtCoderLayout>
</template>


<script>
import AtCoderLayout from "@/components/templates/AtCoderLayout.vue";
import AtcoderPanel from "@/components/organisms/AtcoderPanel.vue";
import AtcoderResultTable from "@/components/atoms/AtCoderResultTable.vue";
import config from "@/config/params.js";
import axios from "axios";

export default {
  name: "AtCoderAnalysis",
  components: {
    AtCoderLayout,
    AtcoderPanel,
    AtcoderResultTable,
  },
  props: {
    source: String,
  },
  data: () => ({
    endpoint: config.route + "atcoder_result",
    title: "AtCoder",
    icon: "computer",
    graph_title: "Rate",
    graph_icon: "timeline",
    items: [],
  }),
  mounted() {
    axios.get(this.endpoint).then((response) => (this.items = response.data.atcoder));
  }
};
</script>