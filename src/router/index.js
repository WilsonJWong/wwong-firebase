import { createRouter, createWebHistory } from 'vue-router'
import FireView from '../views/FirebaseSigninView.vue'
import FireRegisterView from '../views/FirebaseRegisterView.vue'

const routes = [
  {
    path: '/fireLogin',
    name: 'FireLogin',
    component: FireView,
  },
  {
    path: '/fireRegister',
    name: 'FireRegister',
    component: FireRegisterView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
