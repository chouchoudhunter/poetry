<template>
  <div id="app">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <transition name="slide-left" mode="out-in">
          <router-view/>
        </transition>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import request from '@/utils/request'
import Header from './views/common/Header'
import Footer from './views/common/Footer'
import '@/style/animation.scss'
import { mapGetters } from 'vuex'
export default {
  name: 'APP',
  components: {
    Header,
    Footer,
  },
  data() {
    return {}
  },
  computed: { ...mapGetters('requestStatus', ['links']) },
  mounted() {
    this.test()
  },
  methods: {
    test() {
      request({
        url: '/sug?code=utf-8&q=%E5%8D%AB%E8%A1%A3&callback=cb',
        method: 'get',
      }).then((res) => {
      })
    },
  },
}
</script>

<style lang="scss">
*{
  -webkit-tap-highlight-color:transparent;
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
html,body{
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
#app {
  color: #2c3e50;
  height: 100%;
  width: 100%;
  .el-container{
    height: 100%;
  }
  .el-header{
    padding: 20px;
  }
  .el-main{
    text-align: center;
    height: 100%;
    overflow: hidden;
  }
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
