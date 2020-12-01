<template>
  <div class="search-box" :class="{'animation-search-box':showSearch,'animation-search-box-hide':!showSearch&&autoPlay}">
    <input ref="searchEnter" v-model="keywords" type="text" class="search-input">
    <div @click="switchSearchBox()"><i :class="{'el-icon-search':!showSearch,'el-icon-close':showSearch}" ></i></div>
  </div>
</template>
<script>
import '@/style/animation.scss'
export default {
  props: {
    showSearch: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      autoPlay: false,
      keywords: '',
    }
  },
  mounted() {
    this.searchEnter()
  },
  methods: {
    switchSearchBox() {
      this.$emit('update:showSearch', !this.showSearch)
      if (this.showSearch === false) {
        this.autoPlay = true
      }
    },
    searchEnter() {
      this.$refs.searchEnter.addEventListener('keydown', (e) => {
        if (e.keyCode === 13) {
          e.preventDefault()
          this.$emit('onEnterDown', { keywords: this.keywords })
        }
      })
    },
  },
}
</script>
<style lang="scss">
  .search-box {
    border-radius: 15px;
    padding: 0;
    display: flex;
    width: 0%;

    i {
      text-align: center;
    }

    .search-input {
      outline: none;
      border: none;
      background-color: rgba(218, 218, 218, 0);
      width: 100%;
      padding: 0;
    }
  }

</style>
