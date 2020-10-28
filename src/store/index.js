import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
// 管理所有请求的状态
const requestStatus = {
  namespace: true,
  state: { links: { } },
  mutations: {
    addLinks(state, _ref) {
      state.links[_ref.linkName] = _ref.linkStatus
    },
  },
  actions: {},
  modules: {},
}
const test = {
  namespace: true,
  state: { b: 10 },
  mutations: {},
  actions: {},
  modules: {},
}
const modules = {
  requestStatus: requestStatus,
  test: test,
}

const store = new Vuex.Store({ modules })
export default store
