<template>
  <div class="header">
    <el-row :gutter="15" type="flex" align="center">
      <el-col :span="10" class="header-left animate__animated animate__fadeInLeft">
        <SearchBox :showSearch.sync="searchShow"></SearchBox>
      </el-col>
      <el-col :span="4" class="header-center animate__animated animate__fadeInDown">
        <img src="@/assets/logo.png">
      </el-col>
      <el-col :span="10" class="header-right animate__animated animate__fadeInRight">
        <div v-if="isLogin" class="login-img" @click="personShow=!personShow">
          <el-avatar :size="28" :src="userInfo.photo?userInfo.photo:defaultUserIcon"></el-avatar>
        </div>
        <div v-else class="login-img">
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
      <div slot="header-left">
        <i
          class="el-icon-switch-button"
          :class="{'animation-rotate-right':isCloseHover,'animation-rotate-left':!isCloseHover}"
          @mouseenter="isCloseHover=true"
          @mouseleave="isCloseHover=false"
          @click="logOut()"
        ></i>
      </div>
      <person-item></person-item>
    </Modal>
    <PopBox :visible.sync="popBoxShow">
      <Login @login-in="logIn"></Login>
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
import { removeToken, getToken } from '../../utils/auth'

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
      isStar: false, // 点亮星星
      personShow: false, // 个人中心
      isCloseHover: false,
      isLogin: false, //
      defaultUserIcon: require('@/assets/icon/userIcon.svg'),
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
  mounted() {
    this.isLogin = !!localStorage.getItem('userInfo') && getToken()
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
    logOut() {
      removeToken()
      localStorage.removeItem('userInfo')
      this.personShow = false
      this.isLogin = false
    },
    logIn() {
      this.isLogin = true
      this.popBoxShow = false
    },
    userInfo() {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'))
      return userInfo
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

  .header-left {
    display: flex;
    flex-direction: row;
    justify-content: left;
    align-items: center;
  }

  .header-center {
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    img {
      width: 28px;
    }
  }

  .header-right {
    text-align: right;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;

    .login-img {
      height: 28px;
      width: 28px;
    }
  }
}
</style>
