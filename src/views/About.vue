<template>
  <div class="about">
    <div class="about-content">
      <div v-if="isShow" class="text-style animation-above-in">
        三五个字凝成故事，<br>
        四五个韵独奏出岁月的回音。<br>
        诗、词、曲即使横越过落寞与复兴不断更替的时光，<br>
        仍然具有其自己独特的哲学意味与民族价值，<br>
        那些少男少艾欲言又止的情愫，<br>
        那些名人志士们浩荡激昂的心神，<br>
        用尽一生也无法踏遍的山川奇秀，<br>
        一世都难以参破禅缘佛与都凝在那短短三言两语里。
        <br><br>
        本网站企图开启一场属于中华诗词的文艺再复兴，<br>
        新的媒体形式将作为全新的载体，<br>
        每日一诗词作为传达方式，<br>
        所有人都是我们这场文化复兴之旅的目标对象，<br>
        让我们在文字里踏遍山川遍阅世事，<br>
        记住早已远去缥缈在眉间心上的哀愁与思念，<br>
        让我们记住贯穿在整个华夏大地的文化脉搏，<br>
        或许一切都从未远去......<br>
      </div>
      <div v-if="!isShow" class="animation-content-introduce-in">
        <div class="center-text">请把您的建议或意见发送至邮箱：1903370102@qq.com</div>
        <div class="back">
          <i class="el-icon-arrow-left" @click="goBack()"></i>
        </div>
      </div>
    </div>
    <div class="about-bottom">
      <div class="line"></div>
      <div class="team">
        <span @click="showConnect()">联系我们</span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'About',
  data() {
    return { isShow: true }
  },
  methods: {
    showConnect() {
      this.isShow = false
    },
    goBack() {
      this.isShow = true
    },
  },
}
</script>
<style lang="scss">
.about {
  height: 100%;

  .about-content {
    height: 95%;
    overflow: auto;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */

    .text-style {
      line-height: 200%;
      text-align: center;
    }

    .center-text {
      margin-top: 50px;
      line-height: 150%;
    }

    .back {
      width: 40px;
      height: 40px;
      margin: 40px auto;
      background-color: rgba(73, 73, 73, 0.2);
      border-radius: 20px;

      .el-icon-arrow-left {
        font-size: 25px;
        line-height: 40px;
      }
    }
  }

  .about-content::-webkit-scrollbar {
    display: none; /* Chrome Safari */
    -ms-overflow-style: none; /* IE 10+ */
  }

  .about-bottom {
    height: 5%;

    .line {
      height: 2px;
      margin: 5px 0;
      background-color: rgb(255, 255, 255, 0.8);
    }

    .team {
      font-weight: bold;
      letter-spacing: 1px;
    }
  }
}
</style>
