<template>
        <el-row class="tac">
            <el-col :span="20" class="pctrr">
                <el-menu default-active="1" class="demo" @open="handleOpen" @close="handleClose">
                    <el-menu-item index="1">
                        <!-- <el-icon><icon-menu /></el-icon> -->
                        <span @click="$router.push('PCtrOverview')">个人中心总览</span>
                    </el-menu-item>

                </el-menu>
            </el-col>
        </el-row>
</template>
<script lang="ts" setup>
const handleOpen = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
    console.log(key, keyPath)
}
</script>
<style lang="scss" scoped>

.demo{

}
</style>

