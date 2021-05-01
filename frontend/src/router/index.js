import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../views/Main.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'


Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/login/',
      name: 'Login',
      component: Login
    },
    {
      path: '/register/',
      name: 'Register',
      component: Register
    },
    
  ]
})