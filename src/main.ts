import { createApp } from 'vue'
import App from './App.vue'
import 'normalize.css/normalize.css'
import router from './router'


import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


const app = createApp(App)
app.mount('#app')
app.use(router)
