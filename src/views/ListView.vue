<template>
  <list-item v-bind:item-list="getList"></list-item>
</template>

<script>
import ListItem from '../components/ListItem.vue'
import ListMixin from '../mixins/ListMixin.js'

export default {
  name: "ListView",
  components: {
    ListItem,
  },
  mixins: [ListMixin]
};
</script>

<style>
</style>