<template>
    <el-row>
        <el-col>
            <el-card class="box-card" style="height:85vh">
                <template #header>
                    <div class="card-header">
                        <span>{{ data.list }}</span>
                        <el-button class="button" text @click="tc.showModal = true">新增</el-button>
                        <tanchuang v-if="tc.showModal" :title="tc.modalTitle" :message="tc.modalMessage" @close="tc.showModal = false">
                        </tanchuang>
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
</template>
<script lang='ts' setup>
import { onMounted } from 'vue';
import { getEveryDayWord } from '../../../config/api/internalBeApi';
import { getCrazyThursday } from '../../../config/api/outendApi';
import tanchuang from './tanchuang.vue'
import { ref, reactive } from 'vue';

const data = reactive({
    list: "",
    str: [],
})

const tc = ref({
    showModal :false,
    modalTitle:"新增",
    modalMessage:"你确定么"
})

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