<template>
    <el-row>
        <el-col>
            <div class=''>
                {{ data.list }}
                123
                <el-table :data="data.str" style="width: 100%">
                    <el-table-column prop="rs_code" label="rs_code" width="180" />
                    <el-table-column prop="rs_firm" label="rs_firm" width="180" />
                    <el-table-column prop="rs_group" label="rs_group" />
                </el-table>
            </div>
        </el-col>
    </el-row>
</template>
<script lang='ts' setup>
import { onMounted } from 'vue';
import { getEveryDayWord } from '../../../config/api/internalBeApi';
import { getCrazyThursday } from '../../../config/api/outendApi';

import { reactive } from 'vue';
const data = reactive({
    list: "",
    str: [],
})
const params = { command: JSON.stringify({ "start": 0, "size": 50, "dataSourceType": "remote" }) }
onMounted(() => {
    getEveryDayWord().then((res) => {
        data.list = res.data.anwei
    });
    getCrazyThursday(params).then((res) => {
        data.str = res.data.data.DATA
    })
});
</script>
<style lang='scss' scoped>
* {
    padding: 0;
    margin: 0;
}
</style>