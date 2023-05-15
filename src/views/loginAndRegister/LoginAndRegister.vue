<template>
  <div class=''>
    <el-tabs class="demo-tabs" v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="登录" name="login">登录</el-tab-pane>
    <el-tab-pane label="注册" name="register">注册</el-tab-pane>
  </el-tabs>
  </div>
</template>

<script lang='ts' setup>
import { ref } from 'vue'
import type { TabsPaneContext } from 'element-plus'

const activeName = ref('login')

const handleClick = (tab: TabsPaneContext, event: Event) => {
  console.log(tab, event)
}
</script>
<style lang='scss' scoped></style>