import { createApp } from 'vue'
import App from './App.vue'
import plugins from './index.js'

var app = createApp(App)
app.use(plugins)
app.mount('#app')