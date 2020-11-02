<template>
  <div class="search-box" :class="{'animation-search-box':isShowSearch}">
    <input type="text" class="search-input">
    <div @click="switchSearchBox()"><i class="el-icon-search" ></i></div>
  </div>
</template>
<script>
import '@/style/animation.css'
export default {
  data() {
    return { isShowSearch: false }
  },
  methods: {
    switchSearchBox() {
      this.isShowSearch = !this.isShowSearch
      console.log(this.isShowSearch)
    },
  },
}
</script>
<style lang="scss">
  .search-box{
    background-color: rgb(218, 218, 218);
    border-radius: 15px;
    padding: 0;
    display: flex;
    width: 0%;
    i{
      text-align: center;
    }
    .search-input{
      outline: none;
      border: none;
      background-color:rgb(218, 218, 218);
      width: 100%;
      padding: 0px;
    }
  }

</style>
