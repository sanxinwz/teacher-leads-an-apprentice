const TeacherHome = () =>
    import ( /* webpackChunkName: "Teacher_Home" */ 'views/teacher_views/home/Home.vue')
const TeacherWelcome = () =>
    import ( /* webpackChunkName: "Teacher_Welcome" */ 'views/teacher_views/home/TeacherWelcome.vue')
const Major = () =>
    import ( /* webpackChunkName: "Teacher_Major" */ 'views/teacher_views/major/Major.vue')
const Process = () =>
    import ( /* webpackChunkName: "Teacher_Process" */ 'views/teacher_views/process/Process.vue')

const pagesRoute = [{
    path: '/teacher_views/home',
    component: TeacherWelcome,
    meta: {
      title: '欢迎回来'
    },
  },
  {
    path: '/teacher_views/major',
    component: Major,
    meta: {
      title: '人才培养方案信息'
    },
  },
  {
    path: '/teacher_views/process',
    component: Process,
    meta: {
      title: '我的流程'
    },
  },

]
export default {
  path: '/teacher_views/home',
  component: TeacherHome,
  rediract: '/teacher_views/welcome',
  meta: {
    title: '首页 - Element'
  },
  children: [
    ...pagesRoute
  ]
}
