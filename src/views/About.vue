<template>
  <div>
    <marquee behavior="slide" direction="up">
      <div class="about">
        <font size="3">
          <pre>
      三五个字凝成故事，
      四五个韵独奏出岁月的回音。
  诗、词、曲即使横越过发落寞与复兴不断更替的时光，
      仍然具有其自己独特的哲学意味与民族价值，
      那些少男少艾欲言又止的情愫，
      那些名人志士们浩荡激昂的心神，
      用尽一生也无法踏遍的山川奇秀，
    一世都难以参破禅缘佛与都凝在那短短三言两语里。
      本网站企图开启一场属于中华诗词的文艺再复兴，
      新的媒体形式将作为全新的载体，
      每日一诗词作为传达方式，
      所有人都是我们这场文化复兴之旅的目标对象，
      让我们在文字里踏遍山川遍阅世事，
      记住早已远去缥缈在眉间心上的哀愁与思念，
      让我们记住贯穿在整个华夏大地的文化脉搏，
      或许一切都从未远去......
          </pre>
        </font>
      </div>
    </marquee>
    <div id="dingwei" >
      <hr>
      <div id="a" @click="openLoginWindow1()"><b>团队介绍</b></div>
      <div id="b" @click="openLoginWindow2()"><b>联系我们</b></div>
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
  height: 520px;
  width: auto;
  overflow: auto;
  line-height: 185%;
  text-align: center;
  z-index: 0;
}

#dingwei {
  position: fixed;
  width: 100%;
  height: 45px;
  bottom: 80px;
  left: 0;
  z-index: 1;
}

#a {
  padding-top: 10px;
  float: left;
  padding-left: 40px;
}

#b {
  padding-top: 10px;
  float: right;
  padding-right: 40px;
}
</style>
