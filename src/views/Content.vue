<template>
  <div class="content">
    <el-row :gutter="15">
      <el-col :xs="24" :md="24">
        <i class="el-icon-arrow-left" @click="goBack()"></i>
      </el-col>
      <el-col :xs="24" :md="8">
        <div class="bg-padding poem-style">
          <pre><span class="poem-title">将进酒</span>
                        李白
  君不见，黄河之水天上来，奔流到海不复回。
  君不见，高堂明镜悲白发，朝如青丝暮成雪。
    人生得意须尽欢，莫使金樽空对月。
    天生我材必有用，千金散尽还复来。
    烹羊宰牛且为乐，会须一饮三百杯。
    岑夫子，丹丘生，将进酒，杯莫停。
    与君歌一曲，请君为我倾耳听。
    钟鼓馔玉不足贵，但愿长醉不复醒。
    古来圣贤皆寂寞，惟有饮者留其名。
    陈王昔时宴平乐，斗酒十千恣欢谑。
    主人何为言少钱，径须沽取对君酌。
    五花马，千金裘，呼儿将出换美酒，
    与尔同销万古愁。</pre>
        </div>
      </el-col>
      <el-col :xs="24" :md="16">
        <div class="little-title">
          <div class="diamonds"></div>
          <div class="title">诗人介绍</div>
        </div>
        <div class="bg-padding text-style author">
          李白（701年-762年）,字太白，号青莲居士，又号“谪仙人”，祖籍陇西成纪（今甘肃省秦安县），唐代伟大的浪漫主义诗人，被后人誉为“诗仙”，与杜甫合称为“大李杜”。李白爽朗大方，爱饮酒作诗，喜交友，深受黄老列庄思想影响，有《李太白集》传世，诗作中多以醉时写的。李白所作词赋，宋人已有传记（如文莹《湘山野录》卷上），就其开创意义及艺术成就而言，“李白词”享有极为崇高的地位。代表作有《望庐山瀑布》《行路难》《蜀道难》等。
        </div>
      </el-col>
      <el-col :xs="24" :md="16">
        <div class="little-title">
          <div class="diamonds"></div>
          <div class="title">诗歌赏析</div>
        </div>
        <div class="bg-padding text-style appreciate">这首诗非常形象地表现了李白桀骜不驯的性格：一方面对自己充满自信，孤高自傲；一方面在政治前途出现波折后，又流露出纵情享乐之情。在这首诗里，李白演绎庄子的乐生哲学，表示对富贵、圣贤的藐视。而在豪饮行乐中，实则深含怀才不遇之情。诗人借题发挥，借酒浇愁，抒发自己的愤激情绪。全诗气势豪迈，感情奔放，语言流畅，具有很强的感染力。时光流逝，如江河入海一去无回；人生苦短，看朝暮间青丝白雪；生命的渺小似乎是个无法挽救的悲剧，能够解忧的惟有金樽美酒.
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: 'Content',
  components: {},
  data() {
    return {}
  },
  methods: {
    goBack() {
      this.$router.back(-1)
    },
  },
}
</script>
<style lang="scss">
.content {
  .el-icon-arrow-left {
    float: left;
    font-size: 20px;
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

  .text-style {
    text-indent: 2em;
    text-align: justify;
    line-height: 180%;
  }

  .bg-padding {
    background-color: rgba(255, 255, 255, 0.2);
    padding: 10px 15px;
    border-radius: 15px;
    overflow: hidden;
  }
}
</style>
