<template>
  <!-- <div class=''>
    {{ str1 }}
   
  </div> -->
  <div class="image_1">
    <div class="word1">
      <h1>{{ data.str1 }}</h1>
    </div>
    <!-- <div class="word1"> {{ str1 }}</div> -->
  </div>
  <div class="bg">{{data.title1}}</div>
  <div class="image_2">
    <div class="word">All children, except one, grow up</div>
  </div>
  <div class="bg">It's better to burn out than to fade away</div>
  <div class="image_3">
    <div class="word">Fading is true while flowering is past</div>
  </div>
  <div class="bg">There was no possibility of taking a walk</div>
  <div class="image_4">
    <div class="word">All this happened, more or less</div>
  </div>
</template>

<script lang='ts' setup>
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { getEveryDayWord } from '../../../config/api/internalBeApi';
import { ref, reactive } from 'vue';
const route = useRoute();


// URL带参接值
// const str = route.query.username;

// URL不带参接值
const str = history.state.username;
console.log(str)
const data = reactive({
  str1: "",
  str: [],
  title1:"",
})
const type = `type=json`
onMounted(() => {
  getEveryDayWord(type).then((res) => {
    data.str1 = res.data.saohua
    console.log(data.str1, "222")
  });

});

</script>
<style lang='scss' scoped>
.image_1 {
  background-image: url("http://cms-bucket.ws.126.net/2023/0912/79c5b69ep00s0un1w006ac000s600e3c.png");
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  width: 100%;
  display: flex;

  .word1 {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: 55px;
    // color: white;
    width: 100%;
    // text-align: center;
    font-weight: bolder;
    filter: contrast(30);

    h1 {
      padding: 0 0 0 3px;
      color: #ffffff;
      animation: showup 3s linear forwards;
    }
  }


}

.image_2 {
  background-image: url("http://cms-bucket.ws.126.net/2023/0912/8bd5b3ffp00s0v1t6001fc0009c0070c.png");
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  width: 100%;
  display: flex;
}

.image_3 {
  background-image: url("http://cms-bucket.ws.126.net/2023/0912/fa1cb197p00s0uoib000vc0009c0070c.png");
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  width: 100%;
  display: flex;
}

.image_4 {
  background-image: url("http://cms-bucket.ws.126.net/2023/0912/b97d2a79p00s0urti000yc0009c0070c.png");
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  width: 100%;
  display: flex;
}

.word {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 55px;
  color: white;
  width: 100%;
  text-align: center;
  font-weight: bolder;
  filter: contrast(30);
  // h1 {
  //     padding: 0 0 0 3px;
  //     color: #ffffff;
  //     animation: showup 3s linear forwards;
  //   }
}

// .word1 {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     margin-top: 50px;
//     text-align: center;
//     background-color: #b32323;
//     //设置对比度
//     filter: contrast(30);

//     .text {
//       padding: 0 0 0 3px;
//       color: #fff;
//       animation: showup 3s linear forwards;
//     }
//   }
.bg {
  text-align: center;
  font-size: 46px;
  font-weight: bolder;
  height: 220px;
  line-height: 220px;
  background-color: rgb(131, 134, 204);
  color: white;
}

// 文字交融


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
}</style>