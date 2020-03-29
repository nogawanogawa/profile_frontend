<template>
  <v-app id="inspire">
    <Sidebar/>
    <v-content>
      <v-container fluid fill-height>
        <v-layout justify-center>
          <v-flex xs6>
            <v-card-title>
              <v-icon>work</v-icon>
              <div class="cardtitle">Career</div>
            </v-card-title>
            <CareerPanel/>
          </v-flex>
          <v-flex xs6>
            <SkillPanel/>
            <PortfolioPanel/>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Sidebar from "@/components/templates/Sidebar.vue";
import CareerPanel from "@/components/templates/CareerPanel.vue";
import SkillPanel from "@/components/templates/SkillPanel.vue";
import PortfolioPanel from "@/components/templates/PortfolioPanel.vue";

export default {
  name: "CareerPage",
  components: {
    Sidebar,
    CareerPanel,
    SkillPanel,
    PortfolioPanel
  },
  props: {
    source: String
  }
};
</script>