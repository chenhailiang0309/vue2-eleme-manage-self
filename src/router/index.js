import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import login from '@/page/login'
import Manage from '@/page/manage'
import Home from '@/page/home'
import UserList from '@/page/userList'
import ShopList from '@/page/shopList'

export default new Router({
  routes: [{
    path: '/',
    name: 'Login',
    component: login
  }, {
    path: '/manage',
    name: 'Manage',
    component: Manage,
    children: [{
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: '/userList',
        name: 'UserList',
        component: UserList
      },
      {
        path: '/shopList',
        name: 'ShopList',
        component: ShopList
      }
    ]
  }]
})
