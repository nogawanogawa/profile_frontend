<template>
  <SnsLayout>
    <template v-slot:stats>
      <WordCloudPanel v-bind:suffix="endpoint"/>
    </template>
    <template v-slot:original>
      <MachineLearningBlogPanel/>
    </template>
  </SnsLayout>
</template>


<script>
import SnsLayout from "@/components/templates/SnsLayout.vue";
import MachineLearningBlogPanel from "@/components/organisms/MachineLearningBlogPanel.vue";
import WordCloudPanel from "@/components/organisms/WordCloudPanel.vue";

export default {
  name: "RegisterPage",
  components: {
    SnsLayout,
    MachineLearningBlogPanel,
    WordCloudPanel
  },
  data: () => ({
    endpoint: "hatena_com_word_cloud"
  }),
  props: {
    source: String
  }
};
</script>