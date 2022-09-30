<template>
    <div class="container-fuild bg-white w-100 p-3">
        <div class="row mb-3">
            <div class="col-12">
                <div class="title">
                    教学资料管理
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-4 text-left mb-3">
                <input class="form-control" placeholder="请输入课程名" />
            </div>
            <div class="col-3 text-left mb-3">
                <select class="form-control">
                  <option value="" style="display: none;" disabled selected>请选择学期</option>
                    <option>2020-09</option>
                </select>
            </div>
            <div class="col-3 text-left mb-3">
              <select class="form-control">
                <option value="" style="display: none;" disabled selected>教师工号</option>
                <option>020</option>
              </select>
            </div>
          <div class="col-2 text-left mb-3">
            <a class="btn btn-success text-white mr-3 backColor">筛选</a>
          </div>
        </div>
        <div class="row">
            <div class="col-12">
                <b-table
                        id="my-table"
                        :items="items"
                        :per-page="perPage"
                        :current-page="currentPage"
                        :fields="fields"
                        sort-icon-left
                        striped hover
                >
                  <template v-slot:cell(plan)="data">
                    <div v-if="data.item.plan === ''">

                    </div>
                    <div v-else>
                      <button @click="showInfo(data.item)" style="font-size: smaller" class="btn btn-primary btn-sm mr-2 backColor">详情</button>
                      <button style="font-size: smaller" class="btn btn-danger btn-sm mr-2" @click="deleteCourse()">删除</button>
                    </div>
                  </template>
                  <template v-slot:cell(ppt)="data">
                    <div v-if="data.item.ppt === ''">

                    </div>
                    <div v-else>
                      <button @click="showInfo(data.item)" style="font-size: smaller" class="btn btn-primary btn-sm mr-2 backColor">详情</button>
                      <button style="font-size: smaller" class="btn btn-danger btn-sm mr-2" @click="deleteCourse()">删除</button>
                    </div>
                  </template>
                  <template v-slot:cell(Teaching_plan)="data">
                    <div v-if="data.item.Teaching_plan === ''"></div>
                    <div v-else>
                      <button @click="showInfo(data.item)" style="font-size: smaller" class="btn btn-primary btn-sm mr-2 backColor">详情</button>
                      <button style="font-size: smaller" class="btn btn-danger btn-sm mr-2" @click="deleteCourse()">删除</button>
                    </div>
                  </template>
                  <template v-slot:cell(Examination_paper)="data">
                    <div v-if="data.item.Examination_paper === ''"></div>
                    <div v-else>
                      <button @click="showInfo(data.item)" style="font-size: smaller" class="btn btn-primary btn-sm mr-2 backColor">详情</button>
                      <button style="font-size: smaller" class="btn btn-danger btn-sm mr-2" @click="deleteCourse()">删除</button>
                    </div>
                  </template>
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
        <b-modal id="editcourse" title="编辑考核成绩" size="lg">
            <template v-slot:modal-footer="{ }">
                <b-button size="sm" variant="success" @click="ok('editcourse')">
                    确定保存
                </b-button>
            </template>
            <input type="hidden" v-model="courseEdit.id" />
            <div class="container">
                <div class="row">
                    <div class="col-12 d-flex flex-row mb-2">
                        <div style="flex: none;line-height: 40px" class="mr-2">平时成绩:</div>
                        <div style="flex: 1"><input type="text" class="form-control"  /></div>
                    </div>
                    <div class="col-12 d-flex flex-row mb-2">
                        <div style="flex: none;line-height: 40px" class="mr-2">期中评价:</div>
                        <div style="flex: 1"><input type="text" class="form-control"  /></div>
                    </div>
                    <div class="col-12 d-flex flex-row mb-2">
                        <div style="flex: none;line-height: 40px" class="mr-2">期末评价:</div>
                        <div style="flex: 1"><input type="text" class="form-control" /></div>
                    </div>
                    <div class="col-12 d-flex flex-row mb-2">
                        <div style="flex: none;line-height: 40px" class="mr-2">综合评价:</div>
                        <div style="flex: 1"><input type="text" class="form-control" /></div>
                    </div>
                </div>
            </div>
        </b-modal>
        <b-modal id="addcourse" title="添加课程" size="lg">
            <template v-slot:modal-footer="{ }">
                <b-button size="sm" variant="success" @click="ok('addcourse')">
                    确定保存
                </b-button>
            </template>
            <input type="hidden" v-model="courseEdit.id" />
            <div class="container">
                <div class="row">
                    <div class="col-12 d-flex flex-row mb-2">
                        <div style="flex: none;line-height: 40px" class="mr-2">平时成绩:</div>
                        <div style="flex: 1"><input type="text" class="form-control" v-model="courseAdd.ser" /></div>
                    </div>
                    <div class="col-12 d-flex flex-row mb-2">
                        <div style="flex: none;line-height: 40px" class="mr-2">期中评价:</div>
                        <div style="flex: 1"><input type="text" class="form-control" v-model="courseAdd.corsename" /></div>
                    </div>
                    <div class="col-12 d-flex flex-row mb-2">
                        <div style="flex: none;line-height: 40px" class="mr-2">期末评价:</div>
                        <div style="flex: 1"><input type="text" class="form-control" v-model="courseAdd.major" /></div>
                    </div>
                    <div class="col-12 d-flex flex-row mb-2">
                        <div style="flex: none;line-height: 40px" class="mr-2">综合评价:</div>
                        <div style="flex: 1"><input type="text" class="form-control" v-model="courseAdd.term" /></div>
                    </div>
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body" style="background: lavender">
                                <input type="file" class="form-control-file" placeholder="选择课程文档">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </b-modal>
        <b-modal id="infocourse" title="添加详情" size="xl" scrollable>
            <template v-slot:modal-footer="{ }">
                <b-button size="sm" variant="success" @click="closeMd('infocourse')">
                    确定
                </b-button>
            </template>
            <input type="hidden" v-model="courseEdit.id" />
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h3>{{courseInfo.corsename}}</h3>
                        <div>
                            <span class="mr-3">课程编号:{{courseInfo.ser}}</span>
                            <span class="mr-3">所属专业:{{courseInfo.major}}</span>
                            <span class="mr-3">开课学期:{{courseInfo.term}}</span>
                        </div>
                    </div>
                    <iframe class="col-12" height="500px" frameborder="0" src="http://116.196.64.210:9876/resource/coursedoc/202012111548266904561.pdf">

                    </iframe>
                </div>
            </div>
        </b-modal>
        <b-modal id="importcourse" title="导入课程" size="lg">
            <template v-slot:modal-footer="{ }">
                <b-button size="sm" variant="primary">
                    下载导入模板
                </b-button>
                <b-button size="sm" variant="success" @click="ok('importcourse')">
                    确定导入
                </b-button>
            </template>
            <div class="card">
                <div class="card-body" style="background: lavender">
                    <input type="file" class="form-control-file" placeholder="选择课程文件">
                </div>
            </div>
        </b-modal>
    </div>
