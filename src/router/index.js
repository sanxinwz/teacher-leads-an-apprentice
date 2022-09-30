import Vue from 'vue'
import VueRouter from 'vue-router'


const routerList = []

function importRoutes(routerArr) {
    /* 动态路由 */
    routerArr.keys().forEach(key => {
        routerList.push(routerArr(key).default)
    })
}
importRoutes(require.context('./route', true, /\.routes\.js/))
Vue.use(VueRouter)


const routes = [{
        path: '/',
        redirect: '/login  '
    },
    ...routerList
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

router.beforeEach((to, from, next) => {
    const isAuthenticated = window.sessionStorage.getItem('token')
    if (to.path !== '/login' && !isAuthenticated) next({ path: '/login' })
    else next()
    next()
})
export default router
