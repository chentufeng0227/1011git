import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [ 
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    //以下為更改路由設定
    {
      path: '/VtextAndVmodel',
      name: 'VtextAndVmodel',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/VtextAndVmodel.vue')
    },
    {
      path: '/vfor',
      name: 'vfor',
      
      component: () => import('../views/v-for.vue')
    },
    {
      path: '/von',
      name: 'von',
      
      component: () => import('../views/von.vue')
    },
    
  ]
})

export default router
