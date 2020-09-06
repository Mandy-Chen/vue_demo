<template>
  <el-card class="box-card">
    <div slot="header" class="clearfix">
      <span>修改员工信息</span>
    </div>
    <div v-for="item in items" :key="item.id" class="text item">
      {{ item.id }} -- {{ item.name }} -- {{ item.departmentId }}
      <el-button type="text" @click="update(item.id)">修改</el-button>
      <el-divider></el-divider>
    </div>
  </el-card>
</template>

<script>
import { updateEmployee, getAllEmployee } from "../../api";
export default {
  name: "UpdateEmployee",
  data() {
    return {
      items: []
    };
  },
  methods: {
    getData: function() {
      getAllEmployee()
        .then(response => {
          this.items = response.data;
        })
        .catch(() => {
          this.$message.error("获取信息失败！");
        });
    },
    update: function(id) {
      this.$prompt("请修改名称", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消"
      })
        .then(({ value }) => {
          updateEmployee(id, value)
            .then(response => {
              this.$message.success("修改成功！");
              this.getData();
            })
            .catch(() => {
              this.$message.error("修改失败！");
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消修改"
          });
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
