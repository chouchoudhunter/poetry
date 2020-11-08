<template>
  <div id="login">
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item index="1">登录</el-menu-item>
      <el-menu-item index="2">注册</el-menu-item>
    </el-menu>
    <el-form
      v-if="isShow1"
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item
        label="手机号"
        prop="phone"
      >
        <el-input
          class="el-input"
          type="text"
          v-model="ruleForm.phone"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        prop="pass"
      >
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
        >提交</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
    <el-form
      v-if="isShow2"
      ref="ruleForm"
      :model="ruleForm"
      status-icon
      :rules="rules"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item
        label="手机号"
        prop="phone"
      >
        <el-input
          type="text"
          v-model="ruleForm.phone"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="密码"
        prop="pass"
      >
        <el-input
          type="password"
          v-model="ruleForm.pass"
          autocomplete="off"
        ></el-input>
      </el-form-item>
      <el-form-item
        label="确认密码"
        prop="checkPass"
      >
        <el-input
          type="password"
          v-model="ruleForm.checkPass"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          @click="submitForm('ruleForm')"
        >注册</el-button>
        <el-button @click="resetForm('ruleForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    var validatePhone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机号'))
      } else {
        if (!/^1[3456789]\d{9}$/.test(value)) {
          callback(new Error('请输入正确的手机号'))
        } else {
          callback()
        }
      }
    }
    var validatePass = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入密码'))
      } else {
        if (this.ruleForm.checkPass !== '') {
          this.$refs.ruleForm.validateField('checkPass')
        }
        if (!/^(\w){8,16}$/.test(value)) {
          callback(new Error('密码长度在8~16之间，只能包含字母、数字和下划线'))
        }
        callback()
      }
    }
    var validatePass2 = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请再次输入密码'))
      } else if (value !== this.ruleForm.pass) {
        callback(new Error('两次输入密码不一致!'))
      } else {
        callback()
      }
    }
    return {
      activeIndex: '1',
      isShow1: true,
      isShow2: false,
      ruleForm: {
        phone: '',
        pass: '',
        checkPass: '',
      },
      rules: {
        phone: [
          {
            validator: validatePhone,
            trigger: 'blur',
          },
        ],
        pass: [
          {
            validator: validatePass,
            trigger: 'blur',
          },
        ],
        checkPass: [
          {
            validator: validatePass2,
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
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
  },
}
</script>

<style lang="scss">
.demo-ruleForm{
  .el-input{
    width: 80%;
  }
}
</style>
