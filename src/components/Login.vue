<template>
  <div id="login">
    <el-tabs v-if="isShow" :stretch="true">
      <el-tab-pane label="登录">
        <div>
          <el-form
            ref="loginForm"
            :model="loginForm"
            :status-icon="true"
            :rules="rules"
            label-position="left"
            label-width="55px"
            class="demo-ruleForm"
          >
            <el-form-item label="用户名">
              <el-input v-model="loginForm.name" size="small" type="text" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="密码">
              <el-input v-model="loginForm.password" size="small" type="password" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="bottom">
          <el-button type="primary" @click="submitForm('loginForm')">登录</el-button>
          <el-link target="_blank" @click="showFind()">忘记密码</el-link>
        </div>
      </el-tab-pane>
      <el-tab-pane label="注册">
        <el-form
          ref="regForm"
          :model="regForm"
          :status-icon="true"
          :rules="rules"
          class="demo-ruleForm"
          label-position="left"
          label-width="55px"
          :hide-required-asterisk="true"
        >
          <el-form-item label="邮箱" prop="username">
            <el-input v-model="regForm.username" size="small" type="text" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input v-model="regForm.password" size="small" type="password" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div class="bottom">
          <el-button type="primary" @click="submitForm('regForm')">注册</el-button>
        </div>
      </el-tab-pane>
    </el-tabs>
    <div v-if="!isShow">
      <div class="head">
        <i class="el-icon-arrow-left" @click="!showFind()"></i>
        <div class="head-center">找回密码</div>
      </div>
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
        <el-form-item label="邮箱" prop="username">
          <el-input v-model="forgotForm.username" size="small" type="text" autocomplete="off" ></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code">
          <el-input v-model="forgotForm.code" oninput="value=value.replace(/[^\d]/g,'')" maxlength="6"></el-input>
          <el-button>
            <span v-show="show" @click="getCode">发送验证码</span>
            <span v-show="!show" class="count">{{ count }} s</span>
          </el-button>
        </el-form-item>
        <el-form-item label="新密码" prop="password">
          <el-input v-model="forgotForm.password" size="small" type="password" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div class="ebutton">
        <el-button type="primary" @click="submitForm('forgotForm')">提交</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      isShow: true,
      show: true,
      count: '',
      timer: null,
      loginForm: {
        username: '',
        password: '',
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
  methods: {
    showFind() {
      this.isShow = !this.isShow
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          return true
        } else {
          this.$message({
            message: '请检查输入是否正确！',
            type: 'error',
          })
          return false
        }
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
  padding-top: 5px;

  .el-tabs {
    .el-tab-pane {
      width: 90%;
      margin: 0 auto;

      .bottom {
        width: 100%;
        margin: 0 auto;
        text-align: center;
      }
    }
  }
}
</style>
