const Login = () =>
    import ( /* webpackChunkName: "Login_Home_Welcome" */ 'views/login/Login.vue');


export default {
    path: '/login',
    component: Login,
    meta: {
        title: '系统登陆'
    },
}