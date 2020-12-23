<template>
    <div class="aside_content">
        <el-menu :default-active="activePath" class="el-menu-vertical-demo" 
            active-text-color=" #408EFF" router unique-opened>
            <el-submenu :index="item.id" v-for="item in menuList" :key="item.id">
                <template slot="title">
                    <i :class="item.iconFont"></i>
                    <span>{{item.authName}}</span>
                </template>
                <el-menu-item :index="'/' + subItem.path" v-for="subItem in item.children" :key="subItem.id"
                    @click="saveNavState('/' + subItem.path)">
                    <template slot="title">
                        <i :class="subItem.iconFont"></i>
                        <span>{{subItem.authName}}</span>
                    </template>
                </el-menu-item>
            </el-submenu>
        </el-menu>
    </div>
</template>

<script>
    export default {
        // background-color="#222324" text-color="#fff"
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
                    this.$store.state.NavMenu.menuList
            },
        }
    }
</script>
<style lang="scss" scoped>
    .el-submenu {
        position: relative;
        text-align: left;
        &:hover {
            &::before {
                content: "";
                background: #408EFF;
                width: 5px;
                height: 100%;
                position: absolute;
                top: 0;
                left: 0;
                z-index: 10;
            }

        }
    }

</style>