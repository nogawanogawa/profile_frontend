<template>
  <v-card xs12 flat outlined>
    <v-card-title>Career</v-card-title>
    <v-timeline dense>
      <TimelineItem
        v-for="i in items"
        :key="i"
        v-bind:date="i.date"
        v-bind:title="i.title"
        v-bind:contents="i.contents"
      />
    </v-timeline>
  </v-card>
</template>

<script>
import TimelineItem from "@/components/organisms/TimelineItem.vue";
import config from "@/config/params.js";

export default {
  name: "DetailPanel",
  components: { TimelineItem },
  data: () => ({
    items: config.items
  }),
  methods: {
    click() {
      this.$router.push({ path: "/Home" });
    }
  }
};
</script>

<style scoped>
.v-input__slider {
  width: 100%;
}
</style>