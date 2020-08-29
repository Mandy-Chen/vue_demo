<template>
  <indexNav></indexNav>
</template>

<script>
import indexNav from "../Layout/indexNav";
import indexMain from "../Layout/indexMain";
export default {
  name: "GetAllEmployees",
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
