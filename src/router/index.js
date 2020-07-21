import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import {resetRoute} from './createRoute'
/* Layout */
import Layout from '@/layout'
import dashboard from '@/views/dashboard/index'

export const constantRoutes = 
[
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },
  {
    path: '/shouye',
    component: () => import('@/views/onePage/index'),
    hidden: true
  },
  
  {
    path:'/',
    redirect: '/shouye',
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]
export const ADD_ROUTE =async ()=>{
  //发送请求 
  //req(id)
  const routes = await resetRoute()
  console.log(routes);
  if(constantRoutes.length>routes.resArr.length){
    // index  delete  new
    constantRoutes.splice(5,0,
      ...routes.resArr
    )
  }else{
    // index  delete  new
    constantRoutes.splice(5,routes.resArr.length,
      ...routes.resArr
    )
  }
resetRouter();
return routes.headerobj
}
const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()
export function resetRouter() {
  const newRouter = createRouter();
  router.matcher = newRouter.matcher // reset router
}

export default router