</template>
 <script>
import {getAllCourse} from '../../api/course'
import '../../plugins/Element'
export default {
    data () {
        return  {
            courses: [],
            courseEdit:  {id: 0, ser: '', corsename: '',term:'',major:'', },
            courseAdd:  { ser: '', corsename: '',term:'',major:'', },
            courseInfo:  { ser: '', corsename: '',term:'',major:'', },
            perPage: 10,
            currentPage: 1,
            fields: [
                {
                    key: 'ser',
                    sortable: true,
                    label: '编号',
                    thStyle: "cursor: pointer"
                },
                {
                    key: 'corsename',
                    sortable: true,
                    label: '课程名',
                    thStyle: "cursor: pointer"
                },
                {
                    key: 'term',
                    sortable: true,
                    label: '学期',
                    thStyle: "cursor: pointer"
                },
                {
                    key: 'major',
                    sortable: true,
                    label: '班级',
                    thStyle: "cursor: pointer"
                },
                {
                    key: 'name',
                    sortable: true,
                    label: '教师姓名',
                    thStyle: "cursor: pointer"
                },
              {
                key: 'number',
                sortable: true,
                label: '教师工号',
                thStyle: "cursor: pointer"
              },
              {
                key: 'plan',
                sortable: true,
                label: '教案',
                thStyle: "cursor: pointer"
              },
              {
                key: 'ppt',
                sortable: true,
                label: 'ppt',
                thStyle: "cursor: pointer"
              },
              {
                key: 'Teaching_plan',
                sortable: true,
                label: '授课计划',
                thStyle: "cursor: pointer"
              },
              {
                key: 'Examination_paper',
                sortable: true,
                label: '考卷',
                thStyle: "cursor: pointer"
              },
            ],
            items: [
                {id: 1, ser: 'COURSE0001', corsename: '测试课程1',term:'2020-09',major:'一班',name:'王五',number:'020',ppt:'dfdf', plan:'dfe',Teaching_plan:'',Examination_paper:'',},
                {id: 1, ser: 'COURSE0002', corsename: '测试课程2',term:'2020-09',major:'一班',name:'王五',number:'020',ppt:'', plan:'',Teaching_plan:'',Examination_paper:'',},
                {id: 1, ser: 'COURSE0003', corsename: '测试课程3',term:'2020-09',major:'一班',name:'王五',number:'020',ppt:'', plan:'',Teaching_plan:'',Examination_paper:'', },
                {id: 1, ser: 'COURSE0004', corsename: '测试课程4',term:'2020-09',major:'一班',name:'王五',number:'020',ppt:'', plan:'',Teaching_plan:'',Examination_paper:'', },
                {id: 1, ser: 'COURSE0005', corsename: '测试课程5',term:'2020-09',major:'一班',name:'王五',number:'020',ppt:'', plan:'',Teaching_plan:'',Examination_paper:'', },
                {id: 1, ser: 'COURSE0007', corsename: '测试课程6',term:'2020-09',major:'一班',name:'王五',number:'020',ppt:'', plan:'',Teaching_plan:'',Examination_paper:'',},
                {id: 1, ser: 'COURSE0006', corsename: '测试课程7',term:'2020-09',major:'一班',name:'王五',number:'020',ppt:'', plan:'',Teaching_plan:'',Examination_paper:'', },
                {id: 1, ser: 'COURSE0009', corsename: '测试课程8',term:'2020-09',major:'一班',name:'王五',number:'020',ppt:'', plan:'',Teaching_plan:'',Examination_paper:'', },
                {id: 1, ser: 'COURSE0008', corsename: '测试课程9',term:'2020-09',major:'一班',name:'王五',number:'020',ppt:'', plan:'',Teaching_plan:'',Examination_paper:'', },
                {id: 1, ser: 'COURSE00010', corsename: '测试课程10',term:'2020-09',major:'一班',name:'王五',number:'020',ppt:'', plan:'',Teaching_plan:'',Examination_paper:'', },
                {id: 1, ser: 'COURSE00011', corsename: '测试课程11',term:'2020-09',major:'一班',name:'王五',number:'020',ppt:'', plan:'',Teaching_plan:'',Examination_paper:'', },
                {id: 1, ser: 'COURSE00012', corsename: '测试课程12',term:'2020-09',major:'一班',name:'王五',number:'020',ppt:'', plan:'',Teaching_plan:'',Examination_paper:'', },
                {id: 1, ser: 'COURSE00013', corsename: '测试课程13',term:'2020-09',major:'一班',name:'王五',number:'020',ppt:'', plan:'',Teaching_plan:'',Examination_paper:'', },
                {id: 1, ser: 'COURSE00014', corsename: '测试课程14',term:'2020-09',major:'一班',name:'王五',number:'020',ppt:'', plan:'',Teaching_plan:'',Examination_paper:'', },
                {id: 1, ser: 'COURSE00015', corsename: '测试课程15',term:'2020-09',major:'一班',name:'王五',number:'020',ppt:'', plan:'',Teaching_plan:'',Examination_paper:'', },
            ]
        }
    },
    methods: {
        showEdit(item){
            this.courseEdit = item
            this.$bvModal.show("editcourse")
        },
        showAdd(){
            this.$bvModal.show("addcourse")
        },
        showIm(){
            this.$bvModal.show("importcourse")
        },
        showInfo(item){
          console.log(item);
          this.courseInfo = item
            this.$bvModal.show("infocourse")
        },
        ok(id){
            this.$notify.success({
                title: '提示',
                message: '保存成功！！',
                offset: 50,
            });
            this.$bvModal.hide(id)
        },
        closeMd(id){
            this.$bvModal.hide(id)
        },
        deleteCourse(){
            this.$notify.success({
                title: '提示',
                message: '删除成功！！',
                offset: 50,
            });
        }
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
</style>
