<template>
  <div class=''>
    <!-- {{ str1 }} -->
    {{ str }}
  </div>
</template>

<script lang='ts' setup>
import { useRoute } from 'vue-router';

// import { ref } from 'vue';
const route = useRoute()
console.log(route)
const str = route.query.username;
// const str1=history.state.obj.username

</script>
<style lang='scss' scoped>
* {
  padding: 0;
  margin: 0;
}
</style>