<template>
  <HomeLayout>
    <template v-slot:github>
      <GithubPanel/>
    </template>
    <template v-slot:atcoder>
      <AtcoderPanel/>
    </template>
    <template v-slot:connpass>
      <ConnpassPanel/>
    </template>
    <template v-slot:hatena>
      <HatenaPanel/>
    </template>
    <template v-slot:twitter>
      <TwitterPanel/>
    </template>
  </HomeLayout>
</template>

<script>
import HomeLayout from "@/components/templates/HomeLayout.vue";
import TwitterPanel from "@/components/organisms/TwitterPanel.vue";
import ConnpassPanel from "@/components/organisms/ConnpassPanel.vue";
import AtcoderPanel from "@/components/organisms/AtcoderPanel.vue";
import GithubPanel from "@/components/organisms/GithubPanel.vue";
import HatenaPanel from "@/components/organisms/HatenaPanel.vue";

export default {
  name: "Home",
  components: {
    HomeLayout,
    TwitterPanel,
    ConnpassPanel,
    GithubPanel,
    AtcoderPanel,
    HatenaPanel
  },
  props: {
    source: String
  },
  data: () => ({}),
  created() {
    this.$vuetify.theme.dark = false;
  }
};
</script>