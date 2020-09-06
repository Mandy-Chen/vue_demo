<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>添加部门</span>
    </div>
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
  </el-card>
</template>

<script>
import { addDepartment} from "../../api";
export default {
  name: "AddDepartment",
  data() {
    return {
      form: {
        name: "",
      },
    };
  },
  methods: {
    onSubmit(form) {
      let department = {
        id: -1,
        name: form.name,
      };
      console.log(department);
      addDepartment(form.name).then(response => {
        this.$message.success("添加成功！");
        this.form.name="";
      });
    },
  },
};
</script>

<style>
.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
}
</style>
