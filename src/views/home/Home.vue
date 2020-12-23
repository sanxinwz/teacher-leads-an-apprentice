<template>
  <div class="home">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <el-aside width="200px">
          <nav-menu/>  <!-- Left Navmenu -->
        </el-aside>
        <el-container>
          <el-main>
            <router-view/> <!--  main router -->
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
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

  .el-header,
  .el-footer {
    background-color: #B3C0D1;
    text-align: center;
    line-height: $header-height;
  }

  .el-aside {
    background-color: #D3DCE6;
    text-align: center;
    height: calc(100vh - #{$header-height});
  }

  .el-main {
    background-color: #E9EEF3;
    text-align: center;
    line-height: 160px;
  }

  body>.el-container {
    margin-bottom: 40px;
  }
</style>