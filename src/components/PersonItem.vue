<template>

  <div class="person-item">
    <div class="close"><i class="el-icon-s-promotion"></i><el-button type="text" size="mini" @click="close()">退出登陆</el-button></div>
    <div class="person">
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
              <table cellspacing="" width="400">
                <tr>
                  <td><span>头像</span></td>
                  <td>
                    <el-image
                      style="width: 50px; height: 50px;"
                      :src="url"
                      :preview-src-list="srcList">
                    </el-image> <el-popover
                      placement="top-start"
                      title="标题"
                      width="200"
                      trigger="hover"
                      content="这是一段内容,这是一段内容,这是一段内容,这是一段内容。">
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
                        :file-list="fileList">
                        <el-button size="small" type="primary">点击上传</el-button>
                        <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                      </el-upload>
                    </div>
                  </td><td></td></tr>
              </table>
              <el-divider></el-divider>
              <table cellspacing="" width="400">
                <tr><td><span>昵称</span></td>
                  <td><div class="person-name"><el-input
                    v-model="input"
                    placeholder="input"
                    :disabled="true">
                  </el-input></div></td>
                  <td><el-button type="text" icon="el-icon-edit" @click="open()">修改</el-button></td></tr>
              </table>
              <el-divider></el-divider>
              <table cellspacing="" width="400"><tr><td><span>邮箱</span></td>
                <td><div class="person-email"><el-input
                  v-model="email"
                  placeholder="input"
                  :disabled="true">
                </el-input></div></td>
                <td><el-button type="text" icon="el-icon-edit" @click="open()">修改</el-button></td></tr>
              </table>
            </div>
          </el-tab-pane>
        </el-tabs></div>
    </div>
  </div>
</template>

<script>
import PoemItem from './PoemItem'
export default {
  name: 'PersonItem',
  components: { PoemItem },
  data() {
    return {
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
  methods: {
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
    open() {
      this.$confirm('是否保存修改？', '确认信息', {
        distinguishCancelAndClose: true,
        confirmButtonText: '保存',
        cancelButtonText: '放弃修改',
      })
        .then(() => {
          this.$message({
            type: 'info',
            message: '保存修改',
          })
        })
        .catch(action => {
          this.$message({
            type: 'info',
            message: action === 'cancel'
              ? '放弃保存并离开页面'
              : '停留在当前页面',
          })
        })
    },
  },
}
</script>

<style scoped lang="scss" >
.person-item {
  .person {
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
</style>>
