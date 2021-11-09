import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue';
import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp.vue'


const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
  {
    path: '/sign-in',
    name: 'sign-in',
    component: SignIn 
  },
  {
    path: '/sign-up',
    name: 'sign-up',
    component: SignUp 
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
