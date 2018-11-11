import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
// 导入home组件
import Home from '@/components/Home'
import User from '@/components/User'
Vue.use(Router)
// 导入users组件

export default new Router({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/home', component: Home, children: [{ path: '/user', component: User }] }
  ]
})
