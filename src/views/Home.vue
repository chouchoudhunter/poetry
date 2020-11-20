<template>
  <div class="home">
    <div
      v-loading="everyPoemLoadingk"
      class="poem-content header-center"
      :class="{'animation-poem-move-down':!anims.serachModal&&!autoPlayAnim,
               'animation-poem-move-up':anims.serachModal&&!autoPlayAnim,
               'animate__animated animate__fadeInUp':autoPlayAnim,
               index1: isIndex1,
               index2: isIndex2
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
          <i :class="isStar?'el-icon-star-on':'el-icon-star-off'"></i>
        </div>
      </el-popover>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
 import bus from './eventBus'
import { everyPoem, everyPoemLoading } from '@/api/poem'
import '@/style/animation.scss'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: { },
  data() {
    return {
      isStar: false,
      autoPlayAnim: true,
      poem: {
        title: '《青玉案》',
        content: '众里寻他千百度，蓦然回首那人却在灯火阑珊处。',
        author: '苏轼',
      },
      isIndex1: true,
      isIndex2: false,
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
    // bus.$son('userIndex1', function(isIndex1) {
    //   self.isIndex1 = isIndex1
    // })
    // bus.$son('useIndex2', function(isIndex2) {
    //   self.inIndex2 = isIndex2
    // })
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

    chngeSearchIndex() {
      this.isIndex1 = false
      this.isIndex2 = true
    },
  },
}
</script>
<style lang="scss">
.home {
  height: 100%;
  display: flex;
  flex-direction: row;

  .index2 {
    position: relative;
    z-index: 102;
  }

  .index1 {
    position: relative;
    z-index: 0;
  }

  .poem-content {
    align-self: center;
    margin: 0 auto;
    //z-index: 102;
    cursor: pointer;
    pointer-events: none;

    .poem-content-d {
      pointer-events: auto;
      position: relative;
    }

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
