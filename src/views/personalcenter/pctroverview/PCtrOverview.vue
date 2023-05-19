<template>
    <div class=''>
        123
        {{data.list}}
    </div>
</template>
<script lang='ts' setup>
import { onMounted } from 'vue';
import { getEveryDayWord } from '../../../config/api/api';

import {reactive} from 'vue';
const data = reactive({
        list: "",
    })
onMounted(() => {
    getEveryDayWord().then((res) => {
            data.list = res.data.anwei
        })
});
</script>
<style lang='scss' scoped>
* {
    padding: 0;
    margin: 0;
}
</style>