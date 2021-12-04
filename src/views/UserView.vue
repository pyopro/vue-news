<template>
  <div>
    {{ this.getUserInfo }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getUserInfo"]),
  },
  created() {
    const userName = this.$route.params.id;
    this.$store.dispatch("fetchUserInfo", userName);
  },
};
</script>

<style>
</style>