<template>
  <div>
    <list-item v-bind:item-list="getNewsList"></list-item>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListItem from "../components/ListItem.vue";

export default {
  name: "News",
  components: {
    ListItem,
  },
  computed: {
    ...mapGetters(["getNewsList"]),
  },
  created() {
    this.$store.dispatch("fetchNewsList");
  },
};
</script>

<style>
</style>