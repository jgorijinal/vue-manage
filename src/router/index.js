import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'home',
    component:() => import('@/views/Home.vue')
  },
  {
    path: '/user',
    name: 'user',
    component:()=> import('@/views/User.vue')
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router