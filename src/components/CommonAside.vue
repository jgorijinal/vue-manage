<template>
  <el-menu
    class="el-menu-vertical-demo"
    background-color="#545c64"
    text-color="white"
    active-text-color="#ffd04b"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
  >
    <h4 v-if="!isCollapse" >通用后台管理系统</h4>
    <el-menu-item v-for="item in noChildrenMenus" @click="handleClickMenu(item)" :key="item.path" :index="item.path">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">{{item.label}}</span>
    </el-menu-item>


    <el-submenu v-for="item in hasChildrenMenus" :index="item.label" :key="item.label">
      <template slot="title">
        <i :class="`el-icon-${item.icon}`"></i>
        <span slot="title">导航一</span>
      </template>
      <el-menu-item v-for="child in item.children" :index="child.path" :key="child.path">
        <i :class="`el-icon-${child.icon}`"></i>
        <span slot="title">{{child.label}}</span>
      </el-menu-item> 
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: false,
      menus: [
        {
          path: "/",
          name: "home",
          label: "首页",
          icon: "s-home",
          url: "Home/Home",
        },
        {
          path: "/mall",
          name: "mall",
          label: "商品管理",
          icon: "video-play",
          url: "MallManage/MallManage",
        },
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user",
          url: "UserManage/UserManage",
        },
        {
          label: "其他",
          icon: "location",
          children: [
            {
              path: "/page1",
              name: "page1",
              label: "页面1",
              icon: "setting",
              url: "Other/PageOne",
            },
            {
              path: "/page2",
              name: "page2",
              label: "页面2",
              icon: "setting",
              url: "Other/PageTwo",
            },
          ],
        },
      ],
    };
  },
  computed: {
    noChildrenMenus() { // 一级菜单
      return this.menus.filter(item => !item.children)
    },
    hasChildrenMenus() {  // 二级菜单
      return this.menus.filter(item => item.children)
    }
  },
  methods: {
    handleClickMenu(item) { // 点击 菜单
      this.$router.push({
        name: item.name
      })
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="less" scoped>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu {
  height: 100%;
  h4 {
    color: white;
    text-align: center;
    line-height: 50px;
  }
} 
</style>
