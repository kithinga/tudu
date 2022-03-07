import '@babel/polyfill'
import 'mutationobserver-shim'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// Axios import /
import axios from 'axios'   
import VueAxios from 'vue-axios'
// Vue.prototype.$http = axios

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import "./assets/css/app.css"
import "./assets/css/home.css"
import "./assets/css/tasks.css"
import "./assets/css/pending.css"
import "./assets/css/future.css"
import "./assets/css/perfomance.css"


// Vue.use(BootstrapVue)

createApp(App).use(router,VueAxios,axios).mount('#app')
