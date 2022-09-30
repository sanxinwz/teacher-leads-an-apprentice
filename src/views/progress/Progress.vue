<template>
    <div class="container-fuild bg-white w-100 p-3" style="height: calc(100vh - 112px);">
        <div class="row h-100" style="min-height: 500px">
            <div class="col-12 mb-3" style="height: 40px">
                <div class="title">
                    进程管理
                </div>
            </div>
            <div class="col-12 d-flex flex-row" style="height: calc(100% - 60px);">
                <div class="progressBox-outer" style="flex: 1">
                    <div class="progressBox-inner">
                        <b-table
                                id="my-table"
                                :items="items"
                                :per-page="perPage"
                                :current-page="currentPage"
                                :fields="fields"
                                sort-icon-left
                                striped hover
                                style="width: max-content"
                        >
                          <td nowrap="true"></td>
                        </b-table>
                      <div class="w-100 text-right">
                        <b-pagination
                            v-model="currentPage"
                            :total-rows="rows"
                            :per-page="perPage"
                            aria-controls="my-table"
                            align="right"
                        ></b-pagination>
                      </div>
                    </div>
                </div>
                <div class="chatbox d-flex flex-column ml-3" style="flex: none">
                    <!-- Nav tabs -->
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" data-toggle="tab" href="#logt">消息记录</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-toggle="tab" href="#usert">在线列表</a>
                        </li>
                    </ul>
                    <!-- Tab panes -->
                    <div class="tab-content h-100">
                        <div class="tab-pane active chatlogbox-outer" id="logt">
                            <div class="chatlogbox-inner text-left">
                                    <div class="chatlog">
                                        <div class="chatlog-name-date text-primary">
                                            <span class="mr-2">刘老师</span>
                                            <span class="badge badge-primary">2021-01-21 33:34</span>
                                        </div>
                                        <div class="chatlog-msg text-dark">
                                            请大家注意进度
                                        </div>
                                    </div>
                                    <div class="chatlog">
                                        <div class="chatlog-name-date text-primary">
                                            <span class="mr-2">刘老师</span>
                                            <span class="badge badge-primary">2021-01-21 33:34</span>
                                        </div>
                                        <div class="chatlog-msg text-dark">
                                            课程需要在今天前上传完
                                        </div>
                                    </div>
                                    <div class="chatlog">
                                        <div class="chatlog-name-date text-primary">
                                            <span class="mr-2">刘老师</span>
                                            <span class="badge badge-primary">2021-01-21 33:34</span>
                                        </div>
                                        <div class="chatlog-msg text-dark">
                                            没有完成的请尽快完成
                                        </div>
                                    </div>
                                    <div class="chatlog">
                                        <div class="chatlog-name-date text-success text-right">
                                            <span class="badge badge-success mr-2">2021-01-21 33:34</span>
                                            <span>我</span>
                                        </div>
                                        <div class="chatlog-msg text-dark text-right">
                                            好的,收到
                                        </div>
                                    </div>
                                    <div class="chatlog">
                                        <div class="chatlog-name-date text-warning">
                                            <span class="mr-2">学生1</span>
                                            <span class="badge badge-warning text-white">2021-01-21 33:34</span>
                                        </div>
                                        <div class="chatlog-msg text-dark">
                                            收到了老师
                                        </div>
                                    </div>
                                    <div class="chatlog">
                                        <div class="chatlog-name-date text-warning">
                                            <span class="mr-2">学生1</span>
                                            <span class="badge badge-warning text-white">2021-01-21 33:34</span>
                                        </div>
                                        <div class="chatlog-msg text-dark">
                                            收到!!!
                                        </div>
                                    </div>
                                    <div class="chatlog">
                                        <div class="chatlog-name-date text-primary">
                                            <span class="mr-2">刘老师</span>
                                            <span class="badge badge-primary">2021-01-21 33:34</span>
                                        </div>
                                        <div class="chatlog-msg text-dark">
                                            课程资源要核实好
                                        </div>
                                    </div>
                                    <div class="chatlog">
                                        <div class="chatlog-name-date text-primary">
                                            <span class="mr-2">刘老师</span>
                                            <span class="badge badge-primary">2021-01-21 33:34</span>
                                        </div>
                                        <div class="chatlog-msg text-dark">
                                            大家加油
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div class="tab-pane chatlogbox-outer" id="usert">
                            <div class="chatlogbox-inner text-left">
                                <div class="useritem">
                                    刘老师
                                </div>
                                <div class="useritem">
                                    学生1
                                </div>
                                <div class="useritem">
                                    学生2
                                </div>
                                <div class="useritem">
                                    学生3
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="chatinputbox">
                        <textarea class="chatinputta" placeholder="在此输入消息内容……"></textarea>
                    </div>
                    <div class="chatinputbtn text-right">
                        <button class="btn btn-sm btn-primary">发送</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import {getAllCourse} from '../../api/course'
