<template>
  <div class="footer">
    <div class="toolbar">
      <div class="toolbar-item" @click="goHome">
        <img :src="require('../../assets/icon/'+(change?'homeClick':'home')+'.svg')" alt="" @click="change=true">
        <span>首页</span>
      </div>
      <div class="toolbar-item">
        <img class="img" src="@/assets/icon/dw-bt.svg" alt="">
        <span>{{ temperature }}</span>
      </div>
      <div class="toolbar-item" @click="goAbout">
        <img :src="require('../../assets/icon/'+(change?'about':'aboutClick')+'.svg')" alt="" @click="change=false">
        <span>关于</span>
      </div>
    </div>
  </div>
</template>
<script>
import { weather } from '@/api/common'
export default {
  name: 'Footer',
  data() {
    return {
      temperature: '5°C-20°C',
      isChoose: true,
      change: true,
    }
  },
  mounted() {
    weather().then(res => {
      let temperature = res.data.data.forecast[0]
      temperature = temperature.low.split(' ')[1] + '-' + temperature.high.split(' ')[1]
      this.temperature = temperature
    })
  },
  methods: {
    goHome() {
      this.isChoose = true
      this.$router.push('/')
    },
    goAbout() {
      this.isChoose = false
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
  margin-top: 10px;
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
    }

    img {
      width: 30px;
    }
  }
}
</style>
