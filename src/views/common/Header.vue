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
              <!-- <el-button type="primary" size="mini" >修改密码</el-button> -->
              <el-button type="primary" size="mini">退出</el-button>
            </div>
          </el-row>
        </div>
        <i class="el-icon-cold-drink"></i>
        <div class="person-table">
          <el-tabs type="border-card">
            <el-tab-pane>
              <span slot="label"><i class="el-icon-star-off"></i> 我的喜欢</span>
              <div>
                <el-row :gutter="10" style="overflow: auto;">
                  <el-col :xs="24" :span="12">
                    <poem-item></poem-item>
                  </el-col>
                  <el-col :xs="24" :span="12">
                    <poem-item></poem-item>
                  </el-col>
                </el-row>
              </div>
            </el-tab-pane>
            <el-tab-pane>
              <span slot="label"><i class="el-icon-s-home"></i> 个人资料</span>
              <h4 style="color: black;">个人资料</h4>
              <el-divider></el-divider>
              <div class="person-img">
                <table cellspacing="">
                  <tr>
                    <td><span>头像</span></td>
                    <td>
                      <el-image
                        style="width: 50px; height: 50px;"
                        :src="url"
                        :preview-src-list="srcList">
                      </el-image>
                    </td>
                    <td colspan="2">
                      <div class="img-right">
                        <el-upload
                          class="upload-demo"
                          action="https://jsonplaceholder.typicode.com/posts/"
                          :on-preview="handlePreview"
                          :on-remove="handleRemove"
                          :before-remove="beforeRemove"
                          multiple
                          :limit="1"
                          :on-exceed="handleExceed"
                          :file-list="fileList">
                          <el-button size="small" type="primary">点击上传</el-button>
                          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                        </el-upload>
                      </div>
                    </td><td></td></tr>
                </table>
                <el-divider></el-divider>
                <table cellspacing="">
                  <tr><td><span>用户名</span></td>
                    <td><div class="person-name"><el-input
                      v-model="input"
                      placeholder="input"
                      :disabled="true">
                    </el-input></div></td>
                    <td><el-button type="text" icon="el-icon-edit">修改</el-button></td></tr>
                </table>
                <el-divider></el-divider>
                <table cellspacing="30"><tr><td><span>邮箱</span></td>
                  <td><div class="person-email"><el-input
                    v-model="email"
                    placeholder="input"
                    :disabled="true">
                  </el-input></div></td>
                  <td><el-button type="text" icon="el-icon-edit">修改</el-button></td></tr>
                </table>
              </div>
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
      input: '用户名',
      email: '123456',
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
      url: 'https://tse4-mm.cn.bing.net/th/id/OIP.AFdT2f5J-qTBY0Ni09S3-wAAAA?pid=Api&rs=1',
      srcList: [
        'https://tse4-mm.cn.bing.net/th/id/OIP.AFdT2f5J-qTBY0Ni09S3-wAAAA?pid=Api&rs=1',
        'https://tse4-mm.cn.bing.net/th/id/OIP.AFdT2f5J-qTBY0Ni09S3-wAAAA?pid=Api&rs=1',
      ],
      fileList: [],
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
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePreview(file) {
      console.log(file)
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`)
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${file.name}？`)
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

    .title {
      margin: 0;
      display: flex;
      flex-direction: column;
    }

    .person-table {
      width: 100%;
      display: flex;
      flex-direction: column;
      overflow: auto;
      background: var(--item-bg) no-repeat center center / cover;
    }

    .person-img {
      color: black;
      overflow: auto;

      .table {
        border-collapse: separate;

        .td {
          border: 0 20 0 20 solid white;
        }
      }
    }
  }
}
</style>
