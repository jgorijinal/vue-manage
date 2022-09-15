import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    name: 'main',
    component: () => import('@/views/main.vue'),
    children: [
      {
        path: 'home',
        name: 'home',
        component:()=>import('../views/home/index.vue')
      },
      {
        path: 'user',
        name: 'user',
        component:()=>import('../views/user/index.vue')
      }
    ]
  },
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

export default router