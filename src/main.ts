import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import { createPinia } from "pinia";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';
import Axios from 'axios'
import Service from './config/request/request.ts'
const pinia = createPinia();
createApp(App).use(router).use(pinia).use(ElementPlus).mount('#app')
const app = createApp(App)
app.config.globalProperties.$axios = Axios
// 将 service 实例设置为全局变量
app.config.globalProperties.$service = Service;
