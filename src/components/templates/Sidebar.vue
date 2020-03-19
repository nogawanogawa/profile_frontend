<template>
  <div>
    <v-app-bar app dark color="indigo darken-4" clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline">nogawanogawa</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped>
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
export default {
  name: "Sidebar",
  data: () => ({
    drawer: null
  }),
  methods: {
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
