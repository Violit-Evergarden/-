import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
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
