<template>
  <div id="app">
  
    <el-container>
      <el-header>Rbac系统</el-header>
      <el-container>
        <el-main>
          <el-row>
            <el-col :span="4">
              <indexNav></indexNav>
               
            </el-col>
            <el-col :span="20">
              <!-- <indexMain></indexMain> -->
              <router-view />
            </el-col>
          </el-row>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import IndexNav from "./components/Layout/indexNav";
import IndexMain from "./components/Layout/indexMain";
export default {
  name: "App",
  components: {
    IndexNav,
    IndexMain
  }
};
</script>
<style>
html,
body,
#app,
.el-container {
  padding: 0px;
  margin: 0px;
  height: 100%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  padding: 0px;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  text-align: left;
  line-height: 60px;
}
</style>
