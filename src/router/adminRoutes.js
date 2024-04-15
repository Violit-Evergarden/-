

export default [
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