import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedState from 'pinia-plugin-persistedstate'

import router from './router'
import App from './App.vue'

const store = createPinia()
store.use(piniaPluginPersistedState)

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
