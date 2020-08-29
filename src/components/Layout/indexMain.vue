<template>
  <div class="index_main">
    <el-form
      :inline="true"
      ref="form"
      :model="form"
      label-width="80px"
      class="demo-form-inline"
    >
      <el-form-item label="name">
        <el-input v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit(form)">Add</el-button>
      </el-form-item>
    </el-form>
    <ul>
      <li v-for="item in items" :key="item.message">
        {{ item.id }}  {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { addEmployee,getAllEmployee } from "../../api";
export default {
  name: "indexMain",
  data() {
    return {
      form: {
        name: "",
      },
      items: [],
    };
  },
  methods: {
    onSubmit(form) {
      let employee = {
        id: -1,
        name: form.name
      };
      addEmployee(form.name).then(response => {});
    },
    getData: function() {
      getAllEmployee().then((response)=>{
          this.items=response.data;
      })
    }
  },
  mounted: function() {
    this.getData();
  }
};
</script>

<style>
.index_main {
  height: 700px;
  background-color: #bacada;
  padding: 30px;
}
</style>
