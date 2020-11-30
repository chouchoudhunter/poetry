<template>
  <div class="person-item">
    <div class="content">
      <div v-if="isLike" class="left">
        <el-avatar :size="70" :src="userInfo.photo?userInfo.photo:defaultUserIcon"></el-avatar>
        <div class="user-aliase"><span>{{ userInfo.aliase }}</span><i class="el-icon-edit-outline"></i></div>
        <div class="user-info">
          <el-form
            label-width="50px"
            size="mini"
            label-position="left"
            :rules="rules">
            <el-form-item label="账号">
              <el-input v-model="userInfo.username" class="custom-input" :disabled="true"></el-input>
            </el-form-item>
            <el-form-item label="昵称">
              <el-input v-model="userInfo.aliase" :disabled="true"><i slot="suffix" class="el-input__icon el-icon-edit-outline" @click="test()"></i></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="userInfo.username" :disabled="true"><i slot="suffix" class="el-input__icon el-icon-edit-outline" @click="test()"></i></el-input>

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
          :class="{'tabs-btn-active':isLike}"
          @click="isLike=true">
          <img src="../assets/icon/myLike.svg">
          <span>我的喜欢</span>
        </div>
      </div>
      <div class="right" :span="12">
        <div
          class="tabs-btn"
          :class="{'tabs-btn-active':!isLike}"
          @click="isLike=false,test()">
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
    test() {
      console.log(this.isLike)
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
