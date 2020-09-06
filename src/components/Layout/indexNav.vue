<template>
  <div class="index_nav">
    <el-menu
      class="el-menu-vertical-demo"
      @open="handleOpen"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
      :default-active="$route.path"
      router
    >
      <el-menu-item index="/">
        <i class="el-icon-location"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>员工管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="addEmployee">增加员工</el-menu-item>
          <el-menu-item index="getAllEmployees">查看全部员工</el-menu-item>
          <el-menu-item index="deleteEmployee">删除员工信息</el-menu-item>
          <el-menu-item index="updateEmployee">更新员工信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-menu"></i>
          <span>部门管理</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="addDepartment">增加部门</el-menu-item>
          <el-menu-item index="getAllDepartments">查看全部部门</el-menu-item>
          <el-menu-item index="deleteDepartment">删除部门信息</el-menu-item>
          <el-menu-item index="updateDepartment">更新部门信息</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <!-- <el-menu-item index="getAllEmployees">
        <i class="el-icon-menu"></i>
        <span slot="title">查看全部员工</span>
      </el-menu-item>
       <el-menu-item index="deleteEmployee">
        <i class="el-icon-menu"></i>
        <span slot="title">删除员工信息</span>
      </el-menu-item> -->
      <!-- <el-menu-item index="updateEmployee">
        <i class="el-icon-menu"></i>
        <span slot="title">更新员工信息</span>
      </el-menu-item> -->
      <el-menu-item index="deleteEmployee" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">大多数</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "IndexNav",
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
.index_nav {
  min-height: 760px;
  background-color: #545c64;
}
</style>
