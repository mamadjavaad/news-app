import './assets/base.css'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css' 
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
const vuetify = createVuetify({
    components,
})
const app = createApp(App)

app.use(router)
app.use(vuetify)
app.mount('#app')


