<template>
  <div class="content">
    <i class="el-icon-arrow-left" @click="goBack()"></i>
    <div>详情</div>
  </div>
</template>
<script>
export default {
  name: 'Content',
  components: {},
  data() {
    return {}
  },
  methods: {
    goBack() {
      this.$router.back(-1)
    },
  },
}
</script>
<style lang="scss">
.el-icon-arrow-left {
  float: left;
}
</style>
