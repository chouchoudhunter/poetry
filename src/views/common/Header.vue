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
      <div class="modal-padding"></div>
      <div class="poem-item">
        <div class="poem-left">
          <div class="poem-left-box">
            <div class="poem-author">李清照</div>
          </div>
        </div>
        <div class="poem-center">
          <div class="poem-title">点绛唇·蹴罢秋千</div>
          <div class="poem-desc">
            蹴罢秋千，起来慵整纤纤手。露浓花瘦，薄汗轻衣透。见客入来，袜刬金钗溜。和羞走，倚门回首，却把青梅嗅。
          </div>
        </div>
        <div class="poem-right">
          <i :class="isStar?'el-icon-star-on':'el-icon-star-off'" @click="isStar=!isStar"></i>
        </div>
      </div>
    </Modal>
    <Modal :visible.sync="personShow">
      <div class="person-item">
        <div class="demo-type">
          <div>
            <el-avatar src="https://tse4-mm.cn.bing.net/th/id/OIP.AFdT2f5J-qTBY0Ni09S3-wAAAA?pid=Api&rs=1"></el-avatar>
          </div>
        </div>
        <div class="title">
          <el-row>
            <div id="username">
              <span >用户名</span>
              <el-button  type="primary" size="mini" >修改密码</el-button>
              <el-button  type="primary" size="mini">退出</el-button>
            </div>
          </el-row>
        </div>
        <h3 >我的喜欢</h3><LikeIcon></LikeIcon>
        <div class="table">
          <el-table
            :data="tableData"
            stripe
            style="background-color: #efb; width: 100%;">
            <div class="poem-center">
            <el-table-column
              align="center"
              prop="like"
              width="auto">
            </el-table-column>
            </div>
          </el-table>
        </div>
      </div>
    </Modal>
    <PopBox :visible.sync="popBoxShow">
      <Login></Login>
    </PopBox>
  </div>
</template>
<script>
// import bus from '../eventBus'
import SearchBox from '@/components/SearchBox'
import Modal from '@/components/Modal'
import PopBox from '@/components/PopBox'
import Login from '@/components/Login'
import { mapGetters } from 'vuex'
export default {
  name: 'Header',
  components: {
    SearchBox,
    Modal,
    PopBox,
    Login,
    // bus,
  },
  data() {
    return {
      searchShow: false, // 搜索页
      popBoxShow: false, // 登陆窗口
      isStar: false,
      personShow: false,
      str: '用户名<br/>',
      tableData: [{ like: ' 木瓜' }, { like: '望岳' }, { like: '题西林壁' }],
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
  methods: {},
}
</script>
<style lang="scss">
.modal-padding {
  height: 160px;
  width: 100%;
  display: block;
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

  .poem-item {
    height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    margin: 0 5px;
    border-radius: 5px;
    overflow: hidden;
    z-index: 200;

    .poem-left {
      width: 200px;
      height: 100%;
      background-color: rgb(255, 147, 46);
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      position: relative;
      margin-right: 15px;
    }

    .poem-left::after {
      content: '';
      height: 0;
      width: 0;
      position: absolute;
      right: -19px;
      top: 50%;
      margin-top: -10px;
      border: rgba(255, 255, 255, 0) 10px solid;
      border-left: rgb(255, 147, 46) 10px solid;
    }

    .poem-center {
      flex-grow: 1;

      .poem-title {
        font-size: 18px;
        font-weight: bold;
      }

      .poem-desc {
        font-size: 16px;
        height: 40px;
        overflow: auto;
        scrollbar-width: none;
      }

      .poem-desc::-webkit-scrollbar {
        display: none; /* Chrome Safari */
      }
    }

    .poem-right {
      width: 100px;
      background-color: rgb(255, 147, 46);
      height: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      color: white;

      i {
        cursor: pointer;//鼠标为手指状
      }
    }

    .poem-author {
      font-size: 16px;
      font-weight: bold;
      height: 50px;
      writing-mode: vertical-rl;
      margin: 0 auto;
      color: white;
    }
  }

  .person-item {
    margin: 0 auto;
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    overflow: hidden;
    border-radius: 5px;
    // box-shadow: 0 2px 12px rgb(253, 215, 222);
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
      border-radius: 50%;
      align-items: center;
      width: 60%;
      height: 350px;
      text-align: center;
    }
  }
}
</style>
