import Vue from 'vue'
import Vuex from 'vuex'
// ! state & mutations & actions
import state from './state'
import mutations from './mutations'
import actions from './actions'

// install vuex
Vue.use(Vuex)
Vue.config.devtools = true

const store = new Vuex.Store({
  state,
  mutations,
  actions,
})

export default store
