<template>
  <div>
    <list-item v-bind:item-list="getAskList"></list-item>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import ListItem from "../components/ListItem.vue";

export default {
  name: "Ask",
  components: {
    ListItem,
  },
  computed: {
    ...mapGetters(["getAskList"]),
  },  
  created() {
    this.$store.dispatch("fetchAskList");
  },
};
</script>

<style>
</style>
