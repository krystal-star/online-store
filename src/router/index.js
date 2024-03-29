import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/itemList',
    name: 'ItemList',
    component: () => import('../views/itemList.vue'),
  },
  {
    path:'/blank',
    name: 'PageBlank',
    component: () => import('../views/Blank.vue'),
    meta: {
    }
  },
  {
    path: '/itemInfo',
    name: 'Item',
    component: () => import('../views/Item')
  },
  {
    path: '/basket',
    name: 'Basket',
    component: () =>import('../views/Basket')
  },
  {
    path:'/checkout',
    name: 'Checkout',
    component: ()=> import('../views/Checkout')
  },
  {
    path: '/check_order',
    name: 'CheckOrder',
    component: () => import('../views/CheckOrder')
  }
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

// 解决重复点击路由报错的BUG
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err)
}

export default router
