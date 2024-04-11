import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/Login/Index.vue')
    },
    {
      path: '/',
      name: 'layout',
      component: () => import('../components/Layout/Index.vue'),
      children:[
        {
          path:'home',
          name:'home',
          component: () => import('../views/Home/Index.vue')
        },
        {
          path:'',
          redirect:{name:'home'}
        },
        {
          path:'personalCenter',
          name:'personalCenter',
          component: () => import('../views/PersonalCenter/Index.vue')
        },
      ]
    }
  ]
})

router.beforeEach((to,from,next)=>{
  if(localStorage.getItem('token')){
    if(to.path=='/login'){
      next('/home')
    }else{
      next()
    }
    next()
  }else{
    if(to.path!=='/login'){
      next('/login')
    }else{
      next()
    }
  }
})

export default router
