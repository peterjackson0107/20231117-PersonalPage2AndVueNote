import { createApp } from 'vue'
import { createPinia } from 'pinia'; //pinia 1
import App from './App.vue'
import router from './router'

// 引入 Bootstrap 的 CSS 樣式表
import './assets/main.scss' //初始化工作環境
import "bootstrap"


const app = createApp(App)
const pinia = createPinia(); //pinia 2

app.use(router)
app.use(pinia) //pinia 3

app.mount('#app')
