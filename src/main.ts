import './assets/main.css'

import { createApp } from 'vue'
import App from './views/Index.vue'
import router from './router/index'
import '@fontsource-variable/manrope'

const app = createApp(App)
app.use(router)
app.mount('#app')
