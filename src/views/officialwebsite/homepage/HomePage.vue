<template>
  <div class=''>
    <!-- {{ str1 }} -->
    {{ str }}
  </div>
</template>

<script lang='ts' setup>
import { useRoute } from 'vue-router';

// import { ref } from 'vue';
const route = useRoute();


// URL带参接值
// const str = route.query.username;

// URL不带参接值
const str=history.state.username;
console.log(str)
</script>
<style lang='scss' scoped>
* {
  padding: 0;
  margin: 0;
}
</style>