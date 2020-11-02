<template>
  <div class="footer">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <!-- <div id="nav" v-loading="links['get/sug?code=utf-8&q=%E5%8D%AB%E8%A1%A3&callback=cb']">

        </div> -->
  </div>
</template>
<script>
export default { name: 'Footer' }
</script>
<style lang="scss">
.footer{
  text-align: center;
}
</style>
