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
      <i v-if="leftArrow" class="el-icon-arrow-left" @click="clickLeft()"></i>
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
      <i class="el-icon-arrow-right" @click="clickRight()"></i>
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
      autoPlayAnim: true,
      leftArrow: false,
      poem:
        {
          title: '《青玉案》',
          content: '众里寻他千百度，蓦然回首那人却在灯火阑珊处。',
          author: '苏轼',
          isStar: false,
        },
      lastPoem: [], // 诗句缓存
      nowPoemIndex: -1, // 当前诗句
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
    this.initPoem()
  },
  methods: {
    initPoem() {
      // 页面刷新的时候初始化内存
      // 先判断storage里是否存在字段lastPoem
      if (!localStorage.getItem('lastPoem')) {
        localStorage.setItem('lastPoem', JSON.stringify(this.lastPoem))
      } else {
        this.lastPoem = JSON.parse(localStorage.getItem('lastPoem'))
        // 再次判断诗句条数
        if (this.lastPoem.length > 0) {
          this.leftArrow = true
          this.nowPoemIndex = this.lastPoem.length - 1
          this.poem = this.lastPoem[this.nowPoemIndex]
        }
      }
      // 无论是否刷新诗句都要加载新一条诗句
      this.clickRight()
    },
    goContent() {
      this.$router.push('/content')
    },
    changeStar() {
      this.poem.isStar = !this.poem.isStar
    },
    clickRight() {
      // 先判断现在是不是最新一条诗句
      if (this.nowPoemIndex === this.lastPoem.length - 1) {
        everyPoem().then((res) => {
          // 新请求的诗句赋值
          this.poem = res.data
          this.poem.isStar = false
          // 判断存储的诗句是不是已经超过10条了
          // 超过删除最后一条，不移动下标
          // 没超过下标+1
          if (this.lastPoem.length >= 10) {
            this.lastPoem.splice(0, 1)
          } else {
            this.nowPoemIndex++
          }
          // 保存新请求的诗句
          this.lastPoem.push(this.poem)
          localStorage.setItem('lastPoem', JSON.stringify(this.lastPoem))
          // 只要点击右边的话只用判断诗句条数大不大于1，只要大于1就显示左边按钮
          if (this.lastPoem.length > 1) {
            this.leftArrow = true
          }
        })
        // 如果不是最新一条诗句，直接移动下标
      } else {
        this.nowPoemIndex++
        this.poem = this.lastPoem[this.nowPoemIndex]
        this.leftArrow = true
      }
    },
    clickLeft() {
      // 移动下标
      this.nowPoemIndex--
      // 如果到最后一条左边按钮隐藏
      if (this.nowPoemIndex === 0) {
        this.leftArrow = false
      }
      // 赋值当前诗句
      this.poem = this.lastPoem[this.nowPoemIndex]
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
