<template>
  <div class="header">
    <div class="l-content">
      <el-button icon="el-icon-menu" size="mini" type="warning" @click="$emit('btn-click')"></el-button>
      <h3 style="color: white">首页</h3>
    </div>
    <div class="r-content">
      <el-dropdown size="mini">
        <span class="el-dropdown-link">
          <el-avatar :src="userImage" size="small"></el-avatar>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonHeader",
  data() {
    return {
      userImage: require("../assets/images/user-default.png"),
    };
  },
  methods: {
  }
};
</script>

<style lang="less" scoped> 
.header {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .l-content{
    display: flex;
    align-items: center;
  }
  .r-content {
    display: flex;
    align-items: center;
  }
}
.el-dropdown {
  cursor: pointer;
}
</style>
