import Vue from 'vue'

const customFilters = {
  formatPoem: function(val) {
    if (val) {
      const value = val.split('。')
      // console.log(newVal)
      return value.join('。\n')
    }
  },
}
Object.keys(customFilters).forEach(name => {
  Vue.filter(name, customFilters[name])
})
