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
    <Modal :visible.sync="searchShow"></Modal>
    <PopBox :visible.sync="popBoxShow"></PopBox>
  </div>
</template>
<script>
import SearchBox from '@/components/SearchBox'
import Modal from '@/components/Modal'
import PopBox from '@/components/PopBox'
import { mapGetters } from 'vuex'
export default {
  name: 'Header',
  components: {
    SearchBox,
    Modal,
    PopBox,
  },
  data() {
    return {
      searchShow: false,
      popBoxShow: false,
    }
  },
  computed: { ...mapGetters('animationStatus', ['anims']) },
  watch: {
    // 监听searhShow的值的变化修改searchModal状态的值
    searchShow: function(oldVal, newVal) {
      this.$store.commit('animationStatus/editAnimStatus', {
        name: 'serachModal',
        status: newVal,
      })
    },
  },
  methods: {
    openLoginWindow() {
      this.popBoxShow = !this.popBoxShow
    },
    // 打开搜索模态框
    openSearchModal() {
      if (!this.anims.serachModal) {
        this.$store.commit('animationStatus/addAnimStatus', {
          name: 'serachModal',
          status: true,
        })
      }
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
