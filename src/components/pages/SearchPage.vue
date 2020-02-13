<template>
  <v-app id="inspire">
    <Sidebar/>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center>
          <v-container fluid grid-list-lg pa-2>
            <v-layout>
              <v-flex xs12>
                <GithubPanel/>
              </v-flex>
            </v-layout>

            <v-layout>
              <v-flex xs12 md4>
                <ConnpassPanel/>
              </v-flex>
              <v-flex xs12 md4>
                <HatenaPanel/>
              </v-flex>
              <v-flex xs12 md4>
                <TwitterPanel/>
              </v-flex>
            </v-layout>
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