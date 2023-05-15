import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)

const createRouter = () => new VueRouter({
  mode: 'history',
  base: '/vue2',
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/HelloWorld.vue')
    }
  ]
})

const router = createRouter()
export { router }
