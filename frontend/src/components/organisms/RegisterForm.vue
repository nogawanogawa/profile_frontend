<template>
  <v-container fluid grid-list-xl>
    <v-layout wrap align-center>
      <v-flex xs12 sm4 d-flex>
        <v-select :items="titles" v-model="title" label="Title" outlined></v-select>
      </v-flex>
      <v-flex xs12 sm4 d-flex>
        <v-select :items="categories" v-model="category" label="Category" outlined></v-select>
      </v-flex>
      <v-flex xs12 sm4 d-flex>
        <v-select :items="contents" v-model="content" label="Content" outlined></v-select>
      </v-flex>
    </v-layout>
    <ProgressCircle v-bind:display="$store.state.display.progress"/>
    <v-layout wrap align-center>
      <v-flex xs10 offset-xs1>
        <v-btn
          v-if="!$store.state.display.progress"
          block
          color="secondary"
          dark
          @click="create({'title':title, 'category':category, 'content':content})"
        >Register</v-btn>
      </v-flex>
    </v-layout>
    <SuccessAlert v-bind:display="$store.state.status.success" v-bind:text="success_msg"/>
    <ErrorAlert v-bind:display="$store.state.status.error" v-bind:text="error_msg"/>
  </v-container>
</template> 

<script>
import ProgressCircle from "@/components/atoms/ProgressCircle.vue";
import SuccessAlert from "@/components/atoms/SuccessAlert.vue";
import ErrorAlert from "@/components/atoms/ErrorAlert.vue";
import { mapActions } from "vuex";
export default {
  name: "RegisterForm",
  components: {
    ProgressCircle,
    SuccessAlert,
    ErrorAlert
  },
  methods: {
    ...mapActions(["create"])
  },
  data: () => ({
    titles: ["potato", "onion", "curry", "poak"],
    categories: ["food", "vagitable", "meat"],
    contents: ["good", "not good", "not bad", "bad"],
    alert: true,
    success_msg: "登録成功",
    error_msg: "登録失敗"
  })
};
</script>