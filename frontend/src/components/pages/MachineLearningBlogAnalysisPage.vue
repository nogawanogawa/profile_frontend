<template>
  <BlogLayout v-bind:title="title" v-bind:icon="icon">
    <template v-slot:access>
      <LineChartPanel v-bind:suffix="access_endpoint"/>
    </template>
    <template v-slot:stats>
      <WordCloudPanel v-bind:suffix="word_cloud_endpoint"/>
      <HotEntryPanel v-bind:suffix="hotentry_endpoint"/>
    </template>
    <template v-slot:original>
      <BlogPanel v-bind:blog="blog" v-bind:blog_url="blog_url"/>
    </template>
  </BlogLayout>
</template>


<script>
import BlogLayout from "@/components/templates/BlogLayout.vue";
import BlogPanel from "@/components/organisms/BlogPanel.vue";
import WordCloudPanel from "@/components/organisms/WordCloudPanel.vue";
import LineChartPanel from "@/components/organisms/LineChartPanel.vue";
import HotEntryPanel from "@/components/organisms/HotEntryPanel.vue";
import config from "@/config/params.js";

export default {
  name: "RegisterPage",
  components: {
    BlogLayout,
    BlogPanel,
    WordCloudPanel,
    LineChartPanel,
    HotEntryPanel
  },
  data: () => ({
    word_cloud_endpoint: "hatena_com_word_cloud",
    access_endpoint: "hatena_com/access_docs",
    hotentry_endpoint: "hatena_com/access",
    blog: "hatena_com",
    blog_url: config.hatena_com_url,
    title: "Re:ゼロから始めるML生活",
    icon: "show_chart"
  }),
  props: {
    source: String
  }
};
</script>