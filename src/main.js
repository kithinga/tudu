import '@babel/polyfill'
import 'mutationobserver-shim'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "./assets/css/home.css"


// Vue.use(BootstrapVue)

createApp(App).use(router).mount('#app')
