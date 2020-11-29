<template>
  <div class="header">
    <el-row :gutter="24">
      <el-col :span="8" class="animate__animated animate__fadeInLeft">
        <SearchBox :showSearch.sync="searchShow"></SearchBox>
      </el-col>
      <el-col :span="8" class="header-center animate__animated animate__fadeInDown">
        <img src="@/assets/logo.png" @click="personShow=!personShow">
      </el-col>
      <el-col :span="8" class="header-right animate__animated animate__fadeInRight">
        <div id="login-img">
          <div><i class="el-icon-user" @click="popBoxShow=!popBoxShow"></i></div>
        </div>
      </el-col>
    </el-row>
    <Modal :visible.sync="searchShow">
      <el-row :gutter="10" style="overflow: auto;">
        <el-col :xs="24" :span="12">
          <poem-item></poem-item>
        </el-col>
        <el-col :xs="24" :span="12">
          <poem-item></poem-item>
        </el-col>
      </el-row>
    </Modal>
    <Modal :visible.sync="personShow">
      <person-item></person-item>
    </Modal>
    <PopBox :visible.sync="popBoxShow">
      <Login></Login>
    </PopBox>
  </div>
</template>
<script>
import SearchBox from '@/components/SearchBox'
import Modal from '@/components/Modal'
import PopBox from '@/components/PopBox'
import Login from '@/components/Login'
import PoemItem from '@/components/PoemItem'
import PersonItem from '@/components/PersonItem'
import { mapGetters } from 'vuex'
import LikeIcon from '@/components/LikeIcon.vue'

export default {
  name: 'Header',
  components: {
    SearchBox,
    Modal,
    PopBox,
    Login,
    LikeIcon,
    PoemItem,
    PersonItem,
  },
  data() {
    return {
      searchShow: false, // 搜索页
      popBoxShow: false, // 登陆窗口
      isStar: false,
      personShow: false,
    }
  },
  computed: { ...mapGetters('animationStatus', ['anims']) },
  watch: {
    // 监听searhShow的值的变化修改searchModal状态的值
    searchShow: function(newVal, oldVal) {
      if (newVal && this.personShow) {
        this.personShow = false
      }
      this.$store.commit('animationStatus/editAnimStatus', {
        name: 'serachModal',
        status: newVal,
      })
    },
    personShow: function(newVal, oldVal) {
      if (newVal && this.searchShow) {
        this.searchShow = false
      }
    },
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex + 1) {
        return 'row'
      }
    },
    errorHandler() {
      return true
    },
  },
}
</script>
<style lang="scss">
:root {
  --item-bg: url('http://img.pptjia.com/image/20190523/d1985d0d72f5ace8bc3c8a5308580365.jpg');
}

.header {
  i {
    font-size: 20px;
  }

  .el-row {
    position: relative;
  }

  .header-center {
    text-align: center;
    position: absolute;
    top: -10px;
    left: 33%;

    img {
      width: 40px;
    }
  }

  .header-right {
    text-align: right;
    position: absolute;
    right: 0;
  }
}
</style>
