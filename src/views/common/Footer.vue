<template>
  <div class="footer">
    <div class="toolbar">
      <div class="toolbar-item" @click="goHome">
        <img src="@/assets/icon/home.svg" alt="">
        <span>首页</span>
      </div>
      <div class="toolbar-item">
        <img src="@/assets/icon/dw-bt.svg" alt="">
        <span>20°C</span>
      </div>
      <div class="toolbar-item" @click="goAbout">
        <img src="@/assets/icon/about.svg" alt="">
        <span>关于</span>
      </div>
    </div>
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
.footer {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
}

.toolbar {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 60%;

  .toolbar-item {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    span {
      font-weight: lighter;
      font-size: 10px;
      margin-top: 5px;
    }

    img {
      width: 20px;
    }
  }
}
</style>
