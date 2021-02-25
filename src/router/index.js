import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'homeDetail',
        name: 'homeDetail',
        component: () => import('../views/home/HomeDetail'),
        redirect: 'homeDetail/homeMore',
        children: [
          {
            path: 'homeMore',
            name: 'homeMore',
            component: () => import('../views/home/HomeMore')
          }
        ]
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
