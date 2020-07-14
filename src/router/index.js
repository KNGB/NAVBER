import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

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
    path:'/dashboard',
    component: Layout,
    redirect: '/dashboard/dashboard',
    children: [{
      path: 'dashboard',
      name: 'Dashboard',
      component: () => import('@/views/dashboard/index'),
      meta: { title: 'Dashboard', icon: 'dashboard' }
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: 'Example', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/dashboard/index'),
        meta: { title: 'Table', icon: 'table' }
      },
      {
        path: 'tree',
        name: 'Tree',
        component: () => import('@/views/dashboard/index'),
        meta: { title: 'Tree', icon: 'tree',url:'http://demo.gofusion.cn/dataanalysis/bi/page/webtools/base/DataanalysisModel.html' }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component:() => import('@/views/dashboard/index'),
        meta: { title: 'Form', icon: 'form',url:'http://demo.gofusion.cn/dataanalysis/bi/page/webtools/base/DataanalysisModel.html' }
      }
    ]
  },

  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: 'Nested',
    meta: {
      title: 'Nested',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/dashboard/index'), // Parent router-view
        name: 'Menu1',
        meta: { title: 'Menu1' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/dashboard/index'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/dashboard/index'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/dashboard/index'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/dashboard/index'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/dashboard/index'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2',
        component: () => import('@/views/dashboard/index'),
        name: 'Menu2',
        meta: { title: 'menu2' }
      }
    ]
  },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

export const ADD_ROUTE =(id)=>{
  //发送请求 
  //req(id)
  const routes = [
    {
        path: '/',
        redirect: '/index',  
        component: Layout,
        children: [
        {
            path: 'index',
            name: 'add',
            component:dashboard,
            meta: { title: 'add', icon: 'form' }
        }
        ]
    },
    {
        path: '/add1',
        component: Layout,
        children: [
        {
            path: 'index',
            name: 'add2',
            component:dashboard,
            meta: { title: 'add2', icon: 'form' }
        }
        ]
    }
]
// index  delete  new
constantRoutes.splice(3,constantRoutes.length-3,
  ...routes
)
resetRouter();
}
const createRouter = () => new Router({
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()
export function resetRouter() {
  const newRouter = createRouter();
  console.log('newRouter',newRouter)
  router.matcher = newRouter.matcher // reset router
}

export default router
