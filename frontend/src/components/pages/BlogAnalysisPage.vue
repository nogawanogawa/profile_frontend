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
      <SystemBlogPanel/>
    </template>
  </BlogLayout>
</template>


<script>
import BlogLayout from "@/components/templates/BlogLayout.vue";
import SystemBlogPanel from "@/components/organisms/SystemBlogPanel.vue";
import WordCloudPanel from "@/components/organisms/WordCloudPanel.vue";
import LineChartPanel from "@/components/organisms/LineChartPanel.vue";
import HotEntryPanel from "@/components/organisms/HotEntryPanel.vue";

export default {
  name: "RegisterPage",
  components: {
    BlogLayout,
    SystemBlogPanel,
    WordCloudPanel,
    LineChartPanel,
    HotEntryPanel
  },
  data: () => ({
    word_cloud_endpoint: "hatena_work_word_cloud",
    access_endpoint: "hatena_work/access_docs",
    hotentry_endpoint: "hatena_work/access"
  }),
  props: {
    source: String
  },
  created() {
    this.$vuetify.theme.dark = false;
  }
};
</script>