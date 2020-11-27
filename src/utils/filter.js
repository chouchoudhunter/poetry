import Vue from 'vue'

const customFilters = {
  formatPoem: function(val) {
    if (val) {
      const value = val.split('。')
      const newVal = []
      for (let i = 0; i < value.length; i += 2) {
        newVal.push(value[i] + '。' + value[i + 1])
      }
      // console.log(newVal)
      return newVal.join('。\n')
    }
  },
}
Object.keys(customFilters).forEach(name => {
  Vue.filter(name, customFilters[name])
})
