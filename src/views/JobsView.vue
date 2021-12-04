<template>
  <div>
    <list-item v-bind:item-list="getJobsList"></list-item>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListItem from "../components/ListItem.vue";

export default {
  name: "Jobs",
  components: {
    ListItem,
  },
  computed: {
    ...mapGetters(["getJobsList"]),
  },
  created() {
    this.$store.dispatch("fetchJobsList");
  },
};
</script>

<style>
</style>