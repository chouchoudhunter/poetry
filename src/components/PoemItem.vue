<template>
  <div class="poem-item">
    <div class="poem-top-right" @click="tempMethod($event)"><i class="el-icon-info"></i></div>
    <div class="poem-top">
      <div class="poem-author">{{ author }}</div>
    </div>
    <div class="poem-center" @click="goContent()">
      <div class="poem-title">{{ title }}</div>
      <div class="poem-desc">
        {{ content | formatPoem('val') }}
      </div>
    </div>
    <div class="poem-bottom">
      <img :src="require('../assets/icon/'+(isStar?'likeClick':'like')+'.svg')" @click="changeStar()">
    </div>
  </div>
</template>

<script>
import { likePoem, likePoemLoading } from '@/api/poem'
import { mapGetters } from 'vuex'
export default {
  name: 'PoemItem',
  props: {
    author: {
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
    id: {
      default: null,
      type: Number,
    },
    isStar: {
      default: false,
      type: Boolean,
    },
  },
  computed: {
    ...mapGetters('requestStatus', ['links']),
    likePoemLoad() {
      return !!this.links[likePoemLoading]
    },
  },
  methods: {
    goContent(poemId) {
      this.$bus.emit('close-modal')
      this.$router.push({
        path: '/content',
        query: { poemId: this.id },
      })
    },
    changeStar() {
      this.$emit('update:isStar', !this.isStar)
      likePoem({
        poemId: this.id,
        isLike: !this.isStar,
      }).then(res => {
        this.$emit('change-star')
      }).catch(() => {
        this.$emit('isStar:update', !this.isStar)
      })
    },
    tempMethod(e) {
      e.preventDefault()
    },
  },
}

</script>

<style lang="scss">
:root {
  --item-bg: url('../assets/bar/bg2.jpg');
}

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
  background: var(--item-bg) no-repeat center center / cover;
  margin-bottom: 10px;

  .poem-desc {
    width: 100%;
    font-size: 16px;
    height: 90px;
    scrollbar-width: none;
    position: absolute;
    top: 0;
    left: 0;
    text-align: center;
    z-index: 3;
    white-space: pre-wrap;
    opacity: 0;
    transition: background-color 2s, opacity 1s;
  }

  &::before {
    transition: filter 2s, margin 2s;
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }

  &::after {
    content: ' ';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }

  &:hover {
    &::before {
      background: var(--item-bg) no-repeat center center / cover;
      filter: blur(5px);
      margin: -30px;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      content: ' ';
      z-index: 3;
    }

    .poem-desc {
      display: block;
      background-color: rgba(0, 0, 0, 0.2);
      opacity: 1;
      overflow: auto;
    }
  }

  .poem-top {
    width: 100%;
    z-index: 2;
    position: relative;
    height: 20px;

    .poem-author {
      font-size: 14px;
      color: white;
      margin: 3px 5px;
      font-weight: lighter;
    }
  }

  .poem-top-right {
    position: absolute;
    right: 5px;
    top: 5px;
    z-index: 4;
  }

  .poem-center {
    display: flex;
    height: 50px;
    flex-direction: row;
    align-items: center;

    .poem-title {
      font-size: 18px;
      font-weight: lighter;
      z-index: 2;
    }

    .poem-desc::-webkit-scrollbar {
      display: none; /* Chrome Safari */
    }
  }

  .poem-bottom {
    width: 100%;
    height: 20px;
    z-index: 3;
    //background-color: rgb(255, 147, 46);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    color: white;

    img {
      width: 25px;
      margin: 0 3px 5px 0;
    }
  }
}
</style>
