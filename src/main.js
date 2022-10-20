import { createApp } from 'vue'
import App from './App.vue'



import './assets/main.css'
import './assets/crud_users.css'
import router from './router/';
const app = createApp(App)
app.use(router)
    // createApp(App).mount('#app')

app.mount('#app')