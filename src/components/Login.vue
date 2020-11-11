<template>
  <div id="login">
    <div class="login-regist">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
      >
        <el-menu-item index="1">登录</el-menu-item>
        <el-menu-item index="2">注册</el-menu-item>
      </el-menu>
    </div>
    <div
      v-if="isShow1"
      class="login-content"
    >
      <el-form
        :model="ruleForm"
        status-icon
        :rules="rules"
        ref="ruleForm"
        label-width="55px"
        class="demo-ruleForm"
      >
        <el-form-item
          label="用户名"
          prop="name"
        >
          <el-input
            size="small"
            type="text"
            v-model="ruleForm.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="pass"
        >
          <el-input
            size="small"
            type="password"
            show-password
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="ebutton">
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
        >登录</el-button>
      </div>
    </div>
    <div
      v-if="isShow2"
      class="login-content"
    >
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
          prop="name"
        >
          <el-input
            size="small"
            type="text"
            maxlength="16"
            v-model="ruleForm.name"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="邮箱"
          prop="email"
        >
          <el-input
            size="small"
            type="text"
            v-model="ruleForm.email"
            autocomplete="off"
          ></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="pass"
        >
          <el-input
            size="small"
            type="password"
            show-password
            v-model="ruleForm.pass"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="ebutton">
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
        >注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    var validateName = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入用户名'))
      } else {
        if (!/^[a-zA-Z0-9_\u4e00-\u9fa5]+$/.test(value)) {
          callback(new Error('用户名由数字、字母、下划线组成，最长16位'))
        } else {
          callback()
        }
      }
    }
    var validateEmail = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入邮箱'))
      } else {
        if (!/^[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*@[a-zA-Z0-9]+([-_.][a-zA-Z0-9]+)*\.[a-z]{2,}$/.test(value)) {
          callback(new Error('邮箱格式错误'))
        } else {
          callback()
        }
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (!/^(\w){8,16}$/.test(value)) {
          callback(new Error('密码长度在8~16之间，只能包含字母、数字和下划线'))
        }
        callback()
      }
    }
    return {
      activeIndex: '1',
      labelPosition: 'left',
      isShow1: true,
      isShow2: false,
      ruleForm: {
        name: '',
        email: '',
        pass: '',
      },
      rules: {
        name: [
          {
            validator: validateName,
            trigger: 'blur',
          },
        ],
        email: [
          {
            validator: validateEmail,
            trigger: 'blur',
          },
        ],
        pass: [
          {
            validator: validatePass,
            trigger: 'blur',
          },
        ],
      },
    }
  },
  methods: {
    handleSelect(key) {
      // console.log(key)
      switch (key) {
        case '1':
          this.isShow1 = true
          this.isShow2 = false
          break
        case '2':
          this.isShow1 = false
          this.isShow2 = true
          break
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          // console.log('error submit!!')
          return false
        }
      })
    },
  },
}
</script>

<style lang="scss">
#login {
  padding: 0 5% 5%;
  .login-regist {
    width: 40%;
    margin: 0 auto;
    .el-menu-demo {
      width: 100%;
      margin: 0 auto;
      border: none;
      .el-menu-item {
        width: 50%;
        margin: 0 auto;
        padding: 0;
        text-align: center;
      }
    }
  }
  .login-content {
    .demo-ruleForm {
      margin: 20px auto;
      .el-form-item {
        width: 95%;
        margin: 10px auto;
      }
    }
    .ebutton {
      width: 30%;
      margin: 0 auto;
      .el-button {
        width: 100%;
      }
    }
  }
}
</style>
