<template>
  <SnsLayout>
    <template v-slot:stats>
      <WordCloudPanel v-bind:suffix="endpoint"/>
    </template>
    <template v-slot:original>
      <SystemBlogPanel/>
    </template>
  </SnsLayout>
</template>


<script>
import SnsLayout from "@/components/templates/SnsLayout.vue";
import SystemBlogPanel from "@/components/organisms/SystemBlogPanel.vue";
import WordCloudPanel from "@/components/organisms/WordCloudPanel.vue";

export default {
  name: "RegisterPage",
  components: {
    SnsLayout,
    SystemBlogPanel,
    WordCloudPanel
  },
  data: () => ({
    endpoint: "hatena_work_word_cloud"
  }),
  props: {
    source: String
  },
  created() {
    this.$vuetify.theme.dark = false;
  }
};
</script>