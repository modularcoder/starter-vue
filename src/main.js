import { createApp } from 'vue'
import App from './App.vue'
import store from './_store'
import router from './router.js'

createApp(App).use(store).use(router).mount('#app')
