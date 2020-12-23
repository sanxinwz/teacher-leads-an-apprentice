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
        redirect: '/login'
    },
    ...routerList
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    /* 比如做登陆验证 
       if (to.name !== 'Home' && !isAuthenticated) next({ name: 'Home' })  
       else next() 
    */
    // document.title = to.matched[0].name
    next()

})
export default router