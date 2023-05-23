<template>
    <el-dialog v-model="dialogFormVisible" title="Shipping address">
        <el-form :model="form">
            <el-form-item label="单号" :label-width="formLabelWidth">
                <el-input v-model="form.number" autocomplete="off" />
            </el-form-item>
            <el-form-item label="选择设备" :label-width="formLabelWidth">
                <el-input v-model="form.device" autocomplete="off" />
            </el-form-item>
            <el-form-item label="日期" :label-width="formLabelWidth">
                <el-input v-model="form.datatime" autocomplete="off" />
            </el-form-item>
            <el-form-item label="次数" :label-width="formLabelWidth">
                <el-input v-model="form.times" autocomplete="off" />
            </el-form-item>
            <el-form-item label="原因" :label-width="formLabelWidth">
                <el-input v-model="form.ress" autocomplete="off" />
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button @click="dialogFormVisible = false">Cancel</el-button>
                <el-button type="primary" @click="submits">
                    提交
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'

const dialogFormVisible = ref(false)
const formLabelWidth = '140px'

const form = reactive({
    number: 'rc_' + new Date().getTime() + "_" + Math.floor(Math.random() * 1000),
    device: '',
    datatime: '',
    times:'',
    ress:''
})
const submits =()=>{

}
</script>
<style lang="scss" scoped></style>