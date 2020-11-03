<template>
  <div class="home" style="">
    <div class="poem-content header-center animate__animated animate__fadeInUp">
      <h1>众里寻他千百度，蓦然回首那人却在灯火阑珊处。</h1>
      <h4><i style="font-weight:lighter">苏轼</i></h4>
      <el-popover
        placement="bottom"
        title="点亮星星"
        width="200"
        trigger="hover"
        content="我们会根据喜好给您推送诗句！">
        <div slot="reference" class="star animate__animated animate__bounce animate__delay-1s" @click="changeStar()">
          <i :class="isStar?'el-icon-star-on':'el-icon-star-off'"></i>
        </div>
      </el-popover>
    </div>
    <Modal :visible.sync="temp"></Modal>
  </div>
</template>

<script>
import Modal from '@/components/Modal'
export default {
  name: 'Home',
  components: { Modal },
  data() {
    return {
      isStar: false,
      temp: false,
    }
  },
  methods: {
    changeStar() {
      this.isStar = !this.isStar
      this.showModal()
    },
    showModal() {
      this.temp = !this.temp
    },
  },
}
</script>
<style lang="scss">
.home{
  height: 100%;
  display: flex;
  flex-direction: row;
  .poem-content {
    align-self: center;
    margin: 0 auto;
    cursor: pointer;
    .star {
      width: 40px;
      height: 40px;
      line-height: 43px;
      margin: 40px auto 0 auto;
      border-radius: 50%;
      background-color: white;
      box-shadow: 0 0 7px 1px rgba(211, 211, 211, 0.815);
      cursor: pointer;
      i {
        font-size: 22px;
        color: red;
      }
    }
  }
}
</style>
