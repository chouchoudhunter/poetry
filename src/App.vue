<template>
  <div id="app">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"/>
        </keep-alive>
        <router-view v-if="!$route.meta.keepAlive"/>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from './views/common/Header'
import Footer from './views/common/Footer'
import '@/style/animation.scss'
export default {
  name: 'APP',
  components: {
    Header,
    Footer,
  },
  data() {
    return { td: 'null' }
  },
  computed: { },
  mounted() {

  },
  methods: {},
}
</script>

<style lang="scss">
* {
  -webkit-tap-highlight-color: transparent;
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

html,
body {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}

#app {
  //color: #2c3e50;
  height: 100%;
  width: 100%;
  // background: url('./assets/bg.jpg') no-repeat center center;
  background-image: linear-gradient(45deg, #cc6aa5, #3e91cc, #2dcca7);
  background-size: 600% 100%;
  animation: bg-pan-left 15s;
  animation-direction: alternate;
  animation-iteration-count: infinite;
  //background-size: cover;
  color: white;

  @keyframes bg-pan-left {
    0% {
      background-position: 100% 50%;
    }

    100% {
      background-position: 0% 50%;
    }
  }

  .el-container {
    background-color: rgba(0, 0, 0, 0.1);
    height: 100%;
  }

  .el-header {
    padding: 20px;
  }

  .el-main {
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
