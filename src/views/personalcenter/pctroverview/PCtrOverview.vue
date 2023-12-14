<template>
    <el-row>
        <el-col>
            <el-card class="box-card" style="height:85vh">
                <template #header>
                    <div class="card-header">
                        <span class="card-header-span">{{ data.list }}</span>
                        <el-button class="button" text @click="dialogFormVisible = true">新增</el-button>
                        <!-- <tan-chuang :visible.sync="tc.dialogVisile" :title="tc.modalTitle" :message="tc.modalMessage" @close="tc.showModal = false">
                        </tan-chuang> -->
                    </div>
                </template>
                <div class='table'>
                    <el-table
                        :data="data.newsList.slice((pagination.currentPage - 1) * pagination.pageSize, pagination.currentPage * pagination.pageSize)"
                        @selection-change="handleSelectionChange" @row-click="roweClick" @header-click="headerClick"
                        @cell-mouse-enter="cellMouseEnter" height="60vh" border style="width: 100%">
                        <!-- <el-table-column v-for="(item, index) in data.str[0]" :key="index" :label="index" :prop="index"
                            width="180" /> -->
                        <el-table-column key="number" type="index" label="序号" width="70"></el-table-column>
                        <el-table-column key="imgsrc3gtype" label="照片类型" prop="imgsrc3gtype" width="100" />
                        <el-table-column key="digest" label="文章内容" prop="digest" width="180" />
                        <el-table-column key="source" label="来源" prop="source" width="180" />
                        <el-table-column key="pic" label="照片" prop="pic" width="180">
                            <template v-slot:default="scope">
                                <el-popover trigger="click" placement="right" :width="500">
                                    <template #reference>
                                        <el-image :src="scope.row.imgsrc" />
                                    </template>
                                    <el-image :src="scope.row.imgsrc" />
                                    <span>{{ scope.row.digest }}</span>
                                </el-popover>
                            </template>
                        </el-table-column>
                        <el-table-column key="title" label="标题" prop="title" width="180" />
                        <el-table-column key="ptime" label="时间" prop="ptime" width="180" />
                        <el-table-column key="commentCount" label="浏览量" prop="commentCount" width="100" />
                        <el-table-column key="url" label="新闻链接" width="300">
                            <template v-slot:default="scope">
                                <el-link :href="scope.row.url" style="color:blue;">{{ scope.row.url }}</el-link>
                            </template>

                        </el-table-column>
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
import { getEveryDayWord, getEveryDayNews } from '../../../config/api/internalBeApi';
import { getAppHotNews } from '../../../config/api/outendApi';
import { getCrazyFriday } from '../../../config/api/outendApi';
import { ref, reactive } from 'vue';


const data = reactive({
    list: "",
    str: [],
    newsList:[]
})

const dialogFormVisible = ref(false)
const formLabelWidth = '140px'
const form = reactive({
    rc_id: 'rc_' + Date.now() + Math.round(Math.random() * 1000),
    rc_resources_id: "",
    rc_date: "",
    rc_count: "",
    rc_approve_result: "",
    _state: "added"
})
// const forms =
const saveDialogFormVisible = async () => {
    try {
        await getCrazyFriday({ data: JSON.stringify([form]) }).then(() => {
            dialogFormVisible.value = false
        })
    } catch (error) {
        console.log(error)
    }
}

const aaa = "吉林省_长春市"
const title = "哔哩哔哩"
// const params = { command: JSON.stringify({}) }
const datas = `name=${aaa}&page="0"`;
const type = `type=json`
onMounted(() => {
    getEveryDayWord(type).then((res) => {
        data.list = res.data.saohua
        console.log(res, "222")
    });
    getEveryDayNews(datas).then((res) => {
        data.str = res.data.data

    })
    getAppHotNews(title).then(() => {

    })
});
// 在这里编写你的逻辑代码
// onMounted(async () => {
//   try {
//     const response = await createTodo({
//       data: {
//         name: 'example',
//         page: 1
//       }
//     });
//     // 处理返回的数据
//     console.log(response.data);
//   } catch (error) {
//     // 处理错误
//     console.error(error);
//   }
// });
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


const roweClick = (row, column, event) => {
    // alert(JSON.stringify(row))
    // alert(JSON.stringify(column))
    // alert(JSON.stringify(event))

}
const headerClick = (column, event) => {
    // alert(JSON.stringify(column))
    // alert(JSON.stringify(event))

}
const cellMouseEnter = (row, column, cell, event) => {
    // alert(JSON.stringify(row))
    // alert(JSON.stringify(column))
    // alert(JSON.stringify(cell))
    // alert(JSON.stringify(event))
}






</script>
<style lang='scss' scoped>
// 文字交融
.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    // margin-top: 50px;
    text-align: center;
    background-color: #b32323;
    //设置对比度
    filter: contrast(30);

    .card-header-span {
        padding: 0 0 0 3px;
        color: #fff;
        animation: showup 3s linear forwards;
    }
}

@keyframes showup {
    0% {
        // 文字位置
        letter-spacing: -50px;
        // 设置模糊度
        filter: blur(10px);
    }

    100% {
        letter-spacing: 10px;
        filter: blur(0px);
    }
}

.text {
    font-size: 14px;
}

.item {
    margin-bottom: 18px;
}
</style>