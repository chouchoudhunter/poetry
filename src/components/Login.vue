<template>
  <div id="login">
    <el-tabs>
      <el-tab-pane label="登录">
        <div>
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
              prop="name1"
            >
              <el-input
                size="small"
                type="text"
                v-model="ruleForm.name1"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item
              label="密码"
              prop="pass1"
            >
              <el-input
                size="small"
                type="password"
                v-model="ruleForm.pass1"
                autocomplete="off"
              ></el-input>
            </el-form-item>
          </el-form>
        </div>
        <div class="ebutton">
          <el-button
            type="primary"
            @click="submitForm('ruleForm')"
          >登录</el-button>
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
      </el-tab-pane>
    </el-tabs>
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
      ruleForm: {
        name1: '',
        pass1: '',
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
</style>
