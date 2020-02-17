<template>
  <div>
    <v-app-bar app dark color="indigo darken-4" clipped-left>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline">nogawanogawa</v-toolbar-title>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped>
      <v-list dense>
        <v-list-item @click="click_1()" class="white--text">
          <v-list-item-action>
            <v-icon>home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item @click="self_analysis()" class="white--text">
          <v-list-item-action>
            <v-icon>bar_chart</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>SelfAnalysis</v-list-item-title>
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
    click_1() {
      this.$router.push({ path: "/Search" });
    },
    self_analysis() {
      this.$router.push({ path: "/SelfAnalysis" });
    }
  }
};
</script>
