<template>
  <el-container style="height: 100%">
    <el-aside width="auto">
      <common-aside ref="asideRef"></common-aside>
    </el-aside>
    <el-container>
      <el-header>
        <common-header @btn-click="toggleAside"/>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from '@/components/CommonAside.vue';
import CommonHeader from '@/components/CommonHeader.vue';
export default {
  components: {
    CommonAside,
    CommonHeader
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
  background-color:#545c64;
}
</style>