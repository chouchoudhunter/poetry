<template>
  <div class="header">
    <el-row :gutter="24">
      <el-col :span="8" class="animate__animated animate__fadeInLeft">
        <i class="el-icon-search"></i>
      </el-col>
      <el-col :span="8" class="header-center animate__animated animate__fadeInDown">
        LOGO
      </el-col>
      <el-col :span="8" class="header-right animate__animated animate__fadeInRight">
        <div id="login-img">
          <div><i class="el-icon-user"></i></div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default { name: 'Header' }
</script>
<style lang="scss">
.header{
  i{
      font-size: 24px;
    }
    .header-center{
      text-align: center;
    }
    .header-right{
      text-align: right;
    }
}
</style>
