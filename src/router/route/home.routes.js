const Home = () =>
    import ( /* webpackChunkName: "Home" */ 'views/home/Home.vue')
const Welcome = () =>
    import ( /* webpackChunkName: "Login_Welcome" */ 'views/home/Welcome.vue')
const Setting = () =>
    import ( /* webpackChunkName: "Setting" */ 'views/setting/Setting.vue')
const Customer = () =>
    import ( /* webpackChunkName: "Customer" */ 'views/customer/Customer.vue')
const Course = () =>
    import ( /* webpackChunkName: "Course" */ 'views/course/Course.vue')
const TextBook = () =>
    import ( /* webpackChunkName: "TextBook" */ 'views/textBook/TextBook.vue')
const Class = () =>
    import ( /* webpackChunkName: "Class" */ 'views/class/Class.vue')
const Assessment = () =>
    import ( /* webpackChunkName: "Assessment" */ 'views/assessment/Assessment.vue')
const Choose = () =>
    import ( /* webpackChunkName: "Choose" */ 'views/choose/Choose.vue')
const Major = () =>
    import ( /* webpackChunkName: "Major" */ 'views/major/Major.vue')
const Progress = () =>
    import ( /* webpackChunkName: "Progress" */ 'views/progress/Progress.vue')
const TeacherReport = () =>
    import ( /* webpackChunkName: "TeacherSummary" */ 'views/teacherSummary/TeacherSummary.vue')
const TeacherScheduling = () =>
    import ( /* webpackChunkName: "TeacherScheduling" */ 'views/teacherScheduling/TeacherScheduling.vue')
const TeacherAssessment = () =>
    import ( /* webpackChunkName: "TeacherAssessment" */ 'views/teacherAssessment/TeacherAssessment.vue')
const StudentReport = () =>
    import ( /* webpackChunkName: "TeacherAssessment" */ 'views/studentReport/StudentReport.vue')
const Resources = () =>
    import ( /* webpackChunkName: "TeacherAssessment" */ 'views/resources/Resources.vue')

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
        path: '/progress',
        component: Progress,
        meta: {
            title: '进程管理'
        },
    },
    {
        path: '/course',
        component: Course,
        meta: {
            title: '课程管理'
        },
    },
    {
        path: '/major',
        component: Major,
        meta: {
            title: '培养方案管理'
        },
    },
    {
        path: '/textBook',
        component: TextBook,
        meta: {
            title: '教材管理'
        },
    },
    {
        path: '/class',
        component: Class,
        meta: {
            title: '班级管理'
        },
    },
    {
        path: '/assessment',
        component: Assessment,
        meta: {
            title: '班级管理'
        },
    },
    {
        path: '/choose',
        component: Choose,
        meta: {
            title: '班级管理'
        },
    },
    {
        path: '/teacherSummary',
        component: TeacherReport,
        meta: {
            title: '师傅总结报告'
        },
    },
    {
        path: '/teacherScheduling',
        component: TeacherScheduling,
        meta: {
            title: '教师排课'
        },
    },
    {
        path: '/teacherAssessment',
        component: TeacherAssessment,
        meta: {
            title: '教师考核评价管理'
        },
    },
    {
        path: '/studentReport',
        component: StudentReport,
        meta: {
            title: '学生总结报告'
        },
    },
    {
        path: '/resources',
        component: Resources,
        meta: {
            title: '学生总结报告'
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
