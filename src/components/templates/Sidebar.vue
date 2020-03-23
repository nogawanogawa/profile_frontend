<template>
  <div>
    <v-app-bar app dark color="indigo darken-4" clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline">nogawanogawa</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon @click="github()">mdi-github-circle</v-icon>
          </v-btn>
        </template>
        <span>Repository of this page</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon @click="contact()">mdi-message-text</v-icon>
          </v-btn>
        </template>
        <span>Contact</span>
      </v-tooltip>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">Manu</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>
      <v-list dense>
        <v-list-item @click="home()" class="white--text">
          <v-list-item-action>
            <v-icon>home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="carrer()" class="white--text">
          <v-list-item-action>
            <v-icon>mdi-account</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Career</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="twitter_analysis()" class="white--text">
          <v-list-item-action>
            <v-icon>mdi-twitter</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Twitter</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="blog_analysis()" class="white--text">
          <v-list-item-action>
            <v-icon>menu_book</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Blog</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>


<script>
import config from "@/config/params.js";

export default {
  name: "Sidebar",
  data: () => ({
    drawer: null
  }),
  methods: {
    contact() {
      window.open(config.contact_url);
    },
    github() {
      window.open(config.this_repository_url);
    },
    home() {
      this.$router.push({ path: "/Search" });
    },
    carrer() {
      this.$router.push({ path: "/Career" });
    },
    twitter_analysis() {
      this.$router.push({ path: "/TwitterAnalysis" });
    },
    blog_analysis() {
      this.$router.push({ path: "/BlogAnalysis" });
    }
  }
};
</script>
