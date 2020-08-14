import Vue from 'vue'
import Router, { RouteConfig } from 'vue-router'
Vue.use(Router)
import Layout from '../layout/index'


// /**
//  * constantRoutes
//  * 没有权限要求的基本页面
//  * 所有角色都可以访问  */
export const constantRoutes: Array<RouteConfig> = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,   //控制是否需要显示在菜单栏
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/login',
    component: () => import('@/views/Login'),
    hidden: true
  },
  // { //一级配置
  //   path: '/',
  //   component: Layout,
  //   redirect: '/index',
  //   children: [
  //     {
  //       path: 'index',
  //       component: () => import('@/views/Home'),
  //       name: 'index',
  //       meta: { title: '首页', icon: 'el-icon-house', affix: true }
  //     },
  //   ]
  // },
  // {  //一级配置
  //   path: '/personal',
  //   component: Layout,
  //   redirect: '/personal/centre',
  //   children: [
  //     {
  //       path:'centre',
  //       component: () => import('@/views/personalCentre/index'),
  //       name: 'centre',
  //       meta: {
  //         title: '个人中心',
  //         roles: ['admin'] ,
  //         icon: 'el-icon-user'
  //       }
  //     }
  //   ]
  // },
  {  //二级配置
    path: '/mfg',
    component: Layout,
    redirect: '/mfg/enter',
    alwaysShow: true,
    name: 'mfg',
    meta: {
      title: '供应商管理',
      icon: 'dashboard',
      roles: ['admin', 'editor']   //权限
    },
    children: [
      {
        path: 'enter',
        component: () => import('@/views/mfgManagement/enterMfg'),
        name: 'enter',
        meta: {
          title: '入驻供应商管理',
          roles: ['admin'] 
        }
      },
      {
        path: 'inventoryupload',
        component: () => import('@/views/mfgManagement/InventoryUpload'),
        name: 'inventoryupload',
        meta: {
          title: '库存上传管理',
          roles: ['admin'] 
        }
      },
      {
        path: 'consume',
        component: () => import('@/views/mfgManagement/consume'),
        name: 'consume',
        meta: {
          title: '供应商消费记录',
          roles: ['admin'] 
        }
      },
      {
        path: 'statement',
        component: () => import('@/views/mfgManagement/statement'),
        name: 'statement',
        meta: {
          title: '供应商报表',
          roles: ['admin'] 
        }
      },
    ]
  },
  {  //二级配置
    path: '/vip',
    component: Layout,
    redirect: '/vip/vipinfo',
    alwaysShow: true,
    name: 'vip',
    meta: {
      title: '会员管理',
      icon: 'profile',
      roles: ['admin', 'editor']   //权限
    },
    children: [
      {
        path: 'vipinfo',
        component: () => import('@/views/vipManagement/info'),
        name: 'vipinfo',
        meta: {
          title: '会员信息',
          roles: ['admin'] 
        }
      },
      {
        path: 'respondmanage',
        component: () => import('@/views/vipManagement/log'),
        name: 'respondmanage',
        meta: {
          title: '会员操作日志',
          roles: ['admin'] 
        }
      },
    ]
  },
  {  //二级配置
    path: '/blog',
    component: Layout,
    redirect: '/blog/blogeditor',
    alwaysShow: true,
    name: 'blog',
    meta: {
      title: 'Blog管理',
      icon: 'check-circle',
      roles: ['admin', 'editor']   //权限
    },
    children: [
      {
        path: 'blogeditor',
        component: () => import('@/views/blogManagement/blogEditor'),
        name: 'blogeditor',
        meta: {
          title: '博文编辑',
          roles: ['admin'] 
        }
      },
      {
        path: 'respondmanage',
        component: () => import('@/views/blogManagement/respondManage'),
        name: 'respondmanage',
        meta: {
          title: '回复管理',
          roles: ['admin'] 
        }
      },
    ]
  },
  {//二级配置
    path: '/user',
    component: Layout,
    redirect: '/user/admin',
    alwaysShow: true,  //是否二级
    name: 'operations',
    meta: {
      title: '用户管理',
      icon: 'form',
      roles: ['admin', 'editor'] 
    },
    children: [
      {
        path: 'admin',
        component: () => import('@/views/userManagement/userAdmin'),
        name: 'admin',
        meta: {
          title: '后台用户',
          roles: ['admin'] 
        }
      },
      {
        path: 'permission',
        component: () => import('@/views/userManagement/userPermission'),
        name: 'permission',
        meta: {
          title: '权限分配',
          roles: ['admin'] 
        }
      },
    ]
  },
  {//二级配置
    path: '/info',
    component: Layout,
    redirect: '/info/my',
    alwaysShow: true,  //是否二级
    name: 'info',
    meta: {
      title: '我的信息',
      icon: 'warning',
      roles: ['admin', 'editor'] 
    },
    children: [
      {
        path: 'admin',
        component: () => import('@/views/info/password'),
        name: 'admin',
        meta: {
          title: '修改密码',
          roles: ['admin'] 
        }
      },
    ]
  },
]


// /**
//  * asyncRoutes
//  * 需要根据用户角色动态加载的路由
//  */
export const asyncRoutes: Array<RouteConfig> = [
]


const createRouter = () => new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:constantRoutes
})

const router = createRouter()

export default router
