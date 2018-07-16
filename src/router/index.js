import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import login from '@/page/login'

export default new Router({
  routes: [{
    path: '/',
    name: 'Login',
    component: login
  },]
})
