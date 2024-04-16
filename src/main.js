
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/base.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import VueEcharts from 'vue-echarts'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
app.component('VCharts',VueEcharts)

app.mount('#app')
