import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import { init_register_microApp, start } from "../common/register-micro-app"
Vue.use(VueRouter)
const router = new VueRouter({
  mode: "history"
})
Vue.config.productionTip = false
init_register_microApp()
new Vue({
  render: h => h(App),
  router,
}).$mount('#container')

start();