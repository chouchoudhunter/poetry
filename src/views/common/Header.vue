<template>
  <div class="header">
    <el-row :gutter="15" type="flex" align="center">
      <el-col :span="10" class="header-left animate__animated animate__fadeInLeft">
        <SearchBox :showSearch.sync="searchShow" @onEnterDown="bindSearchEnter"></SearchBox>
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
    <Modal v-loading="searchPoemLoad" :visible.sync="searchShow">
      <div v-if="!searchResult[0]" class="tips">请在左上角输入你想搜索的关键字,以空格分隔</div>
      <el-row v-infinite-scroll="searchScrollLoad" infinite-scroll-immediate="false">
        <el-col v-for="item in searchResult" :key="item.id" :xs="24" :span="12">
          <poem-item :content="item.content" :title="item.title" :author="item.author" @click="goPoemDesc()"></poem-item>
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
import { searchPoem, searchPoemLoading } from '../../api/poem'
import Chinese from 'chinese-s2t'

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
      searchResult: [],
      keywords: '',
      searchPage: 1, // 搜索结果的第几页
    }
  },
  computed: {
    ...mapGetters('animationStatus', ['anims']),
    ...mapGetters('requestStatus', ['links']),
    searchPoemLoad() {
      return !!this.links[searchPoemLoading]
    },
  },
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
    goPoemDesc() {
      this.$router.push('/content')
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
    // 绑定搜索事件
    bindSearchEnter(val) {
      let flag = true// 标记是下一页还是新的搜索
      if (val) {
        this.keywords = val.keywords
        this.searchPage = 1
        this.searchResult = []
      } else {
        if (!this.searchPage) {
          return
        }
        flag = false
        val = { keywords: this.keywords }
        this.searchPage++
      }

      // 添加转换后的繁体关键词，简繁同查，若输入的关键词没有繁体就不并入同查
      const temp = Chinese.s2t(val.keywords)
      if (temp !== val.keywords) {
        val.keywords = val.keywords + ' ' + temp
      }
      searchPoem({
        keywords: val.keywords,
        page: this.searchPage,
      }).then(res => {
        if (res.data.length <= 19) {
          this.searchPage = 0
        }
        if (flag) {
          this.searchResult = res.data
        } else {
          res.data.forEach(element => {
            this.searchResult.push(element)
          })
        }
      })
    },
    searchScrollLoad() {
      this.bindSearchEnter(false)
    },
  },
}
</script>
<style lang="scss">
:root {
  --item-bg: url('http://img.pptjia.com/image/20190523/d1985d0d72f5ace8bc3c8a5308580365.jpg');
}

.tips {
  text-align: center;
  font-size: 12px;
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
