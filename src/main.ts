import { createApp } from 'vue'
import router from './router'
import App from './App.vue'
import Markdown from 'vue-meditor'

const app = createApp(App)
app.component(Markdown)
app.use(router)
app.mount('#app')
