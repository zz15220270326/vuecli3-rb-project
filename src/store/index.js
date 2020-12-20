import Vue from 'vue'
import Vuex from 'vuex'
// ! state & mutations & actions
import state from './state'
import mutations from './mutations'
import actions from './actions'
// todo : import modules
import user from './module/user'
import app from './module/home'

// ! install vuex
Vue.use(Vuex)
Vue.config.devtools = true

const store = new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {
    user,
    app
  }
})

export default store