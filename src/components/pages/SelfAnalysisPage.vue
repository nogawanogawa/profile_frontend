<template>
  <v-app id="inspire">
    <Sidebar/>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center>
          <v-container fluid grid-list-lg pa-2>
            <v-row>
              <v-col cols="12" xs="12" sm="6" md="6">
                <WordCloudPanel/>
              </v-col>
              <v-col cols="12" xs="12" sm="6" md="6">
                <TwitterPanel/>
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
import WordCloudPanel from "@/components/templates/WordCloudPanel.vue";
import TwitterPanel from "@/components/templates/TwitterPanel.vue";

export default {
  name: "RegisterPage",
  components: {
    Sidebar,
    WordCloudPanel,
    TwitterPanel
  },
  props: {
    source: String
  },
  created() {
    this.$vuetify.theme.dark = false;
  }
};
</script>