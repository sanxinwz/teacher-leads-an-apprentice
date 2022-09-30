<template>
    <div class="container-fuild bg-white w-100 p-3">
        <div class="row mb-3">
            <div class="col-12">
                <div class="title">
                    培养方案信息
                </div>
            </div>
        </div>
<!--        <div class="row">
            <div class="col-4 text-left mb-3">
                <input class="form-control" placeholder="请输入名称"/>
            </div>
            <div class="col-4 text-left mb-3">
                <input class="form-control" placeholder="请输入发布时间"/>
            </div>
            <div class="col-4 text-left mb-3">
                <a class="btn btn-success text-white mr-3" style="background-color: #1A4888">筛选</a>
            </div>
        </div>-->
<!--        <div class="row">
            <div class="col-12 text-left mb-3">
                <button @click="showAdd()" class="btn btn-sm btn-outline-primary mr-3 text-black-50"
                        style="border-color: #1A4888"><i class="fa fa-plus fa-fw mr-1"></i>上传培养方案
                </button>
                <button @click="showIm()" class="btn btn-sm btn-outline-primary text-black-50"
                        style="border-color: #1A4888"><i class="fa fa-download fa-fw mr-1"></i>批量导出
                </button>
            </div>
        </div>-->
        <div class="row" id="my-table">
            <div class="col-md-3 col-sm-6">
                <div class="major-item">
                    <div class="major-item-img"></div>
                    <div class="major-item-text">
                        专业1培养方案
                    </div>
                    <div class="major-item-btns">
                        <button @click="showInfo({coursename:'专业1培养方案'})" class="btn btn-sm btn-outline-primary mr-2">
                            详情
                        </button>
                        <button @click="showEdit(null)" class="btn btn-sm btn-outline-primary mr-2">下载</button>
                    </div>
                </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="major-item">
                <div class="major-item-img"></div>
                <div class="major-item-text">
                  专业1培养方案
                </div>
                <div class="major-item-btns">
                  <button @click="showInfo({coursename:'专业1培养方案'})" class="btn btn-sm btn-outline-primary mr-2">
                    详情
                  </button>
                  <button @click="showEdit(null)" class="btn btn-sm btn-outline-primary mr-2">下载</button>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="major-item">
                <div class="major-item-img"></div>
                <div class="major-item-text">
                  专业1培养方案
                </div>
                <div class="major-item-btns">
                  <button @click="showInfo({coursename:'专业1培养方案'})" class="btn btn-sm btn-outline-primary mr-2">
                    详情
                  </button>
                  <button @click="showEdit(null)" class="btn btn-sm btn-outline-primary mr-2">下载</button>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="major-item">
                <div class="major-item-img"></div>
                <div class="major-item-text">
                  专业1培养方案
                </div>
                <div class="major-item-btns">
                  <button @click="showInfo({coursename:'专业1培养方案'})" class="btn btn-sm btn-outline-primary mr-2">
                    详情
                  </button>
                  <button @click="showEdit(null)" class="btn btn-sm btn-outline-primary mr-2">下载</button>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="major-item">
                <div class="major-item-img"></div>
                <div class="major-item-text">
                  专业1培养方案
                </div>
                <div class="major-item-btns">
                  <button @click="showInfo({coursename:'专业1培养方案'})" class="btn btn-sm btn-outline-primary mr-2">
                    详情
                  </button>
                  <button @click="showEdit(null)" class="btn btn-sm btn-outline-primary mr-2">下载</button>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="major-item">
                <div class="major-item-img"></div>
                <div class="major-item-text">
                  专业1培养方案
                </div>
                <div class="major-item-btns">
                  <button @click="showInfo({coursename:'专业1培养方案'})" class="btn btn-sm btn-outline-primary mr-2">
                    详情
                  </button>
                  <button @click="showEdit(null)" class="btn btn-sm btn-outline-primary mr-2">下载</button>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="major-item">
                <div class="major-item-img"></div>
                <div class="major-item-text">
                  专业1培养方案
                </div>
                <div class="major-item-btns">
                  <button @click="showInfo({coursename:'专业1培养方案'})" class="btn btn-sm btn-outline-primary mr-2">
                    详情
                  </button>
                  <button @click="showEdit(null)" class="btn btn-sm btn-outline-primary mr-2">下载</button>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="major-item">
                <div class="major-item-img"></div>
                <div class="major-item-text">
                  专业1培养方案
                </div>
                <div class="major-item-btns">
                  <button @click="showInfo({coursename:'专业1培养方案'})" class="btn btn-sm btn-outline-primary mr-2">
                    详情
                  </button>
                  <button @click="showEdit(null)" class="btn btn-sm btn-outline-primary mr-2">下载</button>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="major-item">
                <div class="major-item-img"></div>
                <div class="major-item-text">
                  专业1培养方案
                </div>
                <div class="major-item-btns">
                  <button @click="showInfo({coursename:'专业1培养方案'})" class="btn btn-sm btn-outline-primary mr-2">
                    详情
                  </button>
                  <button @click="showEdit(null)" class="btn btn-sm btn-outline-primary mr-2">下载</button>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="major-item">
                <div class="major-item-img"></div>
                <div class="major-item-text">
                  专业1培养方案
                </div>
                <div class="major-item-btns">
                  <button @click="showInfo({coursename:'专业1培养方案'})" class="btn btn-sm btn-outline-primary mr-2">
                    详情
                  </button>
                  <button @click="showEdit(null)" class="btn btn-sm btn-outline-primary mr-2">下载</button>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="major-item">
                <div class="major-item-img"></div>
                <div class="major-item-text">
                  专业1培养方案
                </div>
                <div class="major-item-btns">
                  <button @click="showInfo({coursename:'专业1培养方案'})" class="btn btn-sm btn-outline-primary mr-2">
                    详情
                  </button>
                  <button @click="showEdit(null)" class="btn btn-sm btn-outline-primary mr-2">下载</button>
                </div>
              </div>
            </div>
            <div class="col-md-3 col-sm-6">
              <div class="major-item">
                <div class="major-item-img"></div>
                <div class="major-item-text">
                  专业1培养方案
                </div>
                <div class="major-item-btns">
                  <button @click="showInfo({coursename:'专业1培养方案'})" class="btn btn-sm btn-outline-primary mr-2">
                    详情
                  </button>
                  <button @click="showEdit(null)" class="btn btn-sm btn-outline-primary mr-2">下载</button>
                </div>
              </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 text-right">
                <div class="pagination text-right float-right" style="width: auto !important;">
                    <div class="page-item"><a class="page-link" href="#">«</a></div>
                    <div class="page-item"><a class="page-link" href="#">‹</a></div>
                    <div class="page-item"><a class="page-link" href="#">1</a></div>
                    <div class="page-item active"><a class="page-link" href="#">2</a></div>
                    <div class="page-item"><a class="page-link" href="#">3</a></div>
                    <div class="page-item"><a class="page-link" href="#">›</a></div>
                    <div class="page-item"><a class="page-link" href="#">»</a></div>
                </div>
            </div>
        </div>
        <b-modal id="editcourse" title="下载培养方案" size="lg">
            <template v-slot:modal-footer="{ }">
                <b-button size="sm" variant="success" style="background-color: #1A4888" @click="ok('editcourse')">
                    确定
                </b-button>
            </template>
            <input type="hidden" v-model="courseEdit.id"/>
            <div class="container">
                <div class="row">
                    确定下载该文件？
                </div>
            </div>
        </b-modal>
        <b-modal id="addcourse" title="添加培养方案" size="lg">
            <template v-slot:modal-footer="{ }">
                <b-button size="sm" variant="success" style="background-color: #1A4888" @click="ok('addcourse')">
                    确定保存
                </b-button>
            </template>
            <input type="hidden" v-model="courseEdit.id"/>
            <div class="container">
                <div class="row">
                    <div class="col-12">
                        <div class="card">
                            <div class="card-body" style="background: lavender">
                                <input type="file" class="form-control-file" placeholder="选择培养方案文档">
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
            <input type="hidden" v-model="courseEdit.id"/>
            <div class="container">
                <div class="row">
                    <div class="col-12 text-center">
                        <h3>专业1人才培养方案</h3>
                    </div>
                    <iframe class="col-12" height="500px" frameborder="0"
                            src="http://116.196.64.210:9876/resource/coursedoc/202012111548266904561.pdf">

                    </iframe>
                </div>
            </div>
        </b-modal>
        <b-modal id="importcourse" title="导出班级信息" size="lg">
            <label>确定导出？</label>
        </b-modal>
    </div>
