<template>
    <div class=''>
        {{ data.list }}
        123
        {{ data.str }}
    </div>
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
onMounted(() => {
    getEveryDayWord().then((res) => {
        data.list = res.data.anwei
    });
    getCrazyThursday().then((res) => {
        data.str = res.command
    })
});
</script>
<style lang='scss' scoped>
* {
    padding: 0;
    margin: 0;
}
</style>