<template>
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.id }} {{ item.name }} 
      <el-table
      :data="item.employees"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="员工ID"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="员工姓名"
        width="180">
      </el-table-column>
    </el-table>
    </li>
  </ul>
</template>

<script>
import { getAllDepartments } from "../../api";
export default {
  name: "GetAllDepartments",
  data() {
    return {
      items: []
    };
  },
  methods: {
    getData: function() {
      getAllDepartments().then(response => {
        this.items = response.data;
      });
    }
  },
  mounted: function() {
    this.getData();
  }
};
</script>

<style></style>
