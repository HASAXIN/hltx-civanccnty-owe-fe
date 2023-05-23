<template>
  <div class=''>
    <el-container>
      <el-header>
        <OweFeHeader />
      </el-header>
      <el-main>
        <router-view />
        <OweFeFooter />
      </el-main>
      <!-- <el-footer>

      </el-footer> -->
    </el-container>
  </div>
</template>

<script lang='ts' setup>
import OweFeHeader from './OweFeHeader.vue';
import OweFeFooter from './OweFeFooter.vue';
// import { ref } from 'vue';

</script>
<style lang='scss' scoped>
* {
  margin: 0;
  padding: 0;
}
</style>