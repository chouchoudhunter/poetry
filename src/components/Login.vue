<template>
  <div id="login">
    <el-tabs>
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
            <el-form-item label="用户名" prop="user">
              <el-input
                v-model="ruleForm.name1"
                size="small"
                type="text"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item label="密码" prop="pass1">
              <el-input
                v-model="ruleForm.pass1"
                size="small"
                type="password"
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
          hide-required-asterisk="false"
        >
          <el-form-item label="邮箱" prop="email">
            <el-input
              v-model="ruleForm.email"
              size="small"
              type="text"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
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
    return {
      ruleForm: {
        user: '',
        pass1: '',
        email: '',
        pass: '',
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
#login {
  padding: 5%;
}
</style>
