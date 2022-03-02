import '@babel/polyfill'
import 'mutationobserver-shim'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"


// Vue.use(BootstrapVue)

createApp(App).use(router).mount('#app')
