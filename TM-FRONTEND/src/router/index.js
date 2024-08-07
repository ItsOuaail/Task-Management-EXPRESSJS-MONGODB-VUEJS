import { createRouter, createWebHistory } from 'vue-router'
import Signup from '../views/Signup.vue'
import LandingPage from '../views/LandingPage.vue'
import Confirm from '../views/Confirm.vue'
import dashboardVue from '@/views/dashboard/dashboard.vue'
import Home from '@/views/dashboard/Home.vue'
import Tasks from '@/views/dashboard/tasks.vue'
//import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/signup',
      name: 'Signup',
      component: Signup
    },
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/confirm',
      name: 'Confirm',
      component: Confirm
    },
    {
      path: '/dashboard',
      name: 'dashboardVue',
      component: dashboardVue,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home,
        },
        {
          path: '/tasks',
          name: 'Tasks',
          component: Tasks,
        }
      ]
    },
    /*{
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }*/
   
  ]
});


export default router
