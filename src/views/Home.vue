<template>
  <div class="home">
    <div
      v-loading="everyPoemLoadingk"
      class="poem-content header-center"
      :class="{'animation-poem-move-down':!anims.serachModal&&!autoPlayAnim,
               'animation-poem-move-up':anims.serachModal&&!autoPlayAnim,
               'animate__animated animate__fadeInUp':autoPlayAnim
      }"
    >
      <i class="el-icon-arrow-left"></i>
      <div class="poem-center">
        <div class="poem-content-d">
          <h1><i @click="goContent()">{{ poem.content }}</i></h1>
          <h4><i style="font-weight: lighter;" @click="goContent()">{{ poem.author }} {{ poem.title }}</i></h4>
        </div>
        <el-popover
          placement="bottom"
          title="点亮星星"
          width="200"
          trigger="hover"
          content="我们会根据喜好给您推送诗句！"
        >
          <div
            slot="reference"
            class="star animate__animated animate__bounce animate__delay-1s"
            @click="changeStar()"
          >
            <i :class="isStar?'el-icon-star-on':'el-icon-star-off'"></i>
          </div>
        </el-popover>
      </div>
      <i class="el-icon-arrow-right" @click="getEverydayPoem()"></i>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
import { everyPoem, everyPoemLoading } from '@/api/poem'
import '@/style/animation.scss'
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  components: {},
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
    goContent() {
      this.$router.push('/content')
    },
    changeStar() {
      this.isStar = !this.isStar
    },
    getEverydayPoem() {
      everyPoem().then((res) => {
        this.isStar = false
        this.poem = res.data
      })
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
    width: 100%;
    position: relative;

    .el-icon-arrow-left {
      position: absolute;
      left: 0;
      top: 40%;
    }

    .poem-center {
      margin: 0 auto;
    }

    .el-icon-arrow-right {
      pointer-events: auto;
      position: absolute;
      right: 0;
      top: 40%;
    }

    h1 {
      margin: 0;
    }

    cursor: pointer;
    pointer-events: none;

    .poem-content-d {
      pointer-events: auto;
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
