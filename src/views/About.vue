<template>
  <div class="about">
    <div class="about-content">
      <marquee behavior="slide" direction="up">
        <div class="text-style">
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
      </marquee>
    </div>
    <div class="about-bottom">
      <div class="line"></div>
      <div class="team">
        <span @click="openLoginWindow1()">关于我们</span>
        |
        <span @click="openLoginWindow2()">联系我们</span>
      </div>
    </div>
    <PopBox :visible.sync="popBoxShow1">
      <pre>
          <ul>
          <li>吴之宇</li>
          <li>刘晓艳</li>
          <li>王艳</li>
          <li>唐子淋</li>
          </ul>
          </pre>
    </PopBox>
    <PopBox :visible.sync="popBoxShow2">
      <pre>
          <ul>
          <li>邮箱：xxxxxxxxxxx</li>
          <li>QQ:xxxxxxxxxx</li>
          <li>电话xxxxxx</li>
          </ul>
          </pre>
    </PopBox>
  </div>
</template>
<script>
import PopBox from '@/components/PopBox'
export default {
  name: 'About',
  components: { PopBox },
  data() {
    return {
      popBoxShow1: false,
      popBoxShow2: false,
    }
  },
  methods: {
    openLoginWindow1() {
      this.popBoxShow1 = !this.popBoxShow1
    },
    openLoginWindow2() {
      this.popBoxShow2 = !this.popBoxShow2
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
