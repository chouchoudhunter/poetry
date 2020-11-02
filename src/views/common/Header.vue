<template>
  <div class="header">
    <el-row :gutter="24">
      <el-col :span="8" class="animate__animated animate__fadeInLeft">
        <SearchBox></SearchBox>
      </el-col>
      <el-col :span="8" class="header-center animate__animated animate__fadeInDown">
        LOGO
      </el-col>
      <el-col :span="8" class="header-right animate__animated animate__fadeInRight">
        <div id="login-img" @click="openLoginWindow()">
          <div><i class="el-icon-user"></i></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import SearchBox from '@/components/SearchBox'
export default {
  name: 'Header',
  components: { SearchBox },
  data() {
    return {}
  },
  methods: {
    openLoginWindow() {
      this.$alert('xxx', '登陆', { dangerouslyUseHTMLString: true })
    },
  },
}
</script>
<style lang="scss">
.header{
  i{
      font-size: 20px;
  }
  .header-center{
    text-align: center;
  }
  .header-right{
    text-align: right;
  }
}
</style>
