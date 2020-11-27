<template>
  <div class="poem-item">
    <div class="poem-top">
      <div class="poem-author">{{ name }}</div>
    </div>
    <div class="poem-center">
      <div class="poem-title">{{ title }}</div>
      <div class="poem-desc">
        {{ content | formatPoem('val') }}
      </div>
    </div>
    <div class="poem-bottom">
      <i :class="isStar?'el-icon-star-on':'el-icon-star-off'" @click="isStar=!isStar"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PoemItem',
  props: {
    name: {
      default: '李清照',
      type: String,
    },
    title: {
      default: '《点绛唇·蹴罢秋千》',
      type: String,
    },
    content: {
      default: '蹴罢秋千，起来慵整纤纤手。露浓花瘦，薄汗轻衣透。见客入来，袜刬金钗溜。和羞走，倚门回首，却把青梅嗅。',
      type: String,
    },
  },
  data() {
    return { isStar: false }
  },
}
</script>

<style lang="scss">
  .poem-item {
    height: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin: 0 5px;
    border-radius: 5px;
    overflow: hidden;
    position: relative;
    background: url('../assets/bar/bg.jpg') no-repeat center center / cover;

    .poem-desc {
      width: 100%;
      font-size: 16px;
      height: 90px;
      overflow: auto;
      scrollbar-width: none;
      position: absolute;
      top: 0;
      left: 0;
      text-align: center;
      z-index: 2;
      display: none;
      white-space: pre-wrap;
    }

    &:hover {
      &::before {
        background: url('../assets/bar/bg.jpg') no-repeat center center / cover;
        filter: blur(5px);
        margin: -30px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        content: ' ';
        z-index: 1;
      }

      .poem-desc {
        display: block;
      }
    }

    .poem-top {
      width: 100%;
      z-index: 0;
      position: relative;
      height: 20px;

      .poem-author {
        font-size: 14px;
        color: white;
        margin: 3px 5px;
        font-weight: bold;
      }
    }

    .poem-center {
      display: flex;
      height: 50px;
      flex-direction: row;
      align-items: center;

      .poem-title {
        font-size: 18px;
        font-weight: bold;
      }

      .poem-desc::-webkit-scrollbar {
        display: none; /* Chrome Safari */
      }
    }

    .poem-bottom {
      width: 100%;
      height: 20px;
      z-index: 2;
      //background-color: rgb(255, 147, 46);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-end;
      color: white;

      i {
        cursor: pointer;//鼠标为手指状
      }
    }
  }
</style>
