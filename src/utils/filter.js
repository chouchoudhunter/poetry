import Vue from 'vue'

const customFilters = {
  formatPoem: function(val) {
    if (val) {
      let value = val.split('。')
      value = value.join('。\n')
      console.log(value)
      return value
    }
  },
}
Object.keys(customFilters).forEach(name => {
  Vue.filter(name, customFilters[name])
})
