<template>
  <v-app id="inspire">
    <Sidebar/>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center>
          <v-row>
            <v-col cols="12" xs="12" sm="12" md="6">
              <slot name="career"></slot>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="6">
              <slot name="skill"></slot>
              <slot name="portfolio"></slot>
            </v-col>
          </v-row>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Sidebar from "@/components/organisms/Sidebar.vue";

export default {
  components: {
    Sidebar
  }
};
</script>

