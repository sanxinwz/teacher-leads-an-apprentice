<template>
    <div class="aside_content">
        <el-menu class="el-menu-vertical-demo"
            active-text-color="#00B486"
            text-color=“#FFFFFF”
            :default-active="activePath"
            unique-opened
            router
        >
            <el-submenu :index="item.id" v-for="item in menuList" :key="item.id">
                <template slot="title">
                    <i :class="item.iconFont" style="color:#FFFFFF"></i>
                    <span>{{item.authName}}</span>
                </template>
                <el-menu-item style="color: #1A4888;font-family: 微软雅黑;font-weight: 500;" :index="`/${subItem.path}`" v-for="subItem in item.children" :key="subItem.id"
                    @click="saveNavState(`/${subItem.path}`)">
                    <template slot="title">
                        <span >{{subItem.authName}}</span>
                    </template>
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                menuList: [],
                activePath: '',
                isCollapse: true,
            };
        },
        created() {
          this.renderMenuList()
            this.activePath = window.sessionStorage.getItem('activePath')
        },
        methods: {
            handleOpen(key, keyPath) {
                console.log(key, keyPath);
            },
            handleClose(key, keyPath) {
                console.log(key, keyPath);
            },
            saveNavState(activePath) {
              window.sessionStorage.setItem('activePath', activePath)
            },
            renderMenuList() {
                /* 加载menu列表 */
                this.menuList =
                    this.$store.state.NavMenu.teacherMenuList;
              console.log(this.menuList);
              console.log(this.activePath);
            },
        }
    }
</script>
<style lang="scss" scoped>
    .el-menu {
        background: transparent;
        border-right: 0px;
    }
    .el-submenu {
        position: relative;
        text-align: left;
        &:hover {
            &::before {
                content: "";
                background: #FFFFFF;
                width: 2px;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 10;
            }
        }
        ::v-deep .el-submenu__title {
            color:#FFFFFF;
            &:hover {
                background: linear-gradient(333deg, rgba(255, 252, 237, 0.1) 0%, #FFECD6 100%, #FFDAC8 100%);
                box-shadow: 2px 0px 0px 0px #FFFFFF;
                opacity: 0.5;
            }
        }
         ::v-deep .el-menu-item {
             font-size: 16px;
             &:hover {
                 background: #FFFFFF;
             }
         }
         ::v-deep .el-submenu__title {
            font-size: 18px;
            font-family: Microsoft YaHei;
            font-weight: 400;
            color: #FFFFFF;
        }
        ::v-deep .el-submenu__title i {
            color: #FFFFFF;
        }
    }

</style>