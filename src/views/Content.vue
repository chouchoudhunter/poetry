<template>
  <div v-loading="poemDescLoad" class="content">
    <el-row :gutter="15">
      <el-col :xs="24" :md="24">
        <i class="el-icon-arrow-left" @click="goBack()"></i>
      </el-col>
      <el-col :xs="24" :md="8" class="animation-content-poem-in">
        <div class="bg-padding poem-style">
          <div class="poem-title">{{ poemDesc.title }}</div>
          <div class="poem-content">{{ poemDesc.content| formatPoem('val') }}</div>
        </div>
      </el-col>
      <el-col :xs="24" :md="16" class="animation-content-introduce-in">
        <div class="little-title">
          <div class="diamonds"></div>
          <div class="title">诗人介绍</div>
        </div>
        <div class="bg-padding text-style author">
          {{ poemDesc.author }}
        </div>
      </el-col>
      <!-- <el-col :xs="24" :md="16" class="animation-content-introduce-in">
        <div class="little-title">
          <div class="diamonds"></div>
          <div class="title">诗歌赏析</div>
        </div>
        <div class="bg-padding text-style appreciate">这首诗非常形象地表现了李白桀骜不驯的性格：一方面对自己充满自信，孤高自傲；一方面在政治前途出现波折后，又流露出纵情享乐之情。在这首诗里，李白演绎庄子的乐生哲学，表示对富贵、圣贤的藐视。而在豪饮行乐中，实则深含怀才不遇之情。诗人借题发挥，借酒浇愁，抒发自己的愤激情绪。全诗气势豪迈，感情奔放，语言流畅，具有很强的感染力。时光流逝，如江河入海一去无回；人生苦短，看朝暮间青丝白雪；生命的渺小似乎是个无法挽救的悲剧，能够解忧的惟有金樽美酒.
        </div>
      </el-col> -->
    </el-row>
  </div>
</template>
<script>
// eslint-disable-next-line
import { poemDesc, poemDescLoading } from '../api/poem'
import { mapGetters } from 'vuex'
export default {
  name: 'Content',
  components: {},
  data() {
    return {
      poemId: null,
      poemDesc: {
        content: '',
        author: '',
        title: '',
      },
    }
  },
  computed: {
    ...mapGetters('requestStatus', ['links']),
    poemDescLoad() {
      return !!this.links[poemDescLoading]
    },
  },
  mounted() {
    this.poemId = this.$route.params.poemId
    this.initPoemDesc(this.poemId)
  },
  methods: {
    goBack() {
      this.$router.back(-1)
    },
    initPoemDesc(id) {
      poemDesc({ id: id }).then(res => {
        this.poemDesc = res.data
      })
    },
  },
}
</script>
<style lang="scss">
.content {
  .el-icon-arrow-left {
    float: left;
    font-size: 20px;
    width: 50px;
    height: 50px;
    line-height: 50px;
    background-color: rgba(85, 85, 85, 0.2);
    box-shadow: 0 0 8px 2px rgba(54, 54, 54, 0.1);
    margin-bottom: 20px;
  }

  .poem-style {
    text-align: center;
    line-height: 190%;

    .poem-title {
      font-size: 22px;
    }
  }

  .little-title {
    text-align: left;
    font-size: 22px;
    padding: 20px 10px;

    .diamonds {
      float: left;
      width: 15px;
      height: 30px;
      margin-right: 10px;
      background-color: rgb(255, 255, 255, 0.9);
    }
  }

  .poem-content {
    white-space: pre-wrap;
  }

  .text-style {
    text-indent: 2em;
    text-align: justify;
    line-height: 180%;
  }

  .bg-padding {
    background-color: rgba(73, 73, 73, 0.1);
    padding: 10px 15px;
    box-shadow: 0 0 8px 2px rgba(54, 54, 54, 0.1);
    border-radius: 5px;
    overflow: hidden;
  }
}
</style>
