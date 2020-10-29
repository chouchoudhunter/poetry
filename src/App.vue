<template>
  <div id="app">
    <el-button type="primary" @click="test()">dfdf</el-button>
    <div id="nav" v-loading="links['get/sug?code=utf-8&q=%E5%8D%AB%E8%A1%A3&callback=cb']">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>
  </div>
</template>

<script>
import request from '@/utils/request'
import { mapGetters } from 'vuex'
var a = true
export default {
  name: 'APP',
  data() {
    return {}
  },
  computed: { ...mapGetters('requestStatus', ['links']) },
  mounted() {
    this.test()
  },
  methods: {
    test() {
      a = !a
      request({
        url: '/sug?code=utf-8&q=%E5%8D%AB%E8%A1%A3&callback=cb',
        method: 'get',
      }).then((res) => {
        this.$store.commit('test/addLinks', {
          linkName: 'c',
          linkStatus: a,
        })
        console.log(this.links['get/sug?code=utf-8&q=%E5%8D%AB%E8%A1%A3&callback=cb'])
      })
    },
  },
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
