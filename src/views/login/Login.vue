<template>
  <section class="login_bg">
    <div class="login_title">
      <h1>欢迎畅享你的登录</h1>
    </div>
    <div class="loginPane">
      <img src="https://iconfont.alicdn.com/t/32895ba0-79e9-4bee-a214-061d1247d7e4.png" class="loginImg">
      <div class="loginInputBox">
        <el-input placeholder="用户名/邮箱" v-model="loginForm.name" class="mb-20">
          <i slot="prefix" class="el-input__icon el-icon-user"></i>
        </el-input>
        <el-input placeholder="用户密码" v-model="loginForm.pwd" class="mb-20" show-password>
          <i slot="prefix" class="el-input__icon el-icon-unlock"></i>
        </el-input>
        <b-radio-group >
          <b-radio class="mr-5" id="admin" value="管理员" v-model="loginForm.role">管理员</b-radio>
          <b-radio class="mr-5" id="teacher" value="师傅" v-model="loginForm.role">师傅</b-radio>
          <b-radio class="mr-5" id="student" value="学生" v-model="loginForm.role">学生</b-radio>
        </b-radio-group><br>
        <el-checkbox label="记住密码" v-model="loginForm.recode" name="type" class=""></el-checkbox>
        <div class="clear"></div>
        <el-button type="primary" @click="loginHandler" class="loginBtn mt-20">立即登录
        </el-button>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'login',
  data() {
    return {
      loginForm: {
        name: '',
        pwd: '',
        recode: '',
        role:''
      },
    }
  },
  methods: {
    loginHandler() {
      if (this.submitValidate()) {
        window.sessionStorage.setItem('token', 'BDCUYUYCBUVBUHBVUGJHBVEYUVV')
      /*  this.$router.replace('/home')*/
     /*   this.$router.replace('/teacher_views/home')*/
        if(this.$data.loginForm.role === '管理员'){
          this.$router.replace('/major')
        }else{
          this.$router.replace('/teacher_views/home')
        }
      }
    },
    submitValidate () {
      if (!this.loginForm.name) {
        this.$notify.warning({
          title: '提示',
          message: '请输入用户名',
          showClose: false,
        })
        return false
      }
      if (!this.loginForm.pwd) {
        this.$notify.warning({
          title: '提示',
          message: '请输入密码',
          showClose: false,
        })
        return false
      }
      if (!this.loginForm.role) {
        this.$notify.warning({
          title: '提示',
          message: '请选择身份',
          showClose: false,
        })
        return false
      }
      return true
    },
  },
}
</script>
<style lang="scss" scoped>
@import '~styles/default/login_view.scss';
</style>
