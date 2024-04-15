
export default [
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
      {
        path:'employeeBaseinfo',
        name:'employeeBaseinfo',
        component: () => import('../views/EmployeeBaseinfo/Index.vue')
      },
      { 
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../views/NotFound/Index.vue')
      },
      {
        path:'employeeManagement',
        name:'employeeManagement',
        component: () => import('../views/EmployeeManagement/Index.vue')
      },
      {
        path:'characterManagement',
        name:'characterManagement',
        component: () => import('../views/CharacterManagement/Index.vue')
      },
      {
        path:'postManagement',
        name:'postManagement',
        component: () => import('../views/PostManagement/Index.vue')
      },
    ]
  }
]