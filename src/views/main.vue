<template>
  <el-container style="height: 100%">
    <el-aside width="auto">
      <common-aside ref="asideRef"></common-aside>
    </el-aside>
    <el-container>
      <el-header>
        <el-button @click="toggleAside">展开/收起</el-button>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '@/components/CommonAside.vue';
export default {
  components: {
    CommonAside
  },
  methods: {
    toggleAside() {
      this.$refs.asideRef.isCollapse = !this.$refs.asideRef.isCollapse
    }
  }
}
</script>

<style lang="less" scoped>
.el-header {
  background-color:grey
}
</style>