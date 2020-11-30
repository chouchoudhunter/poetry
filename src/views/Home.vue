<template>
  <div class="home">
    <div
      v-loading="everyPoemLoadingk"
      element-loading-background="rgba(0, 0, 0, 0.1)"
      class="poem-content header-center"
      :class="{
        'animate__animated animate__fadeInUp':autoPlayAnim
      }"
    >
      <i class="el-icon-arrow-left" v-if="leftArrow" @click="clickLeft()"></i>
      <div class="poem-center">
        <div class="poem-content-d">
          <h1><i @click="goContent()">{{ poem.content }}</i></h1>
          <h4><i style="font-weight: lighter;" @click="goContent()">
            {{ poem.author }} {{ poem.title }}
          </i></h4>
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
            <LikeIcon @change="onStarChange"></LikeIcon>
          </div>
        </el-popover>
      </div>
      <i class="el-icon-arrow-right" @click="getEverydayPoem(),clickRight()"></i>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line
import { everyPoem, everyPoemLoading } from '@/api/poem'
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
      leftArrow: false,
      poem:
        {
          title: '《青玉案》',
          content: '众里寻他千百度，蓦然回首那人却在灯火阑珊处。',
          author: '苏轼',
        },
      lastPoem: [],
    }
  },
  computed: {
    ...mapGetters('requestStatus', ['links']),
    everyPoemLoadingk() {
      return !!this.links[everyPoemLoading]
    },
  },
  watch: {},
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
      localStorage.setItem('lastPoem', JSON.stringify(this.lastPoem))
      var nowIndex = this.lastPoem.findIndex((item) => item.content === this.poem.content) // 当前诗句的下标
      if (nowIndex === this.lastPoem.length - 1) {
        everyPoem().then((res) => {
          this.isStar = false
          this.poem = res.data
          if (this.lastPoem.length < 10) {
            this.lastPoem.push(this.poem)
          } else {
            this.lastPoem.splice(0, 1)
            this.lastPoem.push(this.poem)
          }
          localStorage.setItem('lastPoem', JSON.stringify(this.lastPoem))
        })
      } else {
        this.poem = this.lastPoem[nowIndex + 1]
      }
    },
    clickRight() {
      this.leftArrow = true
    },
    clickLeft() {
      this.lastPoem = JSON.parse(localStorage.getItem('lastPoem'))
      var nowIndex = this.lastPoem.findIndex((item) => item.content === this.poem.content)
      if (nowIndex === 1) {
        this.leftArrow = false
      }
      this.poem = this.lastPoem[nowIndex - 1]
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

    cursor: pointer;
    // pointer-events: none;

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
