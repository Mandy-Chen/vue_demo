<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>添加员工</span>
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
      <el-form-item label="department">
        <el-select v-model="form.departmentId" placeholder="请选择">
          <el-option
            v-for="item in items"
            :key="item.id"
            :label="item.name"
            :value="item.id"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit(form)">Add</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import { addEmployee,getAllDepartments } from "../../api";
export default {
  name: "addEmployee",
  data() {
    return {
      form: {
        name: "",
        departmentId: ""
      },
      items: []
    };
  },
  methods: {
    onSubmit(form) {
      let employee = {
        id: -1,
        name: form.name,
        departmentId:form.departmentId,
      };
      console.log(employee);
      addEmployee(form.name,form.departmentId).then(response => {
        this.$message.success("添加成功！");
      });
    },
    getDate() {
      getAllDepartments()
        .then(response => {
          this.items = response.data;
        })
        .catch(() => {
          this.$message.error("获取部门信息失败！");
        });
    }
  },
  mounted: function() {
    this.getDate();
  }
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
