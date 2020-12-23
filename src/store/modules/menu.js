export default {
    state: () => ({
        menuList: [{
                "id": '100',
                "authName": "订单管理",
                "iconFont": "el-icon-menu",
                "children": [{
                    "id": 104,
                    "authName": "订单列表",
                    "path": "order",
                    "iconFont": "el-icon-setting",
                    "children": []
                }]
            },
            {
                "id": '101',
                "authName": "客户管理",
                "path": "customer",
                "iconFont": "el-icon-menu",
                "children": [{
                    "id": 105,
                    "authName": "客户列表",
                    "path": "customer",
                    "iconFont": "el-icon-setting",
                    "children": []
                }]
            },
            {
                "id": '102',
                "authName": "系统设置",
                "iconFont": "el-icon-menu",
                "children": [{
                    "id": 106,
                    "authName": "人员配置",
                    "path": "setting",
                    "iconFont": "el-icon-setting",
                    "children": []
                }]
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