<template>
  <v-app id="inspire">
    <Sidebar/>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center>
          <v-container fluid grid-list-lg pa-2>
            <v-row>
              <v-col xs="12">
                <GithubPanel/>
              </v-col>
            </v-row>

            <v-row>
              <v-col cols="12" xs="12" sm="6" md="4">
                <ConnpassPanel/>
              </v-col>
              <v-col cols="12" xs="12" sm="6" md="4">
                <HatenaPanel/>
              </v-col>
              <v-col cols="12" xs="12" sm="6" md="4">
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
import TwitterPanel from "@/components/templates/TwitterPanel.vue";
import ConnpassPanel from "@/components/templates/ConnpassPanel.vue";
import GithubPanel from "@/components/templates/GithubPanel.vue";
import HatenaPanel from "@/components/templates/HatenaPanel.vue";

export default {
  name: "SearchPage",
  components: {
    Sidebar,
    TwitterPanel,
    ConnpassPanel,
    GithubPanel,
    HatenaPanel
  },
  props: {
    source: String
  },
  data: () => ({}),
  created() {
    this.$vuetify.theme.dark = false;
  }
};
</script>