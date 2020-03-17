<template>
  <v-app id="inspire">
    <Sidebar/>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center>
          <v-container fluid grid-list-lg pa-2>
            <v-row>
              <v-col cols="12" xs="12" sm="6" md="6">
                <SystemBlogPanel/>
              </v-col>
              <v-col cols="12" xs="12" sm="6" md="6">
                <MachineLearningBlogPanel/>
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
import MachineLearningBlogPanel from "@/components/templates/MachineLearningBlogPanel.vue";

export default {
  name: "RegisterPage",
  components: {
    Sidebar,
    SystemBlogPanel,
    MachineLearningBlogPanel
  },
  props: {
    source: String
  },
  created() {
    this.$vuetify.theme.dark = false;
  }
};
</script>