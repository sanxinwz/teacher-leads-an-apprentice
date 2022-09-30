<template>
    <div class="container-fuild bg-white w-100 p-3">
        <div class="row mb-3">
            <div class="col-12">
                <div class="title">
                    学生选课情况
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-3 text-left mb-3">
                <input class="form-control" placeholder="请输入专业" />
            </div>
            <div class="col-3 text-left mb-3">
                <select class="form-control">
                  <option value="" style="display: none;" disabled selected>请输入学期</option>
                  <option>21年</option>
                  <option>22年</option>
                </select>
            </div>
            <div class="col-2 text-left mb-3">
              <input class="form-control" placeholder="请输入班级名" />
            </div>
            <div class="col-2 text-left mb-3">
            <a class="btn btn-success text-white mr-3" style="background-color: #1A4888">筛选</a>
          </div>
        </div>
        <div class="row">
            <div class="col-12 text-left mb-3">
                <button @click="showIm()" class="btn btn-sm btn-outline-primary text-black-50" style="border-color: #1A4888"><i class="fa fa-upload fa-fw mr-1"></i>数据导出</button>
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
                    <template v-slot:cell(id)="data">
                        <button  @click="showEdit(data.item)" class="btn btn-success btn-sm mr-2" style="background-color: #1A4888"><i class="fa fa-edit fa-fw mr-1"></i>修改/查看</button>
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
        <b-modal id="editcourse" title="修改/查看" size="lg">
            <template v-slot:modal-footer="{ }">
                <b-button size="sm" variant="success" @click="ok('editcourse')" style="background-color: #1A4888">
                    确定保存
                </b-button>
            </template>
            <input type="hidden" v-model="courseEdit.id" />
            <div class="container">
                <div class="row">
                    <div class="col-12 d-flex flex-row mb-2">
                        <div style="flex: none;line-height: 40px" class="mr-2">班级名称:</div>
                        <div style="flex: 1"><input type="text" class="form-control" v-model="courseEdit.classname" /></div>
                    </div>
                    <div class="col-12 d-flex flex-row mb-2">
                        <div style="flex: none;line-height: 40px" class="mr-2">专业名称:</div>
                        <div style="flex: 1"><input type="text" class="form-control" v-model="courseEdit.major" /></div>
                    </div>
                    <div class="col-12 d-flex flex-row mb-2">
                        <div style="flex: none;line-height: 40px" class="mr-2">入学时间:</div>
                        <div style="flex: 1"><input type="text" class="form-control" v-model="courseEdit.term" /></div>
                    </div>
                    <div class="col-12 d-flex flex-row mb-2">
                      <div style="flex: none;line-height: 40px" class="mr-2" >可选课程总量:</div>
                      <div style="flex: .3"><input type="number" class="form-control" v-model="courseNumbers.totle" /></div>
                      <div style="flex: none;line-height: 40px" class="mr-2">已选课程总量:</div>
                      <div style="flex: .3"><input type="number" class="form-control" v-model="courseNumbers.selected" /></div>
                      <div style="flex: none;line-height: 40px" class="mr-2">需选课程总量:</div>
                      <div style="flex: .3"><input type="number" class="form-control" v-model="courseNumbers.must" /></div>
                    </div>
                </div>
                    <div class="col-12 d-flex flex-row mb-2">
                        <div v-for="item in courses" v-bind:key="item.id" class="mr-3">
<!--                          <input type="checkbox" @change="changed($event)">{{item.name}}-->
                          <b-checkbox v-on:change="changed($event)">{{item.name}}</b-checkbox>
                        </div>
                    </div>
            </div>
        </b-modal>
        <b-modal id="importcourse" title="数据导出" size="lg">
          <template v-slot:modal-footer="{ }">
            <b-button size="sm" variant="success" @click="ok('importcourse')" style="background-color: #1A4888">
              确定导出
            </b-button>
          </template>
          <div>
              确定导出所选内容？
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
            courses: [{id:0,name:'大数据'}, {id:1,name:'嵌入式'}, {id:2,name:'物联网应用'}, {id:3,name:'人工智能'}, {id:4,name:'编程基础'}],
            courseEdit:  {id: 0, classname: '', major: '',term:'',should:'',been:'',need:'',},
            courseAdd:  { classname: '', major: '',term:'',should:'', been:'',need:'',},
            courseInfo:  { classname: '', major: '',term:'',should:'', been:'',need:'',},
            perPage: 10,
            courseNumbers:{selected:0,must:10,totle:13},
            currentPage: 1,
            fields: [
                {
                    key: 'classname',
                    sortable: true,
                    label: '班级名',
                    thStyle: "cursor: pointer"
                },
                {
                    key: 'major',
                    sortable: true,
                    label: '专业名称',
                    thStyle: "cursor: pointer"
                },
                {
                    key: 'term',
                    sortable: true,
                    label: '入学时间',
                    thStyle: "cursor: pointer"
                },{
                    key: 'should',
                    sortable: true,
                    label: '应选课程数量',
                    thStyle: "cursor: pointer"
                },
              {
                key: 'been',
                sortable: true,
                label: '已选课程数量',
                thStyle: "cursor: pointer"
              },
              {
                key: 'need',
                sortable: true,
                label: '需选课程数量',
                thStyle: "cursor: pointer"
              },
                {
                    key: 'id',
                    label: '编辑',
                }
            ],
            items: [
                {id: 1, classname: 'class0001', major: '大数据',term:'2020-09',should:'10',been:'6', need:'4',  },
                {id: 1, classname: 'class0002', major: '大数据',term:'2020-09',should:'10', been:'6', need:'4',},
                {id: 1, classname: 'class0003', major: '大数据',term:'2020-09',should:'10', been:'6', need:'4',},
                {id: 1, classname: 'class0004', major: '大数据',term:'2020-09',should:'10', been:'6', need:'4',},
                {id: 1, classname: 'class0005', major: '大数据',term:'2020-09',should:'10', been:'6', need:'4',},
                {id: 1, classname: 'class0006', major: '大数据',term:'2020-09',should:'10', been:'6', need:'4',},
                {id: 1, classname: 'class0007', major: '大数据',term:'2020-09',should:'10', been:'6', need:'4',},
                {id: 1, classname: 'class0008', major: '大数据',term:'2020-09',should:'10', been:'6', need:'4',},
                {id: 1, classname: 'class0009', major: '大数据',term:'2020-09',should:'10', been:'6', need:'4',},
                {id: 1, classname: 'class0010', major: '大数据',term:'2020-09',should:'10', been:'6', need:'4',},
                {id: 1, classname: 'class0011', major: '大数据',term:'2020-09',should:'10', been:'6', need:'4',},
                {id: 1, classname: 'class0012', major: '大数据',term:'2020-09',should:'10',been:'6', need:'4', },
                {id: 1, classname: 'class0013', major: '大数据',term:'2020-09',should:'10', been:'6', need:'4',},
                {id: 1, classname: 'class0014', major: '大数据',term:'2020-09',should:'10', been:'6', need:'4',},
                {id: 1, classname: 'class0015', major: '大数据',term:'2020-09',should:'10',been:'6', need:'4', },
            ]
        }
    },
    methods: {
        showEdit(item){
            this.courseEdit = item
          this.$data.courseNumbers.selected = item.been
          console.log(this.$data.courseNumbers.selected);
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
        changed(event){
          this.$data.courseNumbers.selected = this.courseEdit.been
          if(event){
            this.$data.courseNumbers.selected++;
          }else{
            this.$data.courseNumbers.selected--;
          }
          this.courseEdit.been = this.$data.courseNumbers.selected
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
