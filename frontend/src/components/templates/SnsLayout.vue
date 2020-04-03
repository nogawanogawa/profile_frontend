<template>
  <v-app id="inspire">
    <Sidebar/>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center>
          <v-container fluid grid-list-lg pa-2>
            <v-row>
              <v-col cols="12" xs="12" sm="6" md="8">
                <slot name="stats"></slot>
              </v-col>
              <v-col cols="12" xs="12" sm="6" md="4">
                <slot name="original"></slot>
              </v-col>
              <v-col cols="12" xs="12" sm="6" md="8"></v-col>
            </v-row>
          </v-container>
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

