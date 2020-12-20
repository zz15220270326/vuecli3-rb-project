import Vue from 'vue'
import VueRouter from 'vue-router'

// lazy-load components
const User = () => import('@views/User/User')
const Home = () => import('@views/home/Home')

import homeChildren from './routes/home'
import userChildren from './routes/user'

Vue.use(VueRouter)

// 获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
// 修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

const routes = [{
    path: '/',
    redirect: '/user'
  },
  {
    // ? User-page
    path: '/user',
    component: User,
    children: [...userChildren]
  },
  {
    // ? 跳转首页
    path: '/home',
    // name: 'Home',
    component: Home,
    children: [...homeChildren]
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router