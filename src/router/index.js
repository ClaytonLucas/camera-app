import { createRouter, createWebHistory } from '@ionic/vue-router';
import MemoriesPage from '../pages/MemoriesPage.vue';

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {path: '/home',
  component: MemoriesPage
  },
  {path: '/memories/:id',
  component: () => import('../pages/MemoryDetails.vue')
  },
  {
    path:"/memories/add",
    component: () => import("../pages/AddMemoryPages.vue")
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
