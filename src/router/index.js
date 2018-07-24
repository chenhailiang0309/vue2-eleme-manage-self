import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import login from '@/page/login'
import Manage from '@/page/manage'
import Home from '@/page/home'
import UserList from '@/page/userList'
import ShopList from '@/page/shopList'
import FoodList from '@/page/foodList'
import OrderList from '@/page/orderList'
import AddShop from '@/page/addShop'
import AddGoods from '@/page/addGoods'
import Visitor from '@/page/visitor'

export default new Router({
  routes: [{
    path: '/',
    name: 'Login',
    component: login
  }, {
    path: '/manage',
    component: Manage,
    children: [{
        path: '',
        name: 'Home',
        component: Home
      },
      {
        path: '/userList',
        name: 'UserList',
        component: UserList,
        meta: ['数据管理', '用户列表'],
      },
      {
        path: '/shopList',
        name: 'ShopList',
        component: ShopList,
        meta: ['数据管理', '商家列表'],
      },
      {
        path: '/foodList',
        name: 'FoodList',
        component: FoodList,
        meta: ['数据管理', '食品列表'],
      },
      {
        path: '/orderList',
        name: 'OrderList',
        component: OrderList,
        meta: ['数据管理', '订单列表'],
      },
      {
        path: '/addShop',
        name: 'AddShop',
        component: AddShop,
        meta: ['添加数据', '添加商铺'],
      },
      {
        path: '/addGoods',
        name: 'AddGoods',
        component: AddGoods,
        meta: ['添加数据', '添加商品'],
      },
      {
        path: '/visitor',
        name: 'Visitor',
        component: Visitor,
        meta: ['图表', '用户分布'],
      }
    ]
  }]
})
