import Vue from 'vue'

const customDirectives = {
  'click-outside': {
    bind: (el, binding) => {
      // 点击事件回调函数
      function clickHandle(element) {
        if (el.contains(element.target)) {
          return false
        }
        if (binding.expression) {
          binding.value()
        }
      }
      el._clickOutside_ = clickHandle
      document.addEventListener('mousedown', clickHandle)
    },
    unbind: (el) => {
      document.removeEventListener('mousedown', el._clickOutside_)
      delete el._clickOutside_
    },
  },
}
Object.keys(customDirectives).forEach(name => {
  Vue.directive(name, customDirectives[name])
})
