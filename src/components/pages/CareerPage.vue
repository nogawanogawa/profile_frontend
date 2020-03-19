<template>
  <v-app id="inspire">
    <Sidebar/>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center>
          <v-flex xs12>
            <CareerPanel/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Sidebar from "@/components/templates/Sidebar.vue";
import CareerPanel from "@/components/templates/CareerPanel.vue";

export default {
  name: "CareerPage",
  components: {
    Sidebar,
    CareerPanel
  },
  props: {
    source: String
  }
};
</script>