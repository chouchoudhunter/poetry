<template>
  <div class="person-item">
    <div class="content">
      <div v-if="isLike" class="left">
        <el-avatar :size="70" :src="userInfo.photo?userInfo.photo:defaultUserIcon"></el-avatar>
        <div class="user-aliase">
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
            :rules="rules">
            <el-form-item label="账号">
              <el-input v-model="userInfo.username" class="custom-input" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input id="password" v-model="changePassword.old" type="password" :disabled="inputDisable.password">
                <i
                  slot="suffix"
                  class="el-input__icon"
                  :class="inputDisable.password?'el-icon-edit-outline':'el-icon-success'"
                  @click="editInfo('password',$event)"></i>
              </el-input>
            </el-form-item>
          </el-form>
        </div>
      </div>
      <div v-else class="right">
        <div class="">
          <poemItem></poemItem>
        </div>
      </div>
    </div>
    <!-- 底部切换 -->
    <div class="tabs">
      <div class="left" :span="12">
        <div
          class="tabs-btn"
          :class="{'tabs-btn-active':!isLike}"
          @click="isLike=false">
          <img src="../assets/icon/myLike.svg">
          <span>我的喜欢</span>
        </div>
      </div>
      <div class="right" :span="12">
        <div
          class="tabs-btn"
          :class="{'tabs-btn-active':isLike}"
          @click="isLike=true">
          <img src="../assets/icon/myInfo.svg">
          <span>个人资料</span>
        </div>
      </div>
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
      isLike: true,
      defaultUserIcon: require('@/assets/icon/userIcon.svg'),
      userInfo: {},
      inputDisable: {
        aliase: true,
        password: true,
      },
      changePassword: {
        new: '******',
        old: '******',
      },
      rules: {
        password: [
          {
            required: true,
            message: '请输入密码',
            trigger: ['blur', 'change'],
          },
          {
            type: 'string',
            pattern: /^(\w){8,16}$/,
            message: '密码长度在8~16之间，只能包含字母、数字和下划线',
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
    getUserInfo() {
      const userInfo = JSON.parse(localStorage.getItem('userInfo'))
      return userInfo
    },
  },
  mounted() {
    this.userInfo = this.getUserInfo
  },
  methods: {
    editInfo(id, e) {
      if (id === 'password') {
        this.inputDisable.password = false
      } else if (id === 'aliase') {
        if (this.inputDisable.aliase) {
          this.inputDisable.aliase = false
        } else {
          // 修改昵称
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

        .el-input__suffix-inner {
          color: white;
        }

        .el-form-item__label {
          color: white;
        }

        .is-disabled {
          .el-input__inner {
            background-color: rgba(0, 0, 0, 0);
            border: none;
          }
        }

        .el-input__inner {
          background-color: rgba(0, 0, 0, 0.3);
          border: none;
          width: 50px;
          padding: 0;
          color: white;
          padding-left: 5px;
        }

        span {
          margin-right: 10px;
        }
      }

      .user-info {
        margin-top: 20px;

        .el-input__suffix-inner {
          color: white;
        }

        .el-form-item__label {
          color: white;
        }

        .is-disabled {
          .el-input__inner {
            background-color: rgba(0, 0, 0, 0.2);
            border: none;
          }
        }

        .el-input__inner {
          background-color: rgba(0, 0, 0, 0.3);
          border: none;
          color: white;
        }
      }
    }
  }

  .tabs {
    // position: absolute;
    // bottom: 20px;
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
