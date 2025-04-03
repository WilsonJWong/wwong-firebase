import { createRouter, createWebHistory } from 'vue-router'
import FireLoginView from '../views/FirebaseSigninView.vue'
import FireRegisterView from '../views/FirebaseRegisterView.vue'
import FireLogoutView from '../views/FirebaseLogoutView.vue'
import GetBookCountView from '../views/GetBookCountView.vue'

const routes = [
  {
    path: '/fireLogin',
    name: 'FireLogin',
    component: FireLoginView,
  },
  {
    path: '/fireRegister',
    name: 'FireRegister',
    component: FireRegisterView,
  },
  {
    path: '/fireLogout',
    name: 'FireLogout',
    component: FireLogoutView,
  },
  {
    path: '/GetBookCount',
    name: 'GetBookCount',
    component: GetBookCountView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
