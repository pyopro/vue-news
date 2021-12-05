<template>
  <div>
    <section>
      <user-profile>
        <router-link v-bind:to="`/user/${getItemInfo.user}`" slot="user-name">
          {{ getUserInfo.id }}
        </router-link>
        <template slot="time">{{ "Posted " + getUserInfo.created }}</template>
      </user-profile>
    </section>
    <section>
      <h2>{{ getItemInfo.title }}</h2>
    </section>
    <section>
      <div v-html="getItemInfo.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import UserProfile from "../components/UserProfile";
import SpinnerMixin from '../mixins/SpinnerMixin.js';

export default {
  mixins: [SpinnerMixin],
  components: {
    UserProfile,
  },
  computed: {
    ...mapGetters(["getItemInfo"]),
    getUserInfo: function () {
      let userInfo = {
        id: this.getItemInfo.user,
        created: this.getItemInfo.time_ago,
      };

      return userInfo;
    },
  },
  created() {
    const id = this.$route.params.id;
    this.$store.dispatch("fetchItemInfo", id);
  },
};
</script>

<style scoped>
.user-container {
  padding: 0.5rem;
  display: flex;
  align-items: center;
}
.fa-user {
  font-size: 2.5rem;
}
.user-description {
  padding-left: 8px;
}
.time {
  font-size: 0.7rem;
}
</style>