</template>
<script>
    import {getAllCourse} from '../../../api/course'
    import '../../../plugins/Element'

    export default {
        data() {
            return {
                courses: [],
                courseEdit: {id: 0, ser: '', corsename: '', term: '', major: '',},
                courseAdd: {ser: '', corsename: '', term: '', major: '',},
                courseInfo: {ser: '', corsename: '', term: '', major: '',},
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
                    }, {
                        key: 'major',
                        sortable: true,
                        label: '专业',
                        thStyle: "cursor: pointer"
                    },
                    {
                        key: 'id',
                        label: '操作',
                    }
                ],
                items: [
                    {id: 1, ser: 'COURSE0001', corsename: '测试课程1', term: '第1学期', major: '大数据',},
                    {id: 1, ser: 'COURSE0002', corsename: '测试课程2', term: '第1学期', major: '大数据',},
                    {id: 1, ser: 'COURSE0003', corsename: '测试课程3', term: '第1学期', major: '大数据',},
                    {id: 1, ser: 'COURSE0004', corsename: '测试课程4', term: '第1学期', major: '大数据',},
                    {id: 1, ser: 'COURSE0005', corsename: '测试课程5', term: '第2学期', major: '大数据',},
                    {id: 1, ser: 'COURSE0007', corsename: '测试课程6', term: '第2学期', major: '大数据',},
                    {id: 1, ser: 'COURSE0006', corsename: '测试课程7', term: '第2学期', major: '大数据',},
                    {id: 1, ser: 'COURSE0009', corsename: '测试课程8', term: '第2学期', major: '大数据',},
                    {id: 1, ser: 'COURSE0008', corsename: '测试课程9', term: '第2学期', major: '大数据',},
                    {id: 1, ser: 'COURSE00010', corsename: '测试课程10', term: '第2学期', major: '大数据',},
                    {id: 1, ser: 'COURSE00011', corsename: '测试课程11', term: '第2学期', major: '大数据',},
                    {id: 1, ser: 'COURSE00012', corsename: '测试课程12', term: '第2学期', major: '大数据',},
                    {id: 1, ser: 'COURSE00013', corsename: '测试课程13', term: '第2学期', major: '大数据',},
                    {id: 1, ser: 'COURSE00014', corsename: '测试课程14', term: '第2学期', major: '大数据',},
                    {id: 1, ser: 'COURSE00015', corsename: '测试课程15', term: '第2学期', major: '大数据',},
                ]
            }
        },
        methods: {
            showEdit(item) {
                this.courseEdit = item
                this.$bvModal.show("editcourse")
            },
            showAdd() {
                this.$bvModal.show("addcourse")
            },
            showIm() {
                this.$bvModal.show("importcourse")
            },
            showInfo(item) {
                this.courseInfo = item
                this.$bvModal.show("infocourse")
            },
            ok(id) {
                this.$notify.success({
                    title: '提示',
                    message: '保存成功！！',
                    offset: 50,
                });
                this.$bvModal.hide(id)
            },
            closeMd(id) {
                this.$bvModal.hide(id)
            },
            deleteCourse() {
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
    .title {
        height: 30px;
        font-size: 24px;
        color: #1A4888;
        line-height: 30px;
        text-align: left;
    }

    .major-item {
        cursor: pointer;
        height: auto;
        width: 100%;
    }

    .major-item-img {
        height: 120px;
        width: 100%;
        border-radius: 5px;
        background-size: cover;
        background-image: url("../../../assets/img/1-1PG4150U1.jpg");
    }

    .major-item-text {
        text-align: left;
        color: #1A4888;
        height: 30px;
        padding: 10px 10px 0;
        line-height: 20px;
    }

    .major-item-btns {
        text-align: left;
        padding: 10px;
        margin-bottom: 10px;
    }
</style>
