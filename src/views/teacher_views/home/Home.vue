<template>
  <div class="home">
    <el-container>
        <el-aside>
          <div class="logo-box">
            <a>师带徒管理系统</a>
            <a>--教师端</a>
          </div>
          <NavMenu />
        </el-aside>
      <el-container>
          <el-header>
            <div class="avatar-box">
              <UserAvatar />
            </div>
          </el-header>
          <el-main>
              <router-view />
          </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavMenu from './child/NavMenu'

  export default {
    name: 'Home',
    components: {NavMenu}
  }
</script>

<style lang="scss" scoped>
  $header-height:60px;

  .el-header{
    position: relative;
    height: 72px !important;
    background: #FFFFFF;
    // box-shadow: 0px 3px 10px 0px rgba(0, 0, 0, 0.1);
    .avatar-box {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .el-aside {
    text-align: center;
    height: 100vh;
    width: 259px !important;
    //background: #00B486;
    background: #1A4888;
    .logo-box {
      display: grid;
      place-items: center;
      height: 100px;
      width: 100%;
      font-size: 26px;
      font-family: Microsoft YaHei;
      font-weight: bold;
      color: #FFFFFF;
      margin-top: 40px;
    }
  }

  .el-main {
    height: calc(100vh - 72px);
    background: #FAF9F7;
    text-align: center;
  }

  body>.el-container {
    margin-bottom: 40px;
  }
</style>
