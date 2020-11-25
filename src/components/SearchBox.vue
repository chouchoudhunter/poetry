<template>
  <div class="search-box" :class="{'animation-search-box':showSearch,'animation-search-box-hide':!showSearch&&autoPlay}">
    <input type="text" class="search-input">
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
    return { autoPlay: false }
  },
  methods: {
    switchSearchBox() {
      this.$emit('update:showSearch', !this.showSearch)
      if (this.showSearch === false) {
        this.autoPlay = true
      }
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
