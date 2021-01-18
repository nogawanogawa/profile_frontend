<template>
  <v-app id="inspire">
    <Sidebar/>
    <v-content>
      <v-container fluid>
        <v-container fluid grid-list-lg pa-2>
          <v-row>
            <v-col cols="12" xs="12" sm="12" md="12">
              <v-text class="headline">
                <v-icon>{{icon}}</v-icon>
                {{title}}
              </v-text>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" xs="12" sm="12" md="12">
              <slot name="rate"></slot>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" xs="12" sm="12" md="12">
              <slot name="result"></slot>
            </v-col>
          </v-row>
        </v-container>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Sidebar from "@/components/organisms/Sidebar.vue";

export default {
  components: {
    Sidebar
  },
  props: ["title", "icon"]
};
</script>

