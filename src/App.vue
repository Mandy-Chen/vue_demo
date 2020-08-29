<template>
  <!-- <router-view /> -->
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
              <indexMain></indexMain>
            </el-col>
          </el-row>
        </el-main>
        <el-footer>vue-demo</el-footer>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import indexNav from "./components/Layout/indexNav";
import indexMain from "./components/Layout/indexMain";
export default {
  name: "App",
  components: {
    indexNav,
    indexMain
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

.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
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
