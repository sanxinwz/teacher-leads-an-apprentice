export default {
    state: () => ({
        menuList: [{
            "id": '90',
            "authName": "教学管理",
            "iconFont": "el-icon-date",
            "children": [{
                "id": 91,
                "authName": "进程管理",
                "path": "progress",
                "children": []
            },
                {
                    "id": 92,
                    "authName": "培养方案管理",
                    "path": "major",
                    "children": []
                },
                {
                    "id": 93,
                    "authName": "课程管理",
                    "path": "course",
                    "children": []
                },
                {
                    "id": 94,
                    "authName": "教材管理",
                    "path": "textBook",
                    "children": []
                },
                {
                    "id": 95,
                    "authName": "班级管理",
                    "path": "class",
                    "children": []
                }]
        },
            {
                "id": '100',
                "authName": "教学安排",
                "iconFont": "el-icon-date",
                "children": [{
                    "id": 101,
                    "authName": "学生选课情况",
                    "path": "choose",
                    "children": []
                },
                    {
                        "id": 102,
                        "authName": "教师排课",
                        "path": "teacherScheduling",
                        "children": []
                    }]
            },
            {
                "id": '110',
                "authName": "考核管理",
                "iconFont": "el-icon-date",
                "children": [{
                    "id": 111,
                    "authName": "学生考核评价管理",
                    "path": "assessment",
                    "children": []
                },
                    {
                        "id": 112,
                        "authName": "教师考核评价管理",
                        "path": "teacherAssessment",
                        "children": []
                    },
                    {
                        "id": 113,
                        "authName": "教学资料管理",
                        "path": "resources",
                        "children": []
                    }]
            },
            {
                "id": '120',
                "authName": "总结报告",
                "iconFont": "el-icon-date",
                "children": [{
                    "id": 121,
                    "authName": "师傅总结报告",
                    "path": "teacherSummary",
                    "children": []
                },
                    {
                        "id": 122,
                        "authName": "学生总结报告",
                        "path": "studentReport",
                        "children": []
                    }]
            },
        ],
        teacherMenuList:[
            {
                "id": '90',
                "authName": "人才培养方案信息",
                "iconFont": "el-icon-date",
                "children": [
                    {
                        "id": 91,
                        "authName": "人才培养方案信息",
                        "path": "teacher_views/major",
                        "children": []
                    },
                ]
            },
            {
                "id": '100',
                "authName": "我的课程",
                "iconFont": "el-icon-date",
                "children": [
                    {
                        "id": 101,
                        "authName": "课程进程",
                        "path": "teacher_views/process",
                        "children": []
                    },
                ]
            },
        ]
    }),
    mutations: {

    },
    actions: {

    },
    getters: {

    }
}
