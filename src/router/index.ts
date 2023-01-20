import { createRouter, createWebHistory } from 'vue-router'

// pages when user notauthenticated
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'

// pages user has access when authenticated
import RegisterProspectsView from '../views/authenticated/RegisterProspectView.vue'
import ProspectListView from '../views/authenticated/ProspectListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/start' ,
      name: 'start',
      // como no sabemos si el usuario se autenticara, solo cargamos esta pagina
      // si se autentico correctamente.
      component: () => import('../views/authenticated/StartView.vue'),
      children: [
        {
          path: '/addProspect',
          name: 'addProspect',
          component:  RegisterProspectsView
        },
        {
          path: '/prospectList',
          name: 'prospectList',
          component: ProspectListView
        }
      ]
    }
  ]
})

export default router
