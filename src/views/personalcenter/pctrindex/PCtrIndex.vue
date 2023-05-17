<template>
    <div class=''>
        <el-container>
            <el-aside width="200px"><PCtrIndex/></el-aside>
            <el-main><router-view/></el-main>
        </el-container>
    </div>
</template>
  
<script lang='ts' setup>

  // import { ref } from 'vue';

</script>
<style lang='scss' scoped>
* {
    margin: 0;
    padding: 0;
}
</style>