<template>
  <div>
    <section>
      <!-- 질문 상세 정보 -->
      <div class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link v-bind:to="`/user/${getItemInfo.user}`">
            {{ getItemInfo.user }}
          </router-link>
          <div class="time">{{ getItemInfo.time_ago }} by</div>
        </div>
      </div>
      <h2>{{ getItemInfo.title }}</h2>
    </section>
    <section>
      <div v-html="getItemInfo.content"></div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["getItemInfo"]),
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