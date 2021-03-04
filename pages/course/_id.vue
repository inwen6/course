<template>
  <div id="aCoursesList" class="bg-fa of">
    <!-- /课程详情 开始 -->
    <section class="container">
      <section class="path-wrap txtOf hLh30">
        <a href="#" title class="c-999 fsize14">首页</a>
        \
        <a href="#" title class="c-999 fsize14">{{courseWebVo.subjectLevelOne}}</a>
        \
        <span class="c-333 fsize14">{{courseWebVo.subjectLevelTwo}}</span>
      </section>
      <div>
        <article class="c-v-pic-wrap" style="height: 357px;">
          <section class="p-h-video-box" id="videoPlay">
            <img height="357px" :src="course.courseImage" :alt="course.courseName" class="dis c-v-pic">
          </section>
        </article>
        <div class="clear"></div>
      </div>
      <!-- /课程封面介绍 -->
      <div class="mt20 c-infor-box">
        <article class="fl col-7">
          <section class="mr30">
            <div class="i-box">
              <div>
                <section id="c-i-tabTitle" class="c-infor-tabTitle c-tab-title">
                  <a name="c-i" class="current" title="课程详情">课程详情</a>
                </section>
              </div>
              <article class="ml10 mr10 pt20">
                <div>
                  <h6 class="c-i-content c-infor-title">
                    <span>课程介绍</span>
                  </h6>
                  <div class="course-txt-body-wrap">
                    <section class="course-txt-body">
                      <!-- <p v-html="courseWebVo.description">{{courseWebVo.description}}</p> -->
                      <p>{{course.courseDesc}}</p>
                    </section>
                  </div>
                </div>
                <!-- /课程介绍 -->
                <div class="mt50">
                  <h6 class="c-g-content c-infor-title">
                    <span>课程大纲</span>
                  </h6>
                  <section class="mt20">
                    <div class="lh-menu-wrap">
                      <menu id="lh-menu" class="lh-menu mt10 mr10">
                        <ul>
                          <!-- 文件目录 -->
                          <li class="lh-menu-stair" v-for="chapter in chapterVideoList" :key="chapter.courseId">
                            <!-- <a href="javascript: void(0)" :title="chapter.chapterName" class="current-1">
                              <em class="lh-menu-i-1 icon18 mr10"></em>{{chapter.chapterName}}
                            </a> -->
                            <ol style="display: block;" class="lh-menu-ol">
                              <li class="lh-menu-second ml30">
                                <a :href="'/player/'+chapter.chapterId" target="_blank">
                                  <span class="fr">
                                    <i class="free-icon vam mr10 blue-btn" v-if="existChapterId(chapter.chapterId)">已学习</i>
                                  </span>
                                  <span class="fr">
                                    <i class="free-icon vam mr10">免费观看</i>
                                  </span>
                                  <em class="lh-menu-i-2 icon16 mr5" >&nbsp;</em>{{chapter.chapterName}}
                                </a>
                              </li>
                            </ol>

                          </li>
                        </ul>
                      </menu>
                    </div>
                  </section>
                </div>
                <!-- /课程大纲 -->
              </article>
            </div>
          </section>
        </article>
        <aside class="fl col-3">
          <div class="i-box">
            <div>
              <section class="c-infor-tabTitle c-tab-title">
                <a title href="javascript:void(0)">主讲讲师</a>
              </section>
              <section class="stud-act-list">
                <ul style="height: auto;">
                  <li>
                    <div class="u-face">
                      <a href="#">
                        <img :src="teacher.teacherCardAvatar" width="50" height="50" alt>
                      </a>
                    </div>
                    <section class="hLh30 txtOf">
                      <a class="c-333 fsize16 fl" href="#">{{teacher.teacherCardName}}</a>
                    </section>
                    <section class="hLh20 txtOf">
                      <span class="c-999">{{teacher.teacherCardDesc}}</span>
                    </section>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </aside>
        <div class="clear"></div>
      </div>
    </section>
    <!-- /课程详情 结束 -->
  </div>
</template>

<script>
import courseApi from '@/api/course'
import orderApi from '@/api/orders'
export default {
   asyncData({ params, error }) {
    return {courseId:params.id}
   },

   data(){
     return {
       courseWebVo: {},
       chapterVideoList: [],
       isBuy: false,
       course:'',
       teacher:'',
       studyList:{},
       readlist:[]
     }
   },

  //在页面渲染之前执行
  created(){
      this.initCourseInfo()
  },

  methods:{
      //生成订单
      createOrders(){
        orderApi.createOrders(this.courseId)
          .then(response => {
              //获取返回的订单号
              //生成订单之后，跳转到订单显示页面
              this.$router.push({path:'/orders/'+response.data.data.orderNo})
          })
      },
      existChapterId(chapterId){
        for (var i = 0; i < this.readlist.length; i++) {
          if(this.readlist[i].chapterId==chapterId){
            return true
          }
        }
        return false
      },
      //保存学生学习记录

      saveStudyList(){
       sessionStorage.setItem("studyList",JSON.stringify(this.studyList))
      },
      initCourseInfo(){
        // 查询章节
         courseApi.getAllchapter({page:1,size:99,courseId:this.courseId})
            .then(response =>{
              this.chapterVideoList = response.data.data.list
              sessionStorage.setItem('VideoList',JSON.stringify(response.data.data.list))
              this.saveStudyList()
            })
        // 查询课程详情
         courseApi.getcourse(this.courseId)
            .then(response =>{
              console.log(response)
              this.course = response.data.data
             // 查询讲师详情
              courseApi.getTeacher(this.course.courseAuthorId)
                .then(response =>{
                  this.teacher=response.data.data
                  console.log(this.teacher)
                })
            })
         //查询学生学习列表
            courseApi.getStudyList().then(res=>{
              this.readlist = res.data.data

            })


      }
  }
};
</script>
<style scoped="scoped">
.read{
  background-color: #f00;
}
</style>
