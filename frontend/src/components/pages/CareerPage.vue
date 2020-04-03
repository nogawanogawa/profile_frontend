<template>
  <CareerLayout>
    <template v-slot:career>
      <v-card-title>
        <v-icon>work</v-icon>
        <div class="cardtitle">Career</div>
      </v-card-title>
      <CareerPanel/>
    </template>
    <template v-slot:skill>
      <SkillPanel/>
    </template>
    <template v-slot:portfolio>
      <PortfolioPanel/>
    </template>
  </CareerLayout>
</template>

<script>
import CareerLayout from "@/components/templates/CareerLayout.vue";
import CareerPanel from "@/components/organisms/CareerPanel.vue";
import SkillPanel from "@/components/organisms/SkillPanel.vue";
import PortfolioPanel from "@/components/organisms/PortfolioPanel.vue";

export default {
  name: "CareerPage",
  components: {
    CareerLayout,
    CareerPanel,
    SkillPanel,
    PortfolioPanel
  },
  props: {
    source: String
  }
};
</script>