<template>
    <div class="container-fuild bg-white w-100 p-3" style="height: calc(100vh - 112px);">
        <div class="row h-100" style="min-height: 500px">
            <div class="col-12 mb-3" style="height: 40px">
                <div class="title">
                    课程进程
                </div>
            </div>
            <div class="col-12 d-flex flex-row" style="height: calc(100% - 60px);">
                <div class="progressBox-outer" style="flex: 1">
                    <div class="progressBox-inner">
<!--                        <b-table
                                id="my-table"
                                :items="items"
                                :per-page="perPage"
                                :current-page="currentPage"
                                :fields="fields"
                                sort-icon-left
                                striped hover
                                style="width: max-content"
                                v-on:row-clicked="table_click($event)"
                        >
                        </b-table>-->
                      <table border="5" bordercolor="#1A4888" margin>
<!--                        <tr v-for="item in fields" v-bind:key="item.key">-->
                        <b-tr >
                         <b-th class="p-2">编号</b-th><b-th class="p-2">课程信息</b-th>
                          <b-th class="p-2">确认开课</b-th><b-th class="p-2">上传授课计划</b-th>
                          <b-th class="p-2">上传教学资料</b-th><b-th class="p-2">发布学生成绩</b-th>
                          <b-th class="p-2">发布学生评价</b-th><b-th class="p-2">提交总结报告</b-th>
                        </b-tr>
                        <b-tr v-for="item in items" v-bind:key="item.id">
                          <b-td>{{item.id}}</b-td><b-td @click="table_click(item)" :class="(item.info.isDone === true) ? 'text-r' : 'text-b'" ><u style="cursor: pointer">{{item.info.name}}</u></b-td>
                          <b-td @click="confirm_click(item)" :class="(item.confirmation === '已确认') ? 'text-r' : 'text-b'" ><u class="cursor-pointer">{{item.confirmation}}</u></b-td>
                          <b-td @click="utp_click(item)" :class="(item.upload_teaching_plan === '已上传') ? 'text-r' : 'text-b'" ><u class="cursor-pointer">{{item.upload_teaching_plan}}</u></b-td>
                          <b-td @click="utm_click(item)" :class="(item.upload_teaching_materials === '已上传') ? 'text-r' : 'text-b'" ><u class="cursor-pointer">{{item.upload_teaching_materials}}</u></b-td>
                          <b-td @click="rg_click(item)" :class="(item.release_grade === '已发布') ? 'text-r' : 'text-b'" ><u class="cursor-pointer">{{item.release_grade}}</u></b-td>
                          <b-td @click="re_click(item)" :class="(item.release_evaluation === '已评价') ? 'text-r' : 'text-b'"><u class="cursor-pointer">{{item.release_evaluation}}</u></b-td>
                          <b-td @click="sr_click(item)" :class="(item.submit_report === '已提交') ? 'text-r' : 'text-b'"><u class="cursor-pointer">{{item.submit_report}}</u></b-td>
                        </b-tr>
                      </table>
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
      <b-modal id="infoCourse" title="详情" size="xl" scrollable>
        <template v-slot:modal-footer="{ }">
          <b-button size="sm" variant="success" @click="closeMd('infoCourse')" style="background-color: #1A4888">
            确定
          </b-button>
        </template>
        <input type="hidden" v-model="itemNow"/>
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <h3>{{itemNow.info.name}}课程信息</h3>
              <h5>专业：{{itemNow.info.major}}  学期：{{itemNow.info.term}}  班级：{{itemNow.info.class}}</h5>
            </div>
            <iframe class="col-12" height="500px" frameborder="0"
                    src="http://116.196.64.210:9876/resource/coursedoc/202012111548266904561.pdf">
            </iframe>
          </div>
        </div>
      </b-modal>
      <b-modal id="utp" title="上传教学计划" size="xl" scrollable>
        <template v-slot:modal-footer="{ }">
          <b-button size="sm" variant="success" style="background-color: #1A4888">
            下载导入模板
          </b-button>
          <b-button size="sm" variant="success" style="background-color: #1A4888" @click="ok('utp')">
            确定导入
          </b-button>
        </template>
        <div class="card">
          <div class="card-body" style="background: lavender">
            <input type="file" class="form-control-file" placeholder="选择授课计划">
          </div>
        </div>
      </b-modal>
      <b-modal id="utm" title="上传教学资料" size="xl" scrollable>
        <template v-slot:modal-footer="{ }">
          <b-button size="sm" variant="primary" style="background-color: #1A4888">
            下载导入模板
          </b-button>
          <b-button size="sm" variant="primary" style="background-color: #1A4888" @click="ok('utm')">
            确定导入
          </b-button>
        </template>
        <div class="card mb-1">
          <div class="card-body" style="background: lavender">
            <a>请在此选择</a><a style="color: red;font-size: larger">教案</a><a>文件或教案压缩包</a>
            <input type="file" class="form-control-file" style="border:2px solid #99D3F5;" >
          </div>
        </div>
        <div class="card mb-1">
          <div class="card-body" style="background: lavender">
            <a>请在此选择</a><a style="color: red;font-size: larger">PPT</a><a>文件或PPT压缩包</a>
            <input type="file" class="form-control-file" style="border:2px solid #99D3F5;" >
          </div>
        </div>
        <div class="card mb-1">
          <div class="card-body" style="background: lavender">
            <a>请在此选择</a><a style="color: red;font-size: larger">试卷</a><a>文件</a>
            <input type="file" class="form-control-file" style="border:2px solid #99D3F5;" >
          </div>
        </div>
      </b-modal>
      <b-modal id="rg" title="发布成绩" size="xl" scrollable>
        <template v-slot:modal-footer="{ }">
          <b-button size="sm" variant="primary" @click="closeMd('rg')" class="backColor">
            确定
          </b-button>
        </template>
        <input type="hidden" />
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <h3>{{itemNow.info.name}} 课程成绩</h3>
              <div>
                <span class="mr-3">课程编号:{{itemNow.info.id}}</span>
                <span class="mr-3">所属专业:{{itemNow.info.major}}</span>
                <span class="mr-3">开课学期:{{itemNow.info.term}}</span>
              </div>
            </div>
            <b-table
                id="assessment-table"
                :items="assessments"
                :per-page="perPage"
                :current-page="a_currentPage"
                :fields="a_fields"
                sort-icon-left
                striped hover
            >
              <template v-slot:cell(usual_performance)="data">
                <input type="number" v-model="data.item.usual_performance" style="width:50%">
              </template>
              <template v-slot:cell(mid_results)="data">
                <input type="number" v-model="data.item.mid_results" style="width:50%">
              </template>
              <template v-slot:cell(final_results)="data">
                <input type="number" v-model="data.item.final_results" style="width:50%">
              </template>
              <template v-slot:cell(total_score)="data">
                <input type="number" v-model="data.item.total_score" style="width:50%">
              </template>
            </b-table>
            <div class="w-100 text-right">
              <b-pagination
                  v-model="a_currentPage"
                  :total-rows="a_rows"
                  :per-page="perPage"
                  aria-controls="my-table"
                  align="right"
              ></b-pagination>
            </div>
          </div>
        </div>

      </b-modal>
      <b-modal id="re" title="发布评价" size="xl" scrollable>
        <template v-slot:modal-footer="{ }">
          <b-button size="sm" variant="primary" @click="closeMd('re')" class="backColor">
            确定
          </b-button>
        </template>
        <input type="hidden" />
        <div class="container">
          <div class="row">
            <div class="col-12 text-center">
              <h3>{{itemNow.info.name}}学生评价</h3>
              <div>
                <span class="mr-3">课程编号:{{itemNow.info.id}}</span>
                <span class="mr-3">所属专业:{{itemNow.info.major}}</span>
                <span class="mr-3">开课学期:{{itemNow.info.term}}</span>
                <span class="mr-3">班级:{{itemNow.info.class}}</span>
              </div>
            </div>
            <b-table
                id="assessment-table"
                :items="evaluations"
                :per-page="perPage"
                :current-page="e_currentPage"
                :fields="e_fields"
                sort-icon-left
                striped hover
            >
              <template v-slot:cell(Comprehensive_comments)="data">
                <input type="text" v-model="data.item.Comprehensive_comments" style="width:50%">
              </template>
              <template v-slot:cell(results)="data">
                <select v-model="data.item.results" style="width:50%">
                  <option value ="优秀">优秀</option>
                  <option value ="良好">良好</option>
                  <option value ="及格">及格</option>
                  <option value ="不及格">不及格</option>
                </select>
              </template>
            </b-table>
            <div class="w-100 text-right">
              <b-pagination
                  v-model="e_currentPage"
                  :total-rows="e_rows"
                  :per-page="perPage"
                  aria-controls="my-table"
                  align="right"
              ></b-pagination>
            </div>
          </div>
        </div>

      </b-modal>
      <b-modal id="str" title="提交总结报告" size="xl" scrollable>
        <template v-slot:modal-footer="{ }">
          <b-button size="sm" variant="primary" style="background-color: #1A4888">
            下载导入模板
          </b-button>
          <b-button size="sm" variant="primary" style="background-color: #1A4888" @click="ok('str')">
            确定导入
          </b-button>
        </template>
        <div class="card">
          <div class="card-body" style="background: lavender">
            <input type="file" class="form-control-file" placeholder="选择总结报告">
          </div>
        </div>
      </b-modal>
    </div>
