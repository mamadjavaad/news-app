import './assets/base.css'
import 'vuetify/styles'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from "@/utils/vuetify.js"
const app = createApp(App)
app.use(router)
app.use(vuetify)
app.mount('#app')


