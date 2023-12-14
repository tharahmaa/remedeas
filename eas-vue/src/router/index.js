import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Form from '@/components/Form.vue'
import Status from '@/components/Status.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/form',
      name: 'Form',
      component: Form
    },
    {
      path: '/status',
      name: 'Status',
      component: Status
    },
  ]
})

export default router
