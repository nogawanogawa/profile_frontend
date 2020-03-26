<template>
  <v-app id="inspire">
    <Sidebar/>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center>
          <v-container fluid grid-list-lg pa-2>
            <v-row>
              <v-col cols="12" xs="12" sm="6" md="8">
                <WordCloudPanel v-bind:suffix="endpoint"/>
              </v-col>
              <v-col cols="12" xs="12" sm="6" md="4">
                <SystemBlogPanel/>
              </v-col>
            </v-row>
          </v-container>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>


<script>
import Sidebar from "@/components/templates/Sidebar.vue";
import SystemBlogPanel from "@/components/templates/SystemBlogPanel.vue";
import WordCloudPanel from "@/components/templates/WordCloudPanel.vue";

export default {
  name: "RegisterPage",
  components: {
    Sidebar,
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