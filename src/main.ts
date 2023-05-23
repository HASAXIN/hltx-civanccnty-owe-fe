import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { createPinia } from "pinia";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import Axios from 'axios'
import Service from './config/request/internalBeReq.ts'
import zhCn from "element-plus/lib/locale/lang/zh-cn"
import './config/common/common.css'


const pinia = createPinia();
// createApp(App).use(router).use(pinia).use(ElementPlus).mount('#app')
const app = createApp(App)
app.use(router).use(pinia).use(ElementPlus, {locale: zhCn,}).mount('#app')
// 将 xxx 实例设置为全局变量
app.config.globalProperties.$axios = Axios
app.config.globalProperties.$service = Service;