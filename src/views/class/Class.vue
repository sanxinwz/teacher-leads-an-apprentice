<template>
    <div class="container-fuild bg-white w-100 p-3">
        <div class="row mb-3">
            <div class="col-12">
                <div class="title">
                    班级管理
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-3 text-left mb-3">
                <input class="form-control" placeholder="输入专业" />
            </div>
            <div class="col-3 text-left mb-3">
                <input class="form-control" placeholder="输入入学时间" />
            </div>
            <div class="col-3 text-left mb-3">
                <input class="form-control" placeholder="输入班级名" />
            </div>
            <div class="col-2 text-left mb-3">
                <a class="btn btn-success text-white mr-3" style="background-color: #1A4888">筛选</a>
            </div>
        </div>
        <div class="col-12 text-left mb-3">
          <button @click="showAdd()" class="btn btn-sm btn-outline-primary text-black-50 mr-3" style="border-color: #1A4888"><i class="fa fa-plus fa-fw mr-1"></i>添加</button>
          <button @click="showIm()" class="btn btn-sm btn-outline-primary text-black-50" style="border-color: #1A4888"><i class="fa fa-upload fa-fw mr-1"></i>数据导出</button>
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
                    <template v-slot:cell(id)="data">
                        <button  @click="showEdit(data.item)" class="btn btn-success btn-sm mr-2" style="background-color: #1A4888"><i class="fa fa-edit fa-fw mr-1"></i>修改</button>
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
        <b-modal id="editcourse" title="班级添加/详情/修改" size="lg">
            <template v-slot:modal-footer="{ }">
                <b-button size="sm" variant="success" style="background-color: #1A4888" @click="ok('editcourse')">
                    确定保存
                </b-button>
            </template>
            <input type="hidden" v-model="courseEdit.id" />
            <div class="container">
                <div class="row">
                    <div class="col-12 d-flex flex-row mb-2">
                        <div style="flex: none;line-height: 40px" class="mr-2">班级编号:</div>
                        <div style="flex: 1"><input type="text" class="form-control" v-model="courseEdit.ser" /></div>
                    </div>
                    <div class="col-12 d-flex flex-row mb-2">
                        <div style="flex: none;line-height: 40px" class="mr-2">班级名称:</div>
                        <div style="flex: 1"><input type="text" class="form-control" v-model="courseEdit.corsename" /></div>
                    </div>
                    <div class="col-12 d-flex flex-row mb-2">
                        <div style="flex: none;line-height: 40px" class="mr-2">专业:</div>
                        <div style="flex: 1"><input type="text" class="form-control" v-model="courseEdit.major" /></div>
                    </div>
                    <div class="col-12 d-flex flex-row mb-2">
                        <div style="flex: none;line-height: 40px" class="mr-2">入学时间:</div>
                        <div style="flex: 1"><input type="text" class="form-control" v-model="courseEdit.term" /></div>
                    </div>
                    <div class="col-12">
                    <div class="card">
                      <div class="card-body" style="background: lavender">
                        <label>请选择学生名册</label>
                        <input type="file" class="form-control-file" style="background-color: #FFFFFF" placeholder="选择课程文档">
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </b-modal>
        <b-modal id="addcourse" title="批量添加" size="lg">
            <template v-slot:modal-footer="{ }">
                <b-button size="sm" variant="success" style="background-color: #1A4888" @click="ok('addcourse')">
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
        <b-modal id="importcourse" title="导出班级信息" size="lg">
          <label>确定导出？</label>
        </b-modal>
    </div>
</template>
<script>
import {getAllCourse} from '../../api/course'
import '../../plugins/Element'
export default {
    data () {
        return {
            courses: [],
            courseEdit:  {id: 0, ser: '', classname: '',term:'',major:'', },
            courseAdd:  { ser: '', classname: '',term:'',major:'', },
            courseInfo:  { ser: '', classname: '',term:'',major:'', },
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
                    key: 'classname',
                    sortable: true,
                    label: '班级名',
                    thStyle: "cursor: pointer"
                },
                {
                    key: 'major',
                    sortable: true,
                    label: '专业',
                    thStyle: "cursor: pointer"
                },{
                    key: 'time',
                    sortable: true,
                    label: '入学时间',
                    thStyle: "cursor: pointer"
                },
                {
                    key: 'id',
                    label: '操作',
                }
            ],
            items: [
                {id: 1, ser: 'COURSE0001', classname: '测试课程1',term:'2020-09',major:'大数据', },
                {id: 1, ser: 'COURSE0002', classname: '测试课程2',term:'2020-09',major:'大数据', },
                {id: 1, ser: 'COURSE0003', classname: '测试课程3',term:'2020-09',major:'大数据', },
                {id: 1, ser: 'COURSE0004', classname: '测试课程4',term:'2020-09',major:'大数据', },
                {id: 1, ser: 'COURSE0005', classname: '测试课程5',term:'2020-09',major:'大数据', },
                {id: 1, ser: 'COURSE0007', classname: '测试课程6',term:'2020-09',major:'大数据', },
                {id: 1, ser: 'COURSE0006', classname: '测试课程7',term:'2020-09',major:'大数据', },
                {id: 1, ser: 'COURSE0009', classname: '测试课程8',term:'2020-09',major:'大数据', },
                {id: 1, ser: 'COURSE0008', classname: '测试课程9',term:'2020-09',major:'大数据', },
                {id: 1, ser: 'COURSE00010', classname: '测试课程10',term:'2020-09',major:'大数据', },
                {id: 1, ser: 'COURSE00011', classname: '测试课程11',term:'2020-09',major:'大数据', },
                {id: 1, ser: 'COURSE00012', classname: '测试课程12',term:'2020-09',major:'大数据', },
                {id: 1, ser: 'COURSE00013', classname: '测试课程13',term:'2020-09',major:'大数据', },
                {id: 1, ser: 'COURSE00014', classname: '测试课程14',term:'2020-09',major:'大数据', },
                {id: 1, ser: 'COURSE00015', classname: '测试课程15',term:'2020-09',major:'大数据', },
            ]
        }
    },
    methods: {
        showEdit(item){
            this.courseEdit = item
            this.$bvModal.show("editcourse")
        },
        showAdd(){
            this.$bvModal.show("editcourse")
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
        },
      fileChange() {
        try {
          const fu = document.getElementById('file')
          if (fu == null) return
          this.form.imgSavePath = fu.files[0].path
          console.log(fu.files[0].path)
        } catch (error) {
          console.debug('choice file err:', error)
        }
      },
      btnChange() {

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
</style>
