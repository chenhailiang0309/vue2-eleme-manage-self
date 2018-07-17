import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
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
    axios({
        url: baseUrl + '/admin/info',
        method: 'GET',
      })
      .then(res => {
        var data = res.data;
        // console.log(data)
        if(data.status==1){
          commit('saveAdminInfo',data.data)
        }else{
          // console.log(data.message)
        }

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
