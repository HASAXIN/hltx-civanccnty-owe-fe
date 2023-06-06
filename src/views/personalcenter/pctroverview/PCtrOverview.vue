<template>
    <el-row>
        <el-col>
            <el-card class="box-card" style="height:85vh">
                <template #header>
                    <div class="card-header">
                        <span>{{ data.list }}</span>
                        <el-button class="button" text @click="dialogFormVisible = true">新增</el-button>
                        <!-- <tan-chuang :visible.sync="tc.dialogVisile" :title="tc.modalTitle" :message="tc.modalMessage" @close="tc.showModal = false">
                        </tan-chuang> -->
                    </div>
                </template>
                <div class='table'>
                    <el-table
                        :data="data.str.slice((pagination.currentPage - 1) * pagination.pageSize, pagination.currentPage * pagination.pageSize)"
                        @selection-change="handleSelectionChange" height="60vh" border style="width: 100%">
                        <el-table-column v-for="(value, key) in data.str[0]" :key="key" :label="key" :prop="key"
                            width="180" />
                    </el-table>
                </div>
                <div class="pagination">
                    <el-pagination class="pagination-body" v-model:currentPage="pagination.currentPage"
                        v-model:page-size="pagination.pageSize" :page-sizes="[5, 10, 20]" :disabled=false :background=true
                        layout="total, sizes, prev, pager, next, jumper" :total=data.str.length
                        @size-change="handleSizeChange" @current-change="handleCurrentChange" />
                </div>
            </el-card>
        </el-col>
    </el-row>
    <el-row>
        <el-col>
            <el-dialog v-model="dialogFormVisible" title="新增">
                <el-form :model="form">
                    <el-form-item label="单号" :label-width="formLabelWidth">
                        <el-input v-model="form.rc_id" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="选择设备" :label-width="formLabelWidth">
                        <el-input v-model="form.rc_resources_id" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="时间" :label-width="formLabelWidth">
                        <el-input v-model="form.rc_date" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="次数" :label-width="formLabelWidth">
                        <el-input v-model="form.rc_count" autocomplete="off" />
                    </el-form-item>
                    <el-form-item label="原因" :label-width="formLabelWidth">
                        <el-input v-model="form.rc_approve_result" autocomplete="off" />
                    </el-form-item>
                </el-form>
                <template #footer>
                    <span class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">关闭</el-button>
                        <el-button type="primary" @click="saveDialogFormVisible">
                            保存
                        </el-button>
                    </span>
                </template>
            </el-dialog>
        </el-col>
    </el-row>
</template>
<script lang='ts' setup>
import { onMounted } from 'vue';
import { getEveryDayWord } from '../../../config/api/internalBeApi';
import { getCrazyThursday, getCrazyFriday } from '../../../config/api/outendApi';
import { ref, reactive, toRefs } from 'vue';


const data = reactive({
    list: "",
    str: [],
})

const dialogFormVisible = ref(false)
const formLabelWidth = '140px'
const form = reactive({
    rc_id:'rc_' + Date.now() + Math.round(Math.random() * 1000),
    rc_resources_id:"",
    rc_date: "",
    rc_count: "",
    rc_approve_result: "",
    _state: "added"
})
// const forms =
const saveDialogFormVisible =async () => {
    try {
        await getCrazyFriday({ data: JSON.stringify([form]) }).then(() => {
        dialogFormVisible.value = false
    })
    } catch (error) {
        console.log(error)
    }
}




const params = { command: JSON.stringify({}) }
onMounted(() => {
    getEveryDayWord().then((res) => {
        data.list = res.data.anwei
    });
    getCrazyThursday(params).then((res) => {
        data.str = res.data.data.DATA
    })
});
// 分页
interface Posts {

}
const pagination = ref({
    currentPage: 1,
    pageSize: 10
})
const multipleSelection = ref<Posts[]>([])
const handleSelectionChange = (val: Posts[]) => {
    multipleSelection.value = val
}
// 选择每页多少条
const handleSizeChange = (val: number) => {
    console.log(`${val} items per page`)
}

// 点击页面进行跳转
const handleCurrentChange = (val: number) => {
    console.log(`current page: ${val}`)

}



</script>
<style lang='scss' scoped>
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}
</style>