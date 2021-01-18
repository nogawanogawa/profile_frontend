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
          <v-list-item-title class="title">Menu</v-list-item-title>
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
            <v-list-item-title>About Me</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="atcoder_analysis()" class="white--text">
          <v-list-item-action>
            <v-icon>computer</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Atcoder</v-list-item-title>
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
        <v-list-group prepend-icon="menu_book" no-action>
          <template v-slot:activator>
            <v-list-item-title>Blog</v-list-item-title>
          </template>
          <v-list-item @click="blog_analysis()" class="white--text">
            <v-list-item-content>
              <v-list-item-title>どこにでもいるSEの備忘録</v-list-item-title>
              <v-list-item-subtitle>システム開発ブログ</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item @click="machinelearning_blog_analysis()" class="white--text">
            <v-list-item-content>
              <v-list-item-title>Re:ゼロから始めるML生活</v-list-item-title>
              <v-list-item-subtitle>機械学習ブログ</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list-group>
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
    atcoder_analysis() {
      this.$router.push({ path: "/AtCoderAnalysis" });
    },
    twitter_analysis() {
      this.$router.push({ path: "/TwitterAnalysis" });
    },
    blog_analysis() {
      this.$router.push({ path: "/BlogAnalysis" });
    },
    machinelearning_blog_analysis() {
      this.$router.push({ path: "/MachineLearningBlogAnalysis" });
    }
  }
};
</script>
<style scoped>
.title {
  margin-left: 20px;
}
</style>

