<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>卡片名称</span>
      <el-button style="float: right; padding: 3px 0" type="text"
        >全部删除</el-button
      >
    </div>
    <div v-for="item in items" :key="item.id" class="text item">
      {{ item.id }} {{ item.name }}
      <el-popconfirm
        title="这是一段内容确定删除吗？"
        @onConfirm="deleteEmployee(item.id)"
      >
        <el-button slot="reference">删除</el-button>
      </el-popconfirm>
      <el-button type="danger" icon="el-icon-delete" circle></el-button>
      <el-divider></el-divider>
    </div>
  </el-card>
</template>

<script>
import { deleteEmployee, getAllEmployee } from "../../api";
export default {
  name: "DeleteEmployee",
  data() {
    return {
      items: []
    };
  },
  methods: {
    getData: function() {
      getAllEmployee()
        .then( response => {
          this.items = response.data;
        })
        .catch(() => {
          this.$message.error("获取信息失败！");
        });
    },
    deleteEmployee: function(id) {
      console.log("shanchu" + id);
      deleteEmployee(id)
        .then( response => {})
        .catch(() => {
          this.$message.error("删除失败！");
        });
    }
  },
  mounted: function() {
    this.getData();
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
