<template>
  <div class="header">
    <el-row :gutter="24">
      <el-col :span="8" class="animate__animated animate__fadeInLeft">
        <SearchBox :showSearch.sync="searchShow"></SearchBox>
      </el-col>
      <el-col :span="8" class="header-center animate__animated animate__fadeInDown">
        <div id="person-img" @click="personShow=!personShow" >
          LOGO
        </div>
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
      <div class="person-item">
        <div class="demo-type">
          <div>
            <el-avatar :size="80" src="https://tse4-mm.cn.bing.net/th/id/OIP.AFdT2f5J-qTBY0Ni09S3-wAAAA?pid=Api&rs=1" @error="errorHandler">
            </el-avatar>
          </div>
        </div>
        <div class="title">
          <el-row>
            <div id="username">
              <span >用户名</span>
              <el-button type="primary" size="mini" >修改密码</el-button>
              <el-button type="primary" size="mini">退出</el-button>
            </div>
          </el-row>
        </div>
        <i class="el-icon-cold-drink"></i>
         <div class="table">
        <el-tabs type="border-card">
  <el-tab-pane>
    <span slot="label"><i class="el-icon-star-off"></i> 我的喜欢</span>
    <div>
          <el-table
            stripe
            :data="data"
            style="width: 100%;">
            <el-table-column
              prop="author"
              label="诗人"
              width="180">
            </el-table-column>
            <el-table-column
              prop="content"
              label="内容"
            >
            </el-table-column>
          </el-table>
    </div>
  </el-tab-pane>
  <el-tab-pane>
    <span slot="label"><i class="el-icon-s-home"></i> 个人资料</span>
    个人资料
  </el-tab-pane>
</el-tabs></div>
      </div>
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
  },
  data() {
    return {
      searchShow: false, // 搜索页
      popBoxShow: false, // 登陆窗口
      isStar: false,
      personShow: false,
      data: [
        {
          author: '李白',
          content: '床前明月光，疑是地上霜。举头望明月，低头思故乡。',
        },
        {
          author: '孟浩然',
          content: '春眠不觉晓，处处闻啼鸟。夜来风雨声，花落知多少。',
        },
        {
          author: '白居易',
          content: '江南好，风景旧曾谙。日出江花红胜火，春来江水绿如蓝。能不忆江南？',
        },
      ],
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

  .header-center {
    text-align: center;
  }

  .header-right {
    text-align: right;
  }

  .person-item {
    margin: 0 auto;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: auto;
    z-index: 8;
    //background-color: rgb(253, 215, 222);

    .img {
      width: 100px;
      height: 60px;
      align-items: center;
    }

    .title {
      margin: 0;
      display: flex;
      flex-direction: column;
    }

    .table {
      width: 100%;
      display: flex;
      flex-direction: column;
      overflow: auto;
      background: var(--item-bg) no-repeat center center / cover;

      .el-table {
        font-size: 12px;
        color: rgb(247, 191, 201);
        border-radius: 10px;
        align-items: center;
        width: 100%;
      }
    }
  }
}
</style>
