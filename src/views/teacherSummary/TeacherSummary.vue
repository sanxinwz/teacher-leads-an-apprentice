<template>
    <div class="container-fuild bg-white w-100 p-3">
        <div class="row mb-3">
            <div class="col-12">
                <div class="title">
                    师傅总结报告
                </div>
            </div>
        </div>
        <div class="row">
           <div class="col-3 text-left mb-3">
                <select class="form-control">
                  <option value="" style="display: none;" disabled selected>请选择课程</option>
                  <option>测试课程1</option>  <option>测试课程2</option>
                </select>
            </div>
            <div class="col-2 text-left mb-3">
                <select class="form-control">
                  <option value="" style="display: none;" disabled selected>请选择专业</option>
                    <option>物联网工程</option>   <option>通信工程</option>
                </select>
            </div>
            <div class="col-2 text-left mb-3">
                            <select class="form-control">
                              <option value="" style="display: none;" disabled selected>请选择开学学期</option>
                                <option>2020-09</option>   <option>2019-09</option>
                            </select>
                        </div>
            <div class="col-2 text-left mb-3">
                                        <select class="form-control">
                                          <option value="" style="display: none;" disabled selected>请选择指导教师</option>
                                            <option>王五</option>
                                        </select>
                                    </div>
            <div class="col-2 text-left mb-3">
                <a class="btn btn-success text-white mr-3 backColor">筛选</a>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-left mb-3">
              <button @click="selectAll()" class="btn btn-sm btn-outline-primary mr-3"  style="border-color: #1A4888"><i class="fa fa-check fa-fw mr-1"></i>{{allSelect}}</button>
              <button @click="showIm()" class="btn btn-sm btn-outline-primary "><i class="fa fa-upload fa-fw mr-1"></i>数据导出</button>
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
                  <template v-slot:cell(selected)="data">
                    <b-checkbox v-model=data.item.select></b-checkbox>
                  </template>
                    <template v-slot:cell(id)="data">
                        <button @click="showInfo(data.item)" class="btn btn-primary btn-sm mr-2  backColor"><i class="fa fa-info-circle fa-fw mr-1"></i>详情</button>
                        <button class="btn btn-danger btn-sm mr-2" @click="deleteCourse()"><i class="fa fa-close fa-fw mr-1"></i>删除</button>
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
        <b-modal id="editcourse" title="编辑课程" size="lg">
            <template v-slot:modal-footer="{ }">
                <b-button size="sm" variant="success" @click="ok('editcourse')">
                    确定保存
                </b-button>
            </template>
            <input type="hidden" v-model="courseEdit.id" />
            <div class="container">
                <div class="row">
                    <div class="col-12 d-flex flex-row mb-2">
                        <div style="flex: none;line-height: 40px" class="mr-2">课程编号:</div>
                        <div style="flex: 1"><input type="text" class="form-control" v-model="courseEdit.ser" /></div>
                    </div>
                    <div class="col-12 d-flex flex-row mb-2">
                        <div style="flex: none;line-height: 40px" class="mr-2">课程名称:</div>
                        <div style="flex: 1"><input type="text" class="form-control" v-model="courseEdit.corsename" /></div>
                    </div>
                    <div class="col-12 d-flex flex-row mb-2">
                        <div style="flex: none;line-height: 40px" class="mr-2">所属专业:</div>
                        <div style="flex: 1"><input type="text" class="form-control" v-model="courseEdit.major" /></div>
                    </div>
                    <div class="col-12 d-flex flex-row mb-2">
                        <div style="flex: none;line-height: 40px" class="mr-2">开课学期:</div>
                        <div style="flex: 1"><input type="text" class="form-control" v-model="courseEdit.term" /></div>
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
                        <div style="flex: none;line-height: 40px" class="mr-2">课程编号:</div>
                        <div style="flex: 1"><input type="text" class="form-control" v-model="courseAdd.ser" /></div>
                    </div>
                    <div class="col-12 d-flex flex-row mb-2">
                        <div style="flex: none;line-height: 40px" class="mr-2">课程名称:</div>
                        <div style="flex: 1"><input type="text" class="form-control" v-model="courseAdd.corsename" /></div>
                    </div>
                    <div class="col-12 d-flex flex-row mb-2">
                        <div style="flex: none;line-height: 40px" class="mr-2">所属专业:</div>
                        <div style="flex: 1"><input type="text" class="form-control" v-model="courseAdd.major" /></div>
                    </div>
                    <div class="col-12 d-flex flex-row mb-2">
                        <div style="flex: none;line-height: 40px" class="mr-2">开课学期:</div>
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
        <b-modal id="infocourse" title="总结详情" size="xl" scrollable>
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
        <b-modal id="importcourse" title="数据导出" size="lg">
          <template v-slot:modal-footer="{ }">
            <b-button size="sm" variant="success" @click="ok('importcourse')" style="background-color: #1A4888">
              确定导出
            </b-button>
          </template>
          <div >
            确定导出选定的内容？
          </div>
        </b-modal>
    </div>
