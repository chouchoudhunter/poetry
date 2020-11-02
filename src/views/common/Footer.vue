<template>
  <div class="footer">
    <el-link @click="goHome()">Home</el-link> |
    <el-link @click="goAbout()">About</el-link>
    <!-- <div id="nav" v-loading="links['get/sug?code=utf-8&q=%E5%8D%AB%E8%A1%A3&callback=cb']">

        </div> -->
  </div>
</template>
<script>
export default {
  name: 'Footer',
  data() {
    return {}
  },
  methods: {
    goHome() {
      this.$router.push('/')
    },
    goAbout() {
      this.$router.push('/about')
    },
  },
}
</script>
<style lang="scss">
.footer{
  text-align: center;
}
</style>
