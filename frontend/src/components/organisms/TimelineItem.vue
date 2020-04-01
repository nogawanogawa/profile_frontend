<template>
  <v-timeline-item right>
    <span>{{date}}</span>
    <v-card>
      <v-card-title class="headline">{{title}}</v-card-title>
      <v-card-text>{{contents}}</v-card-text>
    </v-card>
  </v-timeline-item>
</template> 

<script>
export default {
  name: "DeleteForm",
  methods: {},
  data: () => ({}),
  props: {
    date: String,
    title: String,
    contents: String
  }
};
</script>