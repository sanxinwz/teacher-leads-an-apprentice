const Home = () =>
    import ( /* webpackChunkName: "Home" */ 'views/home/Home.vue')
const Welcome = () =>
    import ( /* webpackChunkName: "Login_Welcome" */ 'views/home/Welcome.vue')
const Setting = () =>
    import ( /* webpackChunkName: "Setting" */ 'views/setting/Setting.vue')
const Customer = () =>
    import ( /* webpackChunkName: "Customer" */ 'views/customer/Customer.vue')
const Order = () =>
    import ( /* webpackChunkName: "Order" */ 'views/order/Order.vue')


const pagesRoute = [{
        path: '/home',
        component: Welcome,
        meta: {
            title: '欢迎回来'
        },
    },
    {
        path: '/setting',
        component: Setting,
        meta: {
            title: '系统设置'
        },
    },
    {
        path: '/customer',
        component: Customer,
        meta: {
            title: '客户档案'
        },
    },
    {
        path: '/order',
        component: Order,
        meta: {
            title: '订单信息'
        },
    },


]
export default {
    path: '/home',
    component: Home,
    rediract: '/welcome',
    meta: {
        title: '首页 - Element'
    },
    children: [
        ...pagesRoute
    ]
}