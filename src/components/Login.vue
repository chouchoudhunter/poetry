<template>
  <div id="login">
    <el-tabs v-if="isShow">
      <el-tab-pane label="登录">
        <div>
          <el-form
            ref="ruleForm"
            :model="ruleForm"
            status-icon
            :rules="rules"
            label-width="55px"
            class="demo-ruleForm"
          >
            <el-form-item
              label="用户名"
              prop="user"
            >
              <el-input
                v-model="ruleForm.name1"
                size="small"
                type="text"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="密码"
              prop="pass1"
            >
              <el-input
                v-model="ruleForm.pass1"
                size="small"
                type="password"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="bottom">
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
          >登录</el-button>
          <el-link
            target="_blank"
            @click="showFind()"
          >忘记密码</el-link>
        </div>
      </el-tab-pane>
      <el-tab-pane label="注册">
        <el-form
          ref="ruleForm"
          :model="ruleForm"
          status-icon
          :rules="rules"
          label-width="55px"
          class="demo-ruleForm"
          :hide-required-asterisk="true"
        >
          <el-form-item
            label="邮箱"
            prop="email"
          >
            <el-input
              v-model="ruleForm.email"
              size="small"
              type="text"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item
            label="密码"
            prop="pass"
          >
            <el-input
              v-model="ruleForm.pass"
              size="small"
              type="password"
              autocomplete="off"
            ></el-input>
          </el-form-item>
        </el-form>
        <div class="bottom">
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
          >注册</el-button>
        </div>
      </el-tab-pane>
    </el-tabs>
    <div v-if="!isShow">
      <div class="head">
        <i
          class="el-icon-arrow-left"
          @click="!showFind()"
        ></i>
        <div class="head-center">找回密码</div>
      </div>
      <el-form
        ref="ruleForm"
        :model="ruleForm"
        status-icon
        :rules="rules"
        label-width="55px"
        class="demo-ruleForm"
        :hide-required-asterisk="true"
      >
        <el-form-item
          label="邮箱"
          prop="email"
        >
          <el-input
            v-model="ruleForm.email"
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
            v-model="ruleForm.code"
            oninput="value=value.replace(/[^\d]/g,'')"
            maxlength="6"
          ></el-input>
          <el-button>
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
          prop="pass"
        >
          <el-input
            v-model="ruleForm.pass"
            size="small"
            type="password"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="ebutton">
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
        >提交</el-button>
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
      ruleForm: {
        user: '',
        pass1: '',
        email: '',
        pass: '',
        code: '',
      },
      rules: {
        email: [
          {
            required: true,
            message: '请输入邮箱地址',
            trigger: 'blur',
          },
          {
            type: 'email',
            message: '请输入正确的邮箱地址',
            trigger: 'blur',
          },
        ],
        pass: [
          {
            required: true,
            message: '请输入密码',
            trigger: 'blur',
          },
          {
            type: 'string',
            pattern: /^(\w){8,16}$/,
            message: '密码长度在8~16之间，只能包含字母、数字和下划线',
            trigger: 'blur',
          },
        ],
        code: [
          {
            required: true,
            message: '请输入验证码',
            trigger: 'blur',
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
          alert('submit!')
        } else {
          alert('error submit!!')
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
  padding: 5%;

  .el-tabs {
    // margin: 0 auto;
    // background: azure;
    .el-tabs__nav-wrap::after {
      height: 0;
    }

    .el-tabs__nav-scroll {
      width: 100%;
      background: bisque;

      .el-tabs__item {
        width: 100px;
        background: aquamarine;
        padding: 0;
        text-align: center;
      }
    }

    .el-tab-pane {
      width: 90%;
      margin: 0 auto;

      .bottom {
        width: 100%;
        margin: 0 auto;
        text-align: center;

        .el-button {
          margin-right: 20px;
        }
      }
    }
  }
}
</style>
