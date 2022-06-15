import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './assets/css/bootstrap.min.css'
import axios from 'axios'

const app = createApp(App)
// axios的全局配置
axios.defaults.baseURL = 'https://www.escook.cn'
app.config.globalProperties.$http = axios

app.mount('#app')