</template>
<script>
import {getAllCourse} from '../../../api/course'
import '../../../plugins/Element'
export default {
    data () {
        return {
            perPage: 10,
            currentPage: 1,
            itemNow:{id: null, info: {id:1,major:'物联网',term:"2021-春",name:null,isDone:false}, confirmation: null,upload_teaching_plan:null,upload_teaching_materials:null,release_grade:null,release_evaluation:null,submit_report:null,},
            items: [
                {id: 1, info: {id:1,major:'物联网',term:"2021-春",name:'课程1',class:'20级1班',isDone:false}, confirmation: '未确认',upload_teaching_plan:'未上传',upload_teaching_materials:'未上传',release_grade:'未发布',release_evaluation:'未评价',submit_report:'未提交',},
                {id: 2, info: {id:1,major:'物联网',term:"2021-春",name:'课程2',class:'20级1班',isDone:false}, confirmation: '未确认',upload_teaching_plan:'未上传',upload_teaching_materials:'未上传',release_grade:'未发布',release_evaluation:'未评价',submit_report:'未提交',},
                {id: 3, info: {id:1,major:'物联网',term:"2021-春",name:'课程3',class:'20级1班',isDone:false}, confirmation: '未确认',upload_teaching_plan:'未上传',upload_teaching_materials:'未上传',release_grade:'未发布',release_evaluation:'未评价',submit_report:'未提交',},
            ],
          assessments: [
            {id: 1, name: '张1', usual_performance: 90,mid_results:80,final_results:85,total_score:95},
            {id: 2, name: '张2', usual_performance: 90,mid_results:80,final_results:85,total_score:95},
            {id: 3, name: '张3', usual_performance: 90,mid_results:80,final_results:85,total_score:95},
            {id: 4, name: '张4', usual_performance: 90,mid_results:80,final_results:85,total_score:95},
            {id: 5, name: '张5', usual_performance: 90,mid_results:80,final_results:85,total_score:95},
            {id: 6, name: '张6', usual_performance: 90,mid_results:80,final_results:85,total_score:95},
            {id: 7, name: '张7', usual_performance: 90,mid_results:80,final_results:85,total_score:95},
            {id: 8 ,name: '张8', usual_performance: 90,mid_results:80,final_results:85,total_score:95},
            {id: 9, name: '张9', usual_performance: 90,mid_results:80,final_results:85,total_score:95},
            {id: 10, name: '张10', usual_performance: 90,mid_results:80,final_results:85,total_score:95},
            {id: 11, name: '张11', Appearance: 90,mid_results:80,final_results:85,total_score:95},
          ],
          evaluations: [
            {id: 1, name: '张1', Comprehensive_comments: "非常棒的学生",results:"优秀",},
            {id: 2, name: '张2', Comprehensive_comments: "",results:"",},
            {id: 3, name: '张3', Comprehensive_comments: "",results:"",},
            {id: 4, name: '张4', Comprehensive_comments: "",results:"",},
            {id: 5, name: '张5', Comprehensive_comments: "",results:"",},
            {id: 6, name: '张6', Comprehensive_comments: "",results:"",},
            {id: 7, name: '张7', Comprehensive_comments: "",results:"",},
            {id: 8 ,name: '张8', Comprehensive_comments: "",results:"",},
            {id: 9, name: '张9', Comprehensive_comments: "",results:"",},
            {id: 10, name: '张10', Comprehensive_comments: "",results:"",},
            {id: 11, name: '张11', Comprehensive_comments: "",results:"",},
          ],
          a_fields:[{key: 'id',sortable: true,label: '学号', thStyle: "cursor: pointer"},
            {key: 'name',sortable: true,label: '姓名', thStyle: "cursor: pointer"},
            {key: 'usual_performance',sortable: true,label: '平时成绩', thStyle: "cursor: pointer"},
            {key: 'mid_results',sortable: true,label: '期中成绩', thStyle: "cursor: pointer"},
            {key: 'final_results',sortable: true,label: '期末成绩', thStyle: "cursor: pointer"},
            {key: 'total_score',sortable: true,label: '总成绩', thStyle: "cursor: pointer"},
          ],
          e_fields:[{key: 'id',sortable: true,label: '学号', thStyle: "cursor: pointer"},
            {key: 'name',sortable: true,label: '姓名', thStyle: "cursor: pointer"},
            {key: 'Comprehensive_comments',sortable: true,label: '综合评语', thStyle: "cursor: pointer"},
            {key: 'results',sortable: true,label: '综合成绩', thStyle: "cursor: pointer"},
          ],
          a_currentPage:1,
          e_currentPage:1,
        }
    },
    methods: {
      table_click(event){
        this.$data.itemNow = event
        this.$bvModal.show("infoCourse")
      },
      confirm_click(item){
        if(item.info.isDone === true){
          if(item.confirmation === '未确认'){
            console.log(item);
            for(let temp of this.items){
              if(temp === item){
                temp.confirmation = '已确认'
              }
            }
          }
        }
      },
      utp_click(item){
        if(item.confirmation === '已确认'){
          this.$data.itemNow = item
          this.$bvModal.show("utp")
        }
      },
      utm_click(item){
        if(item.upload_teaching_plan === '已上传'){
          this.$data.itemNow = item
          this.$bvModal.show("utm")
        }
      },
      rg_click(item){
        if(item.upload_teaching_materials === '已上传'){
          this.$data.itemNow = item
          this.$bvModal.show("rg")
        }
      },
      re_click(item){
        if(item.release_grade === '已发布'){
          this.$data.itemNow = item
          this.$bvModal.show("re")
        }
      },
      sr_click(item){
        if(item.release_evaluation === '已评价'){
          this.$data.itemNow = item
          this.$bvModal.show("str")
        }
      },
      closeMd(id){
        switch (id){
          case 'infoCourse':
            if(this.$data.itemNow.info.isDone === false){
              for(let item of this.items){
                if(item === this.$data.itemNow){
                  item.info.isDone = true
                }
              }
            }
            break;
          case 'rg':
            if(this.$data.itemNow.release_grade === "未发布"){
              for(let item of this.items){
                if(item === this.$data.itemNow){
                  item.release_grade = "已发布"
                }
              }
            }
            break;
          case 're':
            if(this.$data.itemNow.release_evaluation === "未评价"){
              for(let item of this.items){
                if(item === this.$data.itemNow){
                  item.release_evaluation = "已评价"
                }
              }
            }
            break
        }
        this.$bvModal.hide(id)
      },
      ok(id){
        switch (id) {
          case "utp":
            if(this.$data.itemNow.upload_teaching_plan === '未上传'){
              for(let item of this.items){
                if(item === this.$data.itemNow){
                  item.upload_teaching_plan = '已上传'
                }
              }
            }
            break;
          case "utm":
            if(this.$data.itemNow.upload_teaching_materials === '未上传'){
              for(let item of this.items){
                if(item === this.$data.itemNow){
                  item.upload_teaching_materials = '已上传'
                }
              }
            }
            break;
          case "str":
            if(this.$data.itemNow.submit_report === '未提交'){
              for(let item of this.items){
                if(item === this.$data.itemNow){
                  item.submit_report = '已提交'
                }
              }
            }
            break
        }
        this.$bvModal.hide(id)
      },
    },
    computed: {
        rows() {
            return this.items.length
        },
      a_rows() {
        return this.assessments.length
      },
      e_rows() {
        return this.evaluations.length
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
    .backColor{
      background-color: #1A4888;
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
    .text-r{
      color: red;
    }
    .text-b{
      color: gray;
    }
    .cursor-pointer{
      cursor: pointer;
      background-color: #FFFFFF;
    }
</style>
