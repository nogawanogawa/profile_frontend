<template>
  <div>
    <v-data-table
      :mobile="true"
      :headers="headers"
      :items="items"
      :items-per-page="10"
      :sort-by="['date']"
      :sort-desc="[true]"
      class="elevation-3"
    ></v-data-table>
  </div>
</template>

<script>
export default {
  props: ["items"],
  data: () => ({
    headers: [
      {
        text: "Date",
        align: "start",
        value: "date",
      },
      { text: "Name", value: "name" },
      { text: "Rank", value: "rank" },
      { text: "Performance", value: "performance" },
      { text: "Rating", value: "rating" },
      { text: "Diff", value: "diff" },
    ],
  }),
};
</script>

