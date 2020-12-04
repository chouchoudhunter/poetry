<template>
  <div class="person-item">
    <div class="content">
      <div v-if="isNotLike" class="left">
        <el-avatar :size="70" :src="userInfo.photo?userInfo.photo:defaultUserIcon"></el-avatar>
        <div v-loading="editAliaseLoad" class="user-aliase">
          <el-input id="aliase" v-model="userInfo.aliase" size="mini" :disabled="inputDisable.aliase">
          </el-input>
          <i
            slot="suffix"
            class="el-input__icon"
            :class="inputDisable.aliase?'el-icon-edit-outline':'el-icon-success'"
            @click="editInfo('aliase',$event)"></i>
        </div>
        <div class="user-info">
          <el-form
            label-width="50px"
            size="mini"
            label-position="left"
            :model="changePassword"
            :rules="rules"
            :hide-required-asterisk="true">
            <el-form-item label="账号">
              <el-input v-model="userInfo.username" class="custom-input" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="old">
              <el-input id="password" v-model="changePassword.old" type="password" :disabled="inputDisable.password">
                <i
                  slot="suffix"
                  class="el-input__icon"
                  :class="inputDisable.password?'el-icon-edit-outline':'el-icon-success'"
                  @click="editInfo('password',$event)"></i>
              </el-input>
            </el-form-item>
            <el-form-item
              v-if="!inputDisable.password"
              label="新密"
              prop="new">
              <el-input id="password" v-model="changePassword.new" type="password">
              </el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div v-else class="right">
        <div v-if="!likePoemList[0]" v-loading="myLikePoemsLoad" class="tips">还没有喜欢的诗词，快去点亮小心心吧</div>
        <div class="peom-list">
          <el-row v-if="likePoemList[0]" v-infinite-scroll="likePoemScrollLoad" v-loading="myLikePoemsLoad" infinite-scroll-immediate="false">
            <el-col v-for="item in likePoemList" :key="item.id" :xs="24" :span="12">
              <poem-item :id="item.id" :content="item.content" :title="item.title" :author="item.author" @click="goPoemDesc()"></poem-item>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
    <!-- 底部切换 -->
    <div class="tabs">
      <div class="left" :span="12">
        <div
          class="tabs-btn"
          :class="{'tabs-btn-active':!isNotLike}"
          @click="isNotLike=false">
          <img src="../assets/icon/myLike.svg">
          <span style="cursor: default;">我的喜欢</span>
        </div>
      </div>
      <div class="right" :span="12">
        <div
          class="tabs-btn"
          :class="{'tabs-btn-active':isNotLike}"
          @click="isNotLike=true">
          <img src="../assets/icon/myInfo.svg">
          <span style="cursor: default;">个人资料</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PoemItem from './PoemItem'