import '../../plugins/Element'
export default {
    data () {
        return {
            perPage: 10,
            currentPage: 1,
            fields: [
                {
                    key: 'id',
                    sortable: true,
                    label: '编号',
                    thStyle: "cursor: pointer"
                },
                {
                    key: 'name',
                    sortable: true,
                    label: '名称',
                    thStyle: "cursor: pointer"
                },
                {
                    key: 'course',
                    sortable: true,
                    label: '课程库',
                    thStyle: "cursor: pointer"
                },{
                    key: 'publish',
                    sortable: true,
                    label: '教材库',
                    thStyle: "cursor: pointer"
                },{
                    key: 'clazz',
                    sortable: true,
                    label: '班级',
                    thStyle: "cursor: pointer"
                },{
                    key: 'resource',
                    sortable: true,
                    label: '教学资料',
                    thStyle: "cursor: pointer"
                },{
                    key: 'evl',
                    sortable: true,
                    label: '考核评价',
                    thStyle: "cursor: pointer"
                },{
                    key: 'trep',
                    sortable: true,
                    label: '师傅总结报告',
                    thStyle: "cursor: pointer"
                },{
                    key: 'srep',
                    sortable: true,
                    label: '学生总结报告',
                    thStyle: "cursor: pointer"
                }
            ],
            items: [
                {id: 1, name: '专业1', course: '已上传',publish:'已上传',clazz:'已安排(14/16)',resource:'已安排(1/14)',evl:'已评价(4/12)',trep:'已提交(11/13)',srep:'已提交(88%)', },
                {id: 1, name: '专业1', course: '已上传',publish:'已上传',clazz:'已安排(14/16)',resource:'已安排(1/14)',evl:'已评价(4/12)',trep:'已提交(11/13)',srep:'已提交(88%)', },
                {id: 1, name: '专业1', course: '已上传',publish:'已上传',clazz:'已安排(14/16)',resource:'已安排(1/14)',evl:'已评价(4/12)',trep:'已提交(11/13)',srep:'已提交(88%)', },
                {id: 1, name: '专业1', course: '已上传',publish:'已上传',clazz:'已安排(14/16)',resource:'已安排(1/14)',evl:'已评价(4/12)',trep:'已提交(11/13)',srep:'已提交(88%)', },
                {id: 1, name: '专业1', course: '已上传',publish:'已上传',clazz:'已安排(14/16)',resource:'已安排(1/14)',evl:'已评价(4/12)',trep:'已提交(11/13)',srep:'已提交(88%)', },
                {id: 1, name: '专业1', course: '已上传',publish:'已上传',clazz:'已安排(14/16)',resource:'已安排(1/14)',evl:'已评价(4/12)',trep:'已提交(11/13)',srep:'已提交(88%)', },
                {id: 1, name: '专业1', course: '已上传',publish:'已上传',clazz:'已安排(14/16)',resource:'已安排(1/14)',evl:'已评价(4/12)',trep:'已提交(11/13)',srep:'已提交(88%)', },
                {id: 1, name: '专业1', course: '已上传',publish:'已上传',clazz:'已安排(14/16)',resource:'已安排(1/14)',evl:'已评价(4/12)',trep:'已提交(11/13)',srep:'已提交(88%)', },
                {id: 1, name: '专业1', course: '已上传',publish:'已上传',clazz:'已安排(14/16)',resource:'已安排(1/14)',evl:'已评价(4/12)',trep:'已提交(11/13)',srep:'已提交(88%)', },
                {id: 1, name: '专业1', course: '已上传',publish:'已上传',clazz:'已安排(14/16)',resource:'已安排(1/14)',evl:'已评价(4/12)',trep:'已提交(11/13)',srep:'已提交(88%)', },
                {id: 1, name: '专业1', course: '已上传',publish:'已上传',clazz:'已安排(14/16)',resource:'已安排(1/14)',evl:'已评价(4/12)',trep:'已提交(11/13)',srep:'已提交(88%)', },
                {id: 1, name: '专业1', course: '已上传',publish:'已上传',clazz:'已安排(14/16)',resource:'已安排(1/14)',evl:'已评价(4/12)',trep:'已提交(11/13)',srep:'已提交(88%)', },
                {id: 1, name: '专业1', course: '已上传',publish:'已上传',clazz:'已安排(14/16)',resource:'已安排(1/14)',evl:'已评价(4/12)',trep:'已提交(11/13)',srep:'已提交(88%)', },
                {id: 1, name: '专业1', course: '已上传',publish:'已上传',clazz:'已安排(14/16)',resource:'已安排(1/14)',evl:'已评价(4/12)',trep:'已提交(11/13)',srep:'已提交(88%)', },
                {id: 1, name: '专业1', course: '已上传',publish:'已上传',clazz:'已安排(14/16)',resource:'已安排(1/14)',evl:'已评价(4/12)',trep:'已提交(11/13)',srep:'已提交(88%)', },
                {id: 1, name: '专业1', course: '已上传',publish:'已上传',clazz:'已安排(14/16)',resource:'已安排(1/14)',evl:'已评价(4/12)',trep:'已提交(11/13)',srep:'已提交(88%)', },
                {id: 1, name: '专业1', course: '已上传',publish:'已上传',clazz:'已安排(14/16)',resource:'已安排(1/14)',evl:'已评价(4/12)',trep:'已提交(11/13)',srep:'已提交(88%)', },
            ]
        }
    },
    methods: {
    },
    computed: {
        rows() {
            return this.items.length
        }
    },
    created() {
        getAllCourse().then(res => {
            this.courses = res.data.data
            console.log(res)
        })
        //  this.$notify.success({
        //     title: '提示',
        //     message: '详细路由请自行配置喔！！',
        //     offset: 50,
        // });
    }
}
</script>
<style lang="scss" scoped>
    .cursor-pointer{
        cursor: pointer !important;
    }
    .title{
        height: 30px;
        font-size: 24px;
        color: #1A4888;
        line-height: 30px;
        text-align: left;
    }
    .progressBox-outer{
        overflow: hidden;
        position: relative;
        width: 100%;
        height: 100%;
    }
    .progressBox-inner{
        overflow: scroll;
        position: relative;
        width: 100%;
        height: 100%;
        padding: 10px;
    }
    .chatbox{
        border: 1px solid #aaaaaa;
        border-radius: 5px;
        box-shadow: 0px 0px 5px #dddddd;
        width: 350px;
        height: 100%;
    }
    .major-title{
        background: #eeeeee;
        height: 40px;
        padding: 10px;
        line-height: 20px;
    }
    .infoitem{
        line-height: 30px;
    }
    .chatinputbox{
        background: #1A4888;
        flex: none;
        height: 200px;
        border-top: 1px solid #aaaaaa;
    }
    .chatinputta{
        padding: 5px;
        width: 100%;
        height: 100%;
        border: 0;
        resize: none;
    }
    .chatinputbtn{
        padding: 10px;
        line-height: 30px;
        flex: none;
        height: 50px;
    }
    .chatlogbox-outer{
        overflow: hidden;
        position: relative;
        width: 100%;
        height: 100%;
    }
    .chatlogbox-inner{
        overflow: auto;
        overflow-x: scroll;
        position: absolute;
        width: 100%;
        height: 100%;
        padding: 10px;
    }
    .chatlog{
        border-radius: 5px;
        padding: 10px;
        background: #eeeeee;
        width: 100%;
        margin-bottom: 10px;
    }
    .chatlog-name-date{
        line-height: 30px;
        font-size: 16px;
    }
    .chatlog-msg{
        line-height: 20px;
        font-size: 14px;
    }
    .useritem{
        height: 40px;
        padding: 10px;
        margin-bottom: 10px;
        background: #eeeeee;
        border-radius: 10px;
        line-height: 20px;
    }
</style>
