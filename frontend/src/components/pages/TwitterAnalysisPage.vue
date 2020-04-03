<template>
  <SnsLayout>
    <template v-slot:stats>
      <WordCloudPanel v-bind:suffix="'twitter_word_cloud'"/>
      <BarChartPanel/>
    </template>
    <template v-slot:original>
      <TwitterPanel/>
    </template>
  </SnsLayout>
</template>

<script>
import SnsLayout from "@/components/templates/SnsLayout.vue";
import WordCloudPanel from "@/components/organisms/WordCloudPanel.vue";
import TwitterPanel from "@/components/organisms/TwitterPanel.vue";
import BarChartPanel from "@/components/organisms/BarChartPanel.vue";

export default {
  name: "RegisterPage",
  components: {
    SnsLayout,
    WordCloudPanel,
    TwitterPanel,
    BarChartPanel
  },
  props: {
    source: String
  },
  created() {
    this.$vuetify.theme.dark = false;
  }
};
</script>