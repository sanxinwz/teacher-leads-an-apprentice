<template>
    <div class="container-fuild bg-white w-100 p-3">
        <div class="row mb-3">
            <div class="col-12">
                <div class="title">
                    教材管理
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-3 text-left mb-3">
                <input class="form-control" placeholder="请输入名称" />
            </div>
            <div class="col-3 text-left mb-3">
                <select class="form-control">
                  <option value="" style="display: none;" disabled selected>请选择课程</option>
                  <option>测试1课程</option>
                </select>
            </div>
            <div class="col-2 text-left mb-3">
                <select class="form-control">
                  <option value="" style="display: none;" disabled selected>请选择学期</option>
                    <option>2020-09</option>
                </select>
            </div>
            <div class="col-2 text-left mb-3">
              <input class="form-control" placeholder="请输入教材编号" />
            </div>
            <div class="col-2 text-left mb-3">
                <a class="btn btn-success text-white mr-3" style="background-color: #1A4888">筛选</a>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-left mb-3">
                <button @click="showAdd()" class="btn btn-sm btn-outline-primary mr-3 text-black-50" style="border-color: #1A4888"><i class="fa fa-plus fa-fw mr-1"></i>新增教材</button>
                <button @click="showIm()" class="btn btn-sm btn-outline-primary text-black-50" style="border-color: #1A4888"><i class="fa fa-upload fa-fw mr-1"></i>批量导入</button>
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
                        <button  @click="showEdit(data.item)" class="btn btn-success btn-sm mr-2" style="background-color: #1A4888"><i class="fa fa-edit fa-fw mr-1"></i>编辑</button>
                        <button @click="showInfo(data.item)" class="btn btn-success btn-sm mr-2" style="background-color: #1A4888"><i class="fa fa-info-circle fa-fw mr-1"></i>详情</button>
                        <button class="btn btn-danger btn-sm mr-2" @click="deleteTextBook()"><i class="fa fa-close fa-fw mr-1"></i>删除</button>
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
        <b-modal id="edittextbook" title="编辑教材" size="lg">
            <template v-slot:modal-footer="{ }">
                <b-button size="sm" variant="success" style="background-color: #1A4888" @click="ok('edittextbook')">
                    确定保存
                </b-button>
            </template>
            <input type="hidden" v-model="courseEdit.id" />
            <div class="container">
                <div class="row">
                    <div class="col-12 d-flex flex-row mb-2">
                        <div style="flex: none;line-height: 40px" class="mr-2">教材编号:</div>
                        <div style="flex: 1"><input type="text" class="form-control" /></div>
                    </div>
                    <div class="col-12 d-flex flex-row mb-2">
                        <div style="flex: none;line-height: 40px" class="mr-2">教材名称:</div>
                        <div style="flex: 1"><input type="text" class="form-control" v-model="courseEdit.corsename" /></div>
                    </div>
                    <div class="col-12 d-flex flex-row mb-2">
                        <div style="flex: none;line-height: 40px" class="mr-2">所属课程:</div>
                        <div style="flex: 1"><input type="text" class="form-control" v-model="courseEdit.major" /></div>
                    </div>
                    <div class="col-12 d-flex flex-row mb-2">
                        <div style="flex: none;line-height: 40px" class="mr-2">开课学期:</div>
                        <div style="flex: 1"><input type="text" class="form-control" v-model="courseEdit.term" /></div>
                    </div>
                    <div class="col-12">
                    <div class="card">
                      <div class="card-body" style="background: lavender">
                        <input type="file" class="form-control-file" placeholder="选择教材文档">
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </b-modal>
        <b-modal id="addtextbook" title="添加教材" size="lg">
            <template v-slot:modal-footer="{ }">
                <b-button size="sm" variant="success" style="background-color: #1A4888" @click="ok('addtextbook')">
                    确定保存
                </b-button>
            </template>
            <input type="hidden" v-model="courseEdit.id" />
            <div class="container">
                <div class="row">
                    <div class="col-12 d-flex flex-row mb-2">
                        <div style="flex: none;line-height: 40px" class="mr-2">教材编号:</div>
                        <div style="flex: 1"><input type="text" class="form-control" v-model="courseAdd.ser" /></div>
                    </div>
                    <div class="col-12 d-flex flex-row mb-2">
                        <div style="flex: none;line-height: 40px" class="mr-2">教材名称:</div>
                        <div style="flex: 1"><input type="text" class="form-control" v-model="courseAdd.corsename" /></div>
                    </div>
                    <div class="col-12 d-flex flex-row mb-2">
                        <div style="flex: none;line-height: 40px" class="mr-2">所属课程:</div>
                        <div style="flex: 1"><input type="text" class="form-control" v-model="courseAdd.major" /></div>
                    </div>
                    <div class="col-12 d-flex flex-row mb-2">
                        <div style="flex: none;line-height: 40px" class="mr-2">开课学期:</div>
                        <div style="flex: 1"><input type="text" class="form-control" v-model="courseAdd.term" /></div>
                    </div>
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body" style="background: lavender">
                                <input type="file" class="form-control-file" placeholder="选择教材文档">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </b-modal>
        <b-modal id="infotextbook" title="添加详情" size="xl" scrollable>
            <template v-slot:modal-footer="{ }">
                <b-button size="sm" variant="success" style="background-color: #1A4888" @click="closeMd('infotextbook')">
                    确定
                </b-button>
            </template>
            <input type="hidden" v-model="courseEdit.id" />
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h3>{{courseInfo.corsename}}</h3>
                        <div>
                            <span class="mr-3">教材编号:{{courseInfo.ser}}</span>
                            <span class="mr-3">所属课程:{{courseInfo.major}}</span>
                            <span class="mr-3">开课学期:{{courseInfo.term}}</span>
                        </div>
                    </div>
                    <iframe class="col-12" height="500px" frameborder="0" src="http://116.196.64.210:9876/resource/coursedoc/202012111548266904561.pdf">

                    </iframe>
                </div>
            </div>
        </b-modal>
        <b-modal id="importtextbook" title="导入教材" size="lg">
            <template v-slot:modal-footer="{ }">
                <b-button size="sm" variant="success" style="background-color: #1A4888">
                    下载导入模板
                </b-button>
                <b-button size="sm" variant="success" style="background-color: #1A4888" @click="ok('importtextbook')">
                    确定导入
                </b-button>
            </template>
            <div class="card">
                <div class="card-body" style="background: lavender">
                    <input type="file" class="form-control-file" placeholder="选择教材文件">
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
        return {
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
                    label: '名称',
                    thStyle: "cursor: pointer"
                },
                {
                    key: 'term',
                    sortable: true,
                    label: '开课学期',
                    thStyle: "cursor: pointer"
                },{
                    key: 'major',
                    sortable: true,
                    label: '课程',
                    thStyle: "cursor: pointer"
                },
                {
                    key: 'id',
                    label: '操作',
                }
            ],
            items: [
                {id: 1, ser: 'COURSE0001', corsename: '测试教材1',term:'2020-09',major:'大数据实战', },
                {id: 1, ser: 'COURSE0002', corsename: '测试教材2',term:'2020-09',major:'大数据', },
                {id: 1, ser: 'COURSE0003', corsename: '测试教材3',term:'2020-09',major:'大数据', },
                {id: 1, ser: 'COURSE0004', corsename: '测试教材4',term:'2020-09',major:'大数据', },
                {id: 1, ser: 'COURSE0005', corsename: '测试教材5',term:'2020-09',major:'大数据', },
                {id: 1, ser: 'COURSE0007', corsename: '测试教材6',term:'2020-09',major:'大数据', },
                {id: 1, ser: 'COURSE0006', corsename: '测试教材7',term:'2020-09',major:'大数据', },
                {id: 1, ser: 'COURSE0009', corsename: '测试教材8',term:'2020-09',major:'大数据', },
                {id: 1, ser: 'COURSE0008', corsename: '测试教材9',term:'2020-09',major:'大数据', },
                {id: 1, ser: 'COURSE00010', corsename: '测试教材10',term:'2020-09',major:'大数据', },
                {id: 1, ser: 'COURSE00011', corsename: '测试教材11',term:'2020-09',major:'大数据', },
                {id: 1, ser: 'COURSE00012', corsename: '测试教材12',term:'2020-09',major:'大数据', },
                {id: 1, ser: 'COURSE00013', corsename: '测试教材13',term:'2020-09',major:'大数据', },
                {id: 1, ser: 'COURSE00014', corsename: '测试教材14',term:'2020-09',major:'大数据', },
                {id: 1, ser: 'COURSE00015', corsename: '测试教材15',term:'2020-09',major:'大数据', },
            ]
        }
    },
    methods: {
        showEdit(item){
            this.courseEdit = item
            this.$bvModal.show("edittextbook")
        },
        showAdd(){
            this.$bvModal.show("addtextbook")
        },
        showIm(){
            this.$bvModal.show("importtextbook")
        },
        showInfo(item){
            this.courseInfo = item
            this.$bvModal.show("infotextbook")
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
        deleteTextBook(){
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
</style>
