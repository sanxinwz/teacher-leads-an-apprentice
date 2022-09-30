<template>
  <el-dropdown @command="handlerCommand">
    <span class="el-dropdown-link">
      <div class="avatar-container">
        <div>admin
          <i class="el-icon-arrow-down"></i>
        </div>
        <el-avatar class="acatar" src="https://iconfont.alicdn.com/t/8c8b71ba-e558-4f37-9ae0-0444c92e0797.png"></el-avatar>
      </div>
    </span>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item icon="el-icon-user">管理员</el-dropdown-item>
      <el-dropdown-item icon="el-icon-switch-button" command = 'signout'>退出登录</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>
<script>
export default {
  methods: {
    handlerCommand(command) {
      switch (command) {
        case 'signout':
          window.sessionStorage.clear()
          this.$router.replace('/login')
          break
      }
    },
  },
}
</script>
<style lang="scss" scoped>
  .avatar-container {
    display: grid;
    grid-template-columns:repeat(2,1fr);
    grid-template-rows: 1fr ;
    place-items: center;
    grid-column-gap: 12px;
    .user-info {
      text-align: center;
    }
  }
</style>