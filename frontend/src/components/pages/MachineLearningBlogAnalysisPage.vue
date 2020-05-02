<template>
  <BlogLayout>
    <template v-slot:access>
      <LineChartPanel v-bind:suffix="access_endpoint"/>
    </template>
    <template v-slot:stats>
      <WordCloudPanel v-bind:suffix="word_cloud_endpoint"/>
      <HotEntryPanel v-bind:suffix="hotentry_endpoint"/>
    </template>
    <template v-slot:original>
      <MachineLearningBlogPanel/>
    </template>
  </BlogLayout>
</template>


<script>
import BlogLayout from "@/components/templates/BlogLayout.vue";
import MachineLearningBlogPanel from "@/components/organisms/MachineLearningBlogPanel.vue";
import WordCloudPanel from "@/components/organisms/WordCloudPanel.vue";
import LineChartPanel from "@/components/organisms/LineChartPanel.vue";
import HotEntryPanel from "@/components/organisms/HotEntryPanel.vue";

export default {
  name: "RegisterPage",
  components: {
    BlogLayout,
    MachineLearningBlogPanel,
    WordCloudPanel,
    LineChartPanel,
    HotEntryPanel
  },
  data: () => ({
    word_cloud_endpoint: "hatena_com_word_cloud",
    access_endpoint: "hatena_com/access_docs",
    hotentry_endpoint: "hatena_com/access"
  }),
  props: {
    source: String
  }
};
</script>