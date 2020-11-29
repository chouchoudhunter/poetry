<template>
  <div class="person-item">
    <el-row type="flex" justify="center">
      <el-col :xs="24" :sm="16" :md="16">
        <div class="top-tab">
          <div class="top-tab-center"><el-button type="text" :class="change?'el-button-big':'el-button'" @click="changeLike()">我的喜欢</el-button> |<el-button type="text" :class="!change?'el-button-big':'el-button'" @click="changePer()">个人资料</el-button>
          </div>
          <div class="top-exit">
            <el-button type="text" size="mini" icon="el-icon-s-promotion">退出</el-button>
          </div>
        </div>
        <div class="line"></div>
        <!-- 我的喜欢-->
        <div v-if="change" class="my-like">
          <el-row :gutter="10" style="overflow: auto;">
            <el-col :xs="24" :span="12">
              <poem-item></poem-item>
            </el-col>
            <el-col :xs="24" :span="12">
              <poem-item></poem-item>
            </el-col>
          </el-row>
        </div>
        <!-- 个人资料-->
        <div v-if="!change" class="presonal-data">
          <h3>个人资料</h3>
          <!--头像-->
          <table cellspacing="" width="400">
            <tr>
              <td><span>头 像</span></td>
              <td>
                <el-image style="width: 50px; height: 50px;" :src="url" :preview-src-list="srcList">
                </el-image>
                <el-popover
                  placement="top-start"
                  title="标题"
                  width="200"
                  trigger="hover"
                  content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。"
                >
                  <i class="el-icon-star-off"></i>
                </el-popover>
              </td>
              <td colspan="">
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
                    :file-list="fileList"
                  >
                    <el-button size="small" type="primary">点击上传</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                  </el-upload>
                </div>
              </td>
            </tr>
          </table>
          <div class="other-line"></div>
          <!-- 昵称 -->
          <el-row class="personal-item">
            <el-col :xs="24" :sm="2" :md="2"><div class="left-title">昵 称</div></el-col>
            <el-col :xs="15" :sm="12" :md="10">
              <el-input v-model="username" placeholder="请输入昵称" :disabled="isInput"></el-input>
            </el-col>
            <el-col :xs="9" :sm="10" :md="12">
              <div class="right-but">
                <div v-if="isInput">
                  <el-button type="text" icon="el-icon-edit" @click="toAlter()">修改</el-button>
                </div>
                <div v-if="!isInput">
                  <el-button type="text" @click="toSave()">保存</el-button>
                  <el-button type="text" @click="toCancle()">取消</el-button>
                </div>
              </div>
            </el-col>
          </el-row>
          <div class="other-line"></div>
          <!-- 邮箱 -->
          <el-row class="personal-item">
            <el-col :xs="24" :sm="2" :md="2"><div class="left-title">邮 箱</div></el-col>
            <el-col :xs="15" :sm="12" :md="10">
              <el-input v-model="email" :disabled="true"></el-input>
            </el-col>
          </el-row>
          <div class="other-line"></div>
          <!-- 密码 -->
          <el-row class="personal-item">
            <el-col :xs="24" :sm="2" :md="2"><div class="left-title">密 码</div></el-col>
            <el-col :xs="15" :sm="12" :md="10">
              <el-input v-model="password" placeholder="请输入密码" :disabled="isInput"></el-input>
            </el-col>
            <el-col :xs="9" :sm="10" :md="12">
              <div class="right-but">
                <div v-if="isInput">
                  <el-button type="text" icon="el-icon-edit" @click="toAlter()">修改</el-button>
                </div>
                <div v-if="!isInput">
                  <el-button type="text" @click="toSave()">保存</el-button>
                  <el-button type="text" @click="toCancle()">取消</el-button>
                </div>
              </div>
            </el-col>
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PoemItem from './PoemItem'
export default {
  name: 'PersonItem',
  components: { PoemItem },
  data() {
    return {
      change: true,
      isInput: true,
      username: 'L',
      email: '123456@qq.com',
      password: '******',
      url: 'https://tse4-mm.cn.bing.net/th/id/OIP.AFdT2f5J-qTBY0Ni09S3-wAAAA?pid=Api&rs=1',
      srcList: [
        'https://tse4-mm.cn.bing.net/th/id/OIP.AFdT2f5J-qTBY0Ni09S3-wAAAA?pid=Api&rs=1',
        'https://tse4-mm.cn.bing.net/th/id/OIP.AFdT2f5J-qTBY0Ni09S3-wAAAA?pid=Api&rs=1',
      ],
      fileList: [],
    }
  },
  methods: {
    changeLike() {
      this.change = true
    },
    changePer() {
      this.change = false
    },
    toAlter() {
      this.isInput = false
    },
    toSave() {
      this.isInput = true
    },
    toCancle() {
      this.isInput = true
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

<style lang="scss" >
.person-item {
  padding: 0 20px;

  .top-tab {
    width: 100%;
    margin: 0 auto;

    .top-tab-center {
      font-size: 20px;
      margin-right: 20px;
      float: left;

      .el-button {
        // font-size: 20px;
        color: #ffffff;
      }

      .el-button-big {
        font-size: 20px;
        color: #ffffff;
      }
    }

    .top-exit {
      padding-top: 15px;

      .el-button {
        padding: 0;
        color: #414040;
      }
    }
  }

  .line {
    height: 2px;
    margin: 5px 0 15px;
    background-color: rgb(255, 255, 255, 0.8);
  }

  .presonal-data {
    .personal-item {
      .left-title {
        line-height: 40px;
      }

      .el-input {
        float: left;
      }

      .el-input__inner {
        background-color: rgba(73, 73, 73, 0.05);
        color: #e1e5ec;
        border: none;
      }

      .right-but {
        margin-left: 10px;

        .el-button--text {
          padding: 0;
          line-height: 40px;
          color: #414040;
        }
      }
    }

    .other-line {
      height: 1px;
      margin: 10px 0;
      background-color: rgba(73, 73, 73, 0.2);
    }
  }
}
</style>>
