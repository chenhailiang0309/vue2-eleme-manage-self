import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import login from '@/page/login'
import Manage from '@/page/manage'

export default new Router({
  routes: [{
    path: '/',
    name: 'Login',
    component: login
  },{
  	path:'/manage',
  	name:'Manage',
  	component:Manage
  }]
})
