<template>
  <div class="header">
    <el-row :gutter="24">
      <el-col :span="8" class="animate__animated animate__fadeInLeft">
        <SearchBox :showSearch.sync="searchShow" @click-icon="openSearchModal()"></SearchBox>
      </el-col>
      <el-col :span="8" class="header-center animate__animated animate__fadeInDown">
        LOGO
      </el-col>
      <el-col :span="8" class="header-right animate__animated animate__fadeInRight">
        <div id="login-img" @click="openLoginWindow()">
          <div><i class="el-icon-user"></i></div>
        </div>
      </el-col>
    </el-row>
    <Modal :visible.sync="modalShow" @close-modal="clickCloseModalBtn()"></Modal>
  </div>
</template>
<script>
import SearchBox from '@/components/SearchBox'
import Modal from '@/components/Modal'
export default {
  name: 'Header',
  components: {
    SearchBox,
    Modal,
  },
  data() {
    return {
      modalShow: false,
      searchShow: false,
    }
  },
  methods: {
    openLoginWindow() {
      this.$alert('xxx', '登陆', { dangerouslyUseHTMLString: true })
    },
    openSearchModal() {
      this.modalShow = !this.modalShow
    },
    clickCloseModalBtn() {
      this.searchShow = !this.searchShow
    },
  },
}
</script>
<style lang="scss">
.header{
  i{
      font-size: 20px;
  }
  .header-center{
    text-align: center;
  }
  .header-right{
    text-align: right;
  }
}
</style>
