<template>
  <div class="home">
    <div id="logo-img" @>logo</div>
    <div
      class="poem-content header-center"
      :class="{'animation-poem-move-down':!anims.serachModal&&!autoPlayAnim,
               'animation-poem-move-up':anims.serachModal&&!autoPlayAnim,
               'animate__animated animate__fadeInUp':autoPlayAnim
      }">
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
  </div>
</template>

<script>
import '@/style/animation.scss'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: { },
  data() {
    return {
      isStar: false,
      autoPlayAnim: true,
      personShow: true,
    }
  },
  computed: { ...mapGetters('animationStatus', ['anims']) },
  watch: {
    'anims.serachModal': function(newVal, oldVal) {
      if (oldVal === false) {
        this.autoPlayAnim = false
      }
    },
  },
  mounted() {
  },
  methods: {
    changeStar() {
      this.isStar = !this.isStar
    },
    changePerson() {
      this.personShow = !this.personShow
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
    z-index: 102;
    cursor: pointer;
    pointer-events: none;
    .star {
      width: 40px;
      height: 40px;
      line-height: 43px;
      margin: 20px auto;
      border-radius: 50%;
      background-color: white;
      box-shadow: 0 0 7px 1px rgba(211, 211, 211, 0.815);
      cursor: pointer;
      pointer-events: auto;
      i {
        font-size: 22px;
        color: red;
      }
    }
  }
}
</style>
