<template>
  <div>
     <user-profile>
       <template slot="user-name">{{ getUserInfo.id }}</template>
       <template slot="time">{{ 'Joined ' + getUserInfo.created }}</template>
       <template slot="karma">{{ getUserInfo.karma }}</template>
     </user-profile>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserProfile from "../components/UserProfile";
import SpinnerMixin from '../mixins/SpinnerMixin.js';

export default {
  mixins: [SpinnerMixin],
  components: {
    UserProfile
  },
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