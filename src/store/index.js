import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 管理所有请求的状态
const requestStatus = {
  namespaced: true,
  state: { links: {} },
  mutations: {
    addLinks(state, _ref) {
      Vue.set(state.links, _ref.linkName, _ref.linkStatus)
    },
  },
  actions: {},
  getters: {
    links(state) {
      return state.links
    },
  },
}
const modules = { requestStatus: requestStatus }

const store = new Vuex.Store({ modules })
export default store
