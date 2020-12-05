<template>
  <div id="login">
    <el-tabs
      v-if="isShow"
      v-model="activeName"
      :stretch="true"
    >
      <el-tab-pane label="登录" name="login">
        <el-form
          ref="loginForm"
          v-loading="loginLoad"
          :model="loginForm"
          :status-icon="true"
          :rules="rules"
          label-position="left"
          label-width="55px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名">
            <el-input
              v-model="loginForm.username"
              size="small"
              type="text"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input
              v-model="loginForm.password"
              size="small"
              type="password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-form>
        <div class="bottom">
          <el-button
            type="primary"
            @click="login()"
          >登录</el-button>

          <!-- <el-link
            target="_blank"
            @click="showFind()"
          >忘记密码</el-link> -->
        </div>
      </el-tab-pane>
      <el-tab-pane label="注册" name="register">
        <el-form
          ref="regForm"
          v-loading="registerLoad"
          :model="regForm"
          :status-icon="true"
          :rules="rules"
          class="demo-ruleForm"
          label-position="left"
          label-width="55px"
          :hide-required-asterisk="true"
        >
          <el-form-item
            label="邮箱"
            prop="username"
          >
            <el-input
              v-model="regForm.username"
              size="small"
              type="text"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="密码"
            prop="password"
          >
            <el-input
              v-model="regForm.password"
              size="small"
              type="password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-form>
        <div class="bottom">
          <el-button
            type="primary"
            @click="register('regForm')"
          >注册</el-button>
        </div>
      </el-tab-pane>
    </el-tabs>
    <div
      v-if="!isShow"
      class="find"
    >
      <el-row>
        <el-col :span="8">
          <i class="el-icon-arrow-left" @click="!showFind()"></i>
        </el-col>
        <el-col :span="8">
          <div class="head-center">找回密码</div>
        </el-col>
      </el-row>
      <el-form
        ref="forgotForm"
        :model="forgotForm"
        :status-icon="true"
        :rules="rules"
        label-position="left"
        label-width="55px"
        class="demo-ruleForm"
        :hide-required-asterisk="true"
      >
        <el-form-item
          label="邮箱"
          prop="username"
        >
          <el-input
            v-model="forgotForm.username"
            size="small"
            type="text"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="验证码"
          prop="code"
        >
          <el-input
            v-model="forgotForm.code"
            class="code-input"
            size="small"
            oninput="value=value.replace(/[^\d]/g,'')"
            maxlength="6"
          ></el-input>
          <el-button
            class="code-button"
            type="primary"
            size="small"
          >
            <span
              v-show="show"
              @click="getCode"
            >发送验证码</span>
            <span
              v-show="!show"
              class="count"
            >{{ count }} s</span>
          </el-button>
        </el-form-item>
        <el-form-item
          label="新密码"
          prop="password"
        >
          <el-input
            v-model="forgotForm.password"
            size="small"
            type="password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="bottom">
        <el-button
          type="primary"
          @click="submitForm('forgotForm')"
        >提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line no-unused-vars
import { login, loginLoading, register, registerLoading } from '@/api/user.js'
import { mapGetters } from 'vuex'
import { setToken } from '@/utils/auth'
export default {
  name: 'Login',
  data() {
    return {
      activeName: 'login',
      isShow: true,
      show: true, // 倒计时按钮禁用状态
      count: '',
      timer: null,
      loginForm: {
        username: 'diyyouxi',
        password: '963028938',
      },
      regForm: {
        username: '',
        password: '',
      },
      forgotForm: {
        username: '',
        code: '',
        password: '',
      },
      rules: {
        username: [
          {
            required: true,
            message: '请输入邮箱地址',
            trigger: ['blur', 'change'],
          },
          {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: ['blur', 'change'],
          },
        ],
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
    ...mapGetters('requestStatus', ['links']),
    loginLoad() {
      return !!this.links[loginLoading]
    },
    registerLoad() {
      return !!this.links[registerLoading]
    },
  },
  methods: {
    showFind() {
      this.isShow = !this.isShow
    },
    register(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          register(this.regForm).then(res => {
            this.$message({
              message: '注册成功，请登录',
              type: 'success',
            })
            this.loginForm.username = this.regForm.username
            this.loginForm.password = this.regForm.password
            this.activeName = 'login'
          })
        } else {
          this.$message({
            message: '请检查输入是否正确！',
            type: 'error',
          })
          return false
        }
      })
    },
    login() {
      login(this.loginForm).then(res => {
        const { token, ...userInfo } = res.data
        localStorage.setItem('userInfo', JSON.stringify(userInfo))
        setToken(token)
        this.$emit('login-in')
      })
    },
    getCode() {
      const TIME_COUNT = 60
      if (!this.timer) {
        this.count = TIME_COUNT
        this.show = false
        this.timer = setInterval(() => {
          if (this.count > 0 && this.count <= TIME_COUNT) {
            this.count--
          } else {
            this.show = true
            clearInterval(this.timer)
            this.timer = null
          }
        }, 1000)
      }
    },
  },
}
</script>

<style lang="scss">
#login {
  padding: 5px 5px 10px;
  color: white;

  .el-button--primary {
    background-color: rgba(0, 0, 0, 0.2);
    border: none;
    color: white;
  }

  .el-tabs__nav-scroll {
    width: 50%;
    margin: 0 auto;
  }

  .el-tabs__nav-wrap::after {
    height: 0;
  }

  .el-tabs__active-bar {
    background: white;
  }

  .bottom {
    width: 40%;
    margin: 0 auto;
    text-align: center;

    .el-button {
      width: 100%;
      height: 40px;
      margin-bottom: 5px;
    }

    .el-link {
      color: rgb(45, 45, 45);
    }
  }

  .find {
    .el-row {
      height: 20px;
      margin: 10px;

      .head-center {
        text-align: center;
      }
    }

    .code-input {
      width: 70%;
    }

    .code-button {
      width: 29%;
      height: 31px;
      padding-left: 0;
      padding-right: 0;
      margin-left: 1%;
    }
  }

  .el-form {
    width: 90%;
    margin: 0 auto;
  }
}
</style>