</template>
<script>
import {getAllCourse} from '../../api/course'
import '../../plugins/Element'
export default {
    data () {
        return {
          allSelect:'全选',
            courses: [],
            courseEdit:  {id: 0, ser: '', corsename: '',term:'',major:'',don:'',jobnumber:'',uploadtime:'', },
            courseAdd:  { ser: '', corsename: '',term:'',major:'',don:'',jobnumber:'',uploadtime:'', },
            courseInfo:  { ser: '', corsename: '',term:'',major:'',don:'',jobnumber:'',uploadtime:'', },
            perPage: 10,
            currentPage: 1,
            fields: [
              {
                key:'selected',
                label: '选择'
              },
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
                    label: '专业',
                    thStyle: "cursor: pointer"
                },{
                    key: 'major',
                    sortable: true,
                    label: '开学学期',
                    thStyle: "cursor: pointer"
                },
                {
                    key: 'don',
                    sortable: true,
                    label: '指导教师',
                    thStyle: "cursor: pointer"
                },
                {
                    key: 'jobnumber',
                    sortable: true,
                    label: '工号',
                    thStyle: "cursor: pointer"
                },
                {
                    key: 'uploadtime',
                    sortable: true,
                    label: '上传时间',
                    thStyle: "cursor: pointer"
                },
                {
                    key: 'id',
                    label: '操作',
                }
            ],
            items: [
                {id: 1, select:false, ser: 'COURSE0001', corsename: '测试课程1',term:'物联网工程',major:'2020-09',don:'王五',jobnumber:'001',uploadtime:'2020-09', },
                {id: 1, select:false, ser: 'COURSE0002', corsename: '测试课程2',term:'物联网工程',major:'2020-09',don:'王五',jobnumber:'001',uploadtime:'2020-09', },
                {id: 1, select:false,ser: 'COURSE0003', corsename: '测试课程3',term:'物联网工程',major:'2020-09',don:'王五',jobnumber:'001',uploadtime:'2020-09', },
                {id: 1, select:false, ser: 'COURSE0004', corsename: '测试课程4',term:'物联网工程',major:'2020-09',don:'王五',jobnumber:'001',uploadtime:'2020-09', },
                {id: 1, select:false, ser: 'COURSE0005', corsename: '测试课程5',term:'物联网工程',major:'2020-09',don:'王五',jobnumber:'001',uploadtime:'2020-09', },
                {id: 1, select:false, ser: 'COURSE0007', corsename: '测试课程6',term:'物联网工程',major:'2020-09',don:'王五',jobnumber:'001',uploadtime:'2020-09', },
                {id: 1, select:false, ser: 'COURSE0006', corsename: '测试课程7',term:'物联网工程',major:'2020-09',don:'王五',jobnumber:'001',uploadtime:'2020-09', },
                {id: 1, select:false, ser: 'COURSE0009', corsename: '测试课程8',term:'物联网工程',major:'2020-09',don:'王五',jobnumber:'001',uploadtime:'2020-09', },
                {id: 1, select:false, ser: 'COURSE0008', corsename: '测试课程9',term:'物联网工程',major:'2020-09',don:'王五',jobnumber:'001',uploadtime:'2020-09', },
                {id: 1, select:false, ser: 'COURSE00010', corsename: '测试课程10',term:'物联网工程',major:'2020-09',don:'王五',jobnumber:'001',uploadtime:'2020-09', },
                {id: 1, select:false, ser: 'COURSE00011', corsename: '测试课程11',term:'物联网工程',major:'2020-09',don:'王五',jobnumber:'001',uploadtime:'2020-09', },
                {id: 1, select:false, ser: 'COURSE00012', corsename: '测试课程12',term:'物联网工程',major:'2020-09',don:'王五',jobnumber:'001',uploadtime:'2020-09', },
                {id: 1, select:false, ser: 'COURSE00013', corsename: '测试课程13',term:'物联网工程',major:'2020-09',don:'王五',jobnumber:'001',uploadtime:'2020-09', },
                {id: 1, select:false, ser: 'COURSE00014', corsename: '测试课程14',term:'物联网工程',major:'2020-09',don:'王五',jobnumber:'001',uploadtime:'2020-09', },
                {id: 1, select:false, ser: 'COURSE00015', corsename: '测试课程15',term:'物联网工程',major:'2020-09',don:'王五',jobnumber:'001',uploadtime:'2020-09', },
            ]
        }
    },
    methods: {
      selectAll(){
        if(this.$data.allSelect === '全选'){
          for(let item of this.$data.items){
            item.select = true
          }
          this.$data.allSelect = '取消全选'
        }else{
          for(let item of this.$data.items){
            item.select = false
          }
          this.$data.allSelect = '全选'
        }

      },
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
