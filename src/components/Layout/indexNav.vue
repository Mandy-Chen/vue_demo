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
      <el-submenu index="1" >
        <template slot="title" >
          <i class="el-icon-location"></i>
          <span>导航一</span>
        </template>
        <el-menu-item-group>
          <template slot="title">分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-menu-item-group title="分组2">
          <el-menu-item index="1-3">选项3</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
      <el-menu-item index="getAllEmployees">
        <i class="el-icon-menu"></i>
        <span slot="title">查看全部员工</span>
      </el-menu-item>
       <el-menu-item index="deleteEmployee">
        <i class="el-icon-menu"></i>
        <span slot="title">删除员工信息</span>
      </el-menu-item>
      <el-menu-item index="updateEmployee">
        <i class="el-icon-menu"></i>
        <span slot="title">更新员工信息</span>
      </el-menu-item>
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
    name:"IndexNav",
    methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
     
  }
};
</script>

<style>
.index_nav {
  min-height: 760px;
  background-color: #545c64;
}
</style>
