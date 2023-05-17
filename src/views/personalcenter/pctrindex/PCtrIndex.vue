<template>
    <div class='pctr'>
        <el-container class="pctr-container">
            <el-aside width="200px" class="aside">
                <PCtrAside />
            </el-aside>
            <el-main><router-view /></el-main>
        </el-container>
    </div>
</template>
  
<script lang='ts' setup>
import PCtrAside from './PCtrAside.vue';
  // import { ref } from 'vue';

</script>
<style lang='scss' scoped>
* {
    margin: 0;
    padding: 0;
}

</style>