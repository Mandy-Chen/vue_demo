<template>
  <ul>
    <li v-for="item in items" :key="item.id">{{ item.id }} {{ item.name }}</li>
  </ul>
</template>

<script>
import { getAllEmployee } from "../../api";
export default {
  name: "GetAllEmployees",
  data() {
    return {
      items: []
    };
  },
  methods: {
    getData: function() {
      getAllEmployee().then(response => {
        this.items = response.data;
      });
    }
  },
  mounted: function() {
    this.getData();
  }
};
</script>

<style>

</style>
