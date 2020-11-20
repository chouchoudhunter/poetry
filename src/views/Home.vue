<template>
  <div class="home">
    <div
      v-loading="everyPoemLoadingk"
      element-loading-background="rgba(0, 0, 0, 0.1)"
      class="poem-content header-center"
      :class="{'animation-poem-move-down':!anims.serachModal&&!autoPlayAnim,
               'animation-poem-move-up':anims.serachModal&&!autoPlayAnim,
               'animate__animated animate__fadeInUp':autoPlayAnim
      }"
    >
      <div class="poem-content-d" @click="getEverydayPoem()">
        <h1>{{ poem.content }}</h1>
        <h4><i style="font-weight: lighter;">{{ poem.author }} {{ poem.title }}</i></h4>
      </div>
      <el-popover
        placement="bottom"
        title="点亮星星"
        width="200"
        trigger="hover"
        content="我们会根据喜好给您推送诗句！">
        <div slot="reference" class="star animate__animated animate__bounce animate__delay-1s" @click="changeStar()">
          <!-- <i :class="isStar?'el-icon-star-on':'el-icon-star-off'"></i> -->
          <LikeIcon @change="onStarChange"></LikeIcon>
        </div>
      </el-popover>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
import { everyPoem , everyPoemLoading } from '@/api/poem'
import LikeIcon from '@/components/LikeIcon'
import '@/style/animation.scss'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: { LikeIcon },
  data() {
    return {
      isStar: false,
      autoPlayAnim: true,
      poem: {
        title: '《青玉案》',
        content: '众里寻他千百度，蓦然回首那人却在灯火阑珊处。',
        author: '苏轼',
      },
    }
  },
  computed: {
    ...mapGetters('animationStatus', ['anims']),
    ...mapGetters('requestStatus', ['links']),
    everyPoemLoadingk() {
      return !!this.links[everyPoemLoading]
    },
  },
  watch: {
    'anims.serachModal': function(newVal, oldVal) {
      if (oldVal === false) {
        this.autoPlayAnim = false
      }
    },
  },
  mounted() {
    this.getEverydayPoem()
  },
  methods: {
    changeStar() {
      this.isStar = !this.isStar
    },
    getEverydayPoem() {
      everyPoem().then((res) => {
        this.isStar = false
        this.poem = res.data
      })
    },
    onStarChange(val) {
      if (val) {

      }
    },
  },
}
</script>
<style lang="scss">
.home {
  height: 100%;
  display: flex;
  flex-direction: row;

  .poem-content {
    align-self: center;
    margin: 0 auto;
    z-index: 102;
    cursor: pointer;
    pointer-events: none;

    h1 {
      margin: 0;
    }

    .poem-content-d {
      pointer-events: auto;
    }

    .star {
      width: 40px;
      height: 40px;
      margin: 20px auto;
      border-radius: 50%;
      cursor: pointer;
      pointer-events: auto;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
  }
}

</style>
