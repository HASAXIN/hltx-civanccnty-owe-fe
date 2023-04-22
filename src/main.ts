import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router'
import {createPinia} from "pinia";
import ElementPlus from 'element-plus';
import 'element-plus/dist/index.css';

const pinia = createPinia();
createApp(App).use(router).use(pinia).use(ElementPlus).mount('#app')
