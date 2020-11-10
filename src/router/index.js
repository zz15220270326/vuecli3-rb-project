import Vue from 'vue'
import VueRouter from 'vue-router'

// lazy-load components
const Home = () => import('@/views/home/Home')
const About = () => import('@/views/about/About')
const Login = () => import('@/views/login/Login')

Vue.use(VueRouter)


const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
