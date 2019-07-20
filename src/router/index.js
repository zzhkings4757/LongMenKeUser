import Vue from 'vue'
import Router from 'vue-router'
import login from '@/components/login'
import home from '@/components/home'
import searchPage from '@/components/searchPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/login',
      name: 'login',
      meta: {
        title: '登录'
      },
      component: login
    },
    {
      path: '/',
      name: 'home',
      meta: {
        title: '首页'
      },
      component: home
    },
    {
      path: '/searchPage',
      name: 'searchPage',
      meta: {
        title: '搜索'
      },
      component: searchPage
    }
  ]
})