import { mapGetters } from 'vuex'
import {
  editAliase,
  editAliaseLoading,
  editPassword,
  editPasswordLoading,
} from '../api/user'
import { myLikePoems, myLikePoemsLoading } from '../api/poem'
export default {
  name: 'PersonItem',
  components: { PoemItem },
  data() {
    return {
      likePage: 1,
      isNotLike: true, // 是否是我的喜欢页面
      defaultUserIcon: require('@/assets/icon/userIcon.svg'), // 默认用户头像
      likePoemList: [], // 我喜欢的诗句的列表
      throttle: false, // 节流
      userInfo: {
        aliase: '',
        photo: '',
      }, // 用户信息
      inputDisable: {
        aliase: true,
        password: true,
      }, // 输入框禁用状态
      changePassword: {
        new: '',
        old: '******',
      },
      rules: {
        new: [
          {
            required: true,
            message: '请输入新密码',
            trigger: ['blur', 'change'],
          },
          {
            type: 'string',
            pattern: /^(\w){8,16}$/,
            message: '密码长度在8~16之间，只能包含字母、数字和下划线',
            trigger: ['blur', 'change'],
          },
        ],
        old: [
          {
            required: true,
            message: '请输入旧密码',
            trigger: ['blur', 'change'],
          },
        ],
        code: [
          {
            required: true,
            message: '请输入验证码',
            trigger: ['blur', 'change'],
          },
        ],
      },
    }
  },
  computed: {
    ...mapGetters('requestStatus', ['links']),
    editAliaseLoad() {
      return !!this.links[editAliaseLoading]
    },
    editPasswordLoad() {
      return !!this.links[editPasswordLoading]
    },
    getUserInfo() {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'))
      return userInfo
    },
    myLikePoemsLoad() {
      return !!this.links[myLikePoemsLoading]
    },
  },
  watch: {
    isNotLike: function(val) {
      if (!val) {
        this.getLikePoemList()
      }
    },
  },
  mounted() {
    this.userInfo = this.getUserInfo
  },
  methods: {
    // 获取我的喜欢
    getLikePoemList(isScoll = false) {
      if (this.throttle || !this.likePage) {
        return
      }
      if (isScoll) {
        this.likePage++
      } else {
        this.likePage = 1
      }
      this.throttle = true
      myLikePoems({ page: this.likePage }).then(res => {
        if (res.data.length <= 19) {
          this.likePage = 0
        }
        if (isScoll) {
          res.data.forEach(element => {
            this.likePoemList.push(element)
          })
        } else {
          this.likePoemList = res.data
        }

        this.throttle = false
      })
    },
    likePoemScrollLoad() {
      this.getLikePoemList(true)
    },
    // 修改信息
    editInfo(id, e) {
      if (id === 'password') {
        if (this.inputDisable.password) {
          this.inputDisable.password = false
          this.changePassword.old = ''
        } else {
          editPassword({
            newPassword: this.changePassword.new,
            oldPassword: this.changePassword.old,
          }).then(res => {
            this.$message({
              message: res.message,
              type: 'success',
            })
            this.inputDisable.password = true
            this.changePassword.old = '******'
          })
        }
      } else if (id === 'aliase') {
        if (this.inputDisable.aliase) {
          this.inputDisable.aliase = false
        } else {
          editAliase({ aliase: this.userInfo.aliase }).then(res => {
            localStorage.setItem('userInfo', JSON.stringify(this.userInfo))
            this.$message({
              message: res.message,
              type: 'success',
            })
            this.inputDisable.aliase = true
          })
        }
      }
      setTimeout(function() {
        document.getElementById(id).focus()
      }, 200)
    },
  },
}
</script>

<style lang="scss">
.person-item {
  height: 100%;

  .content {
    height: 80%;
    overflow: auto;
    scrollbar-width: none; /* Firefox */
    -ms-overflow-style: none; /* IE 10+ */

    .left {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      .user-aliase {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin: 8px 0;

        .is-disabled {
          .el-input__inner {
            background-color: rgba(0, 0, 0, 0) !important;
            border: none;
            color: white !important;
          }
        }

        .el-input__inner {
          width: 50px;
          padding: 0;
          padding-left: 5px;
        }

        span {
          margin-right: 10px;
        }
      }

      .user-info {
        margin-top: 20px;
      }
    }

    .right {
      .peom-list {
        overflow-y: scroll;
        height: 100%;
        scrollbar-width: none; /* Firefox */
        -ms-overflow-style: none; /* IE 10+ */

        .el-row {
          padding-top: 10px;
        }
      }

      .peom-list::-webkit-scrollbar {
        display: none; /* Chrome Safari */
        -ms-overflow-style: none; /* IE 10+ */
      }
    }
  }

  .content::-webkit-scrollbar {
    display: none; /* Chrome Safari */
    -ms-overflow-style: none; /* IE 10+ */
  }

  .tabs {
    position: absolute;
    bottom: 20px;
    display: flex;
    align-items: center;
    width: 100%;

    .left,
    .right {
      flex-grow: 1;
      display: flex;
      flex-direction: row;
      justify-content: center;

      .tabs-btn {
        background-color: rgba(0, 0, 0, 0.2);
        padding: 5px 15px;
        border-radius: 20px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        border: rgba(180, 180, 180, 0.2) 2px solid;
        font-size: 16px;
        height: 25px;

        img {
          display: inline-block;
          width: 25px;
          margin-right: 10px;
          filter: grayscale(100%);
        }
      }

      .tabs-btn-active {
        transition: background-color 1s;
        background-color: rgb(255, 255, 255);
        color: black;

        img {
          filter: grayscale(0);
        }
      }
    }
  }
}
</style>>
