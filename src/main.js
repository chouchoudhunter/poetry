import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import './utils/directive'
import './utils/filter'
import 'element-ui/lib/theme-chalk/index.css'
import './style/custom-element-ui.scss'
import 'animate.css'
import VueBus from './store/bus'
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.use(VueBus)
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
