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
  </div>
</template>

<script>
export default {
  name: "indexMain",
  data() {
    return {
      form: {
        name: ""
      },
     
    };
  },
  methods: {
    onSubmit(form) {
      console.log(form.name);
    },
     getData:function(){
         let _this=this;
        //  axios
     }
  },
  mounted:function(){
      this.getData;
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
