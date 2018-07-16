import Vue from 'vue'
import Vuex from 'vuex'
import { baseUrl, baseImgPath } from '@/config/env.js'

Vue.use(Vuex)

const state = {
  adminInfo: {
    avatar: 'default.jpg'
  }
}

const mutations = {
  saveAdminInfo(state, adminInfo) {
    state.adminInfo = adminInfo;
  }
}

const actions = {
  getAdminData({ commit }) {
            console.log(this)
    this.$http({
        url: baseUrl + '/admin/info',
        method: 'GET',
      })
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export default new Vuex.Store({
  state,
  actions,
  mutations
})