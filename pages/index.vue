<template>

  <div>
    <!-- 幻灯片 开始 -->
  <div v-swiper:mySwiper="swiperOption">
      <div class="swiper-wrapper">

          <div v-for="banner in bannerList" :key="banner.id" class="swiper-slide" style="background: #040B1B;">
              <a target="_blank" :href="banner.linkUrl">
                  <img :src="banner.imageUrl" :alt="banner.title">
              </a>
          </div>
      </div>
      <div class="swiper-pagination swiper-pagination-white"></div>
      <div class="swiper-button-prev swiper-button-white" slot="button-prev"></div>
      <div class="swiper-button-next swiper-button-white" slot="button-next"></div>
  </div>
  <!-- 幻灯片 结束 -->

     <div id="aCoursesList">
      <!-- 网校课程 开始 -->
      <div>
        <section class="container">
          <header class="comm-title">
            <h2 class="tac">
              <span class="c-333">热门课程</span>
            </h2>
          </header>
          <div>
            <article class="comm-course-list">
              <ul class="of" id="bna">
                <li v-for="course in eduList" :key="course.id">
                  <div class="cc-l-wrap">
                    <section class="course-img">
                      <img
                        :src="course.courseImage"
                        class="img-responsive"
                        :alt="course.title"
                      >
                      <div class="cc-mask">
                           <a :href="'/course/'+course.courseId" title="开始学习" class="comm-btn c-btn-1">开始学习</a>
                      </div>
                    </section>
                    <h3 class="hLh30 txtOf mt10" >
                       <a :href="'/course/'+course.courseId" :title="course.courseName" class="course-title fsize18 c-333">{{course.courseName}}</a>
                    </h3>
                    <section class="mt10 hLh20 of" align="center">
                      <span class="fr jgTag bg-green" v-if="Number(course.price) === 0">
                        <i class="c-fff fsize12 f-fA">免费</i>
                      </span>
                      <span class="fl jgAttr c-ccc f-fA">
                        <i class="c-999 f-fA">讲师:{{course.authorName}}</i>
                        |
                        <i class="c-999 f-fA">课时数:{{course.courseHour}}</i>
                      </span>
                    </section>
                  </div>
                </li>

              </ul>
              <div class="clear"></div>
            </article>
            <section class="tac pt20">
              <a href="/course" title="全部课程" class="comm-btn c-btn-2">全部课程</a>
            </section>
          </div>
        </section>
      </div>
      <!-- /网校课程 结束 -->
      <!-- 网校名师 开始 -->
      <div>
        <section class="container">
          <header class="comm-title">
            <h2 class="tac">
              <span class="c-333">名师大咖</span>
            </h2>
          </header>
          <div>
            <article class="i-teacher-list">
              <ul class="of">
                <li v-for="teacher in teacherList" :key="teacher.id">
                  <section class="i-teach-wrap">
                    <div class="i-teach-pic">
                      <a :href="'/teacher/'+teacher.id" :title="teacher.name">
                        <img :alt="teacher.name" :src="teacher.avatar">
                      </a>
                    </div>
                    <div class="mt10 hLh30 txtOf tac">
                      <a :href="'/teacher/'+teacher.id" :title="teacher.name" class="fsize18 c-666">{{teacher.name}}</a>
                    </div>
                    <div class="hLh30 txtOf tac">
                      <span class="fsize14 c-999">{{teacher.career}}</span>
                    </div>
                    <div class="mt15 i-q-txt">
                      <p
                        class="c-999 f-fA"
                      >{{teacher.intro}}</p>
                    </div>
                  </section>
                </li>

              </ul>
              <div class="clear"></div>
            </article>
            <section class="tac pt20">
              <a href="/teacher" title="全部讲师" class="comm-btn c-btn-2">全部讲师</a>
            </section>
          </div>
        </section>
      </div>
      <!-- /网校名师 结束 -->
    </div>
  </div>
</template>

<script>
import banner from '@/api/banner'
import {courseList} from '@/api/index'

export default {
  data () {
    return {

      swiperOption: {
        //配置分页
        pagination: {
          el: '.swiper-pagination'//分页的dom节点
        },
        //配置导航
        navigation: {
          nextEl: '.swiper-button-next',//下一页dom节点
          prevEl: '.swiper-button-prev'//前一页dom节点
        }
      },
      //banner数组
      bannerList:[{
        id:1,
        linkUrl:'http://www.atguigu.com/images/index_banner/wuhan.png',
        imageUrl:"http://www.atguigu.com/images/index_banner/wuhan.png",
        title:'xxxx'
      },{
        id:1,
        linkUrl:'http://www.atguigu.com/images/index_banner/wuhan.png',
        imageUrl:"http://www.atguigu.com/images/index_banner/wuhan.png",
        title:'xxxx'
      },],
      eduList:[{
        id:1,
        courseImage:'https://www.gulixueyuan.com/files/default/2018/06-15/0918146150a9565117.jpg',
        courseName:'这是标题',
        price:122,
        buyCount:20,
        viewCount:100
      } ],
      teacherList:[{
        id:1,
        name:'肖王巴',
        avatar:'https://www.gulixueyuan.com/files/default/2018/06-15/091541d6ddbd512267.jpg',
        career:'职业',
        intro:'这是介绍'
      },{
        id:1,
        name:'肖王巴',
        avatar:'https://www.gulixueyuan.com/files/default/2018/06-15/091541d6ddbd512267.jpg',
        career:'职业',
        intro:'这是介绍'
      },{
        id:1,
        name:'肖王巴',
        avatar:'https://www.gulixueyuan.com/files/default/2018/06-15/091541d6ddbd512267.jpg',
        career:'职业',
        intro:'这是介绍'
      },{
        id:1,
        name:'肖王巴',
        avatar:'https://www.gulixueyuan.com/files/default/2018/06-15/091541d6ddbd512267.jpg',
        career:'职业',
        intro:'这是介绍'
      }],
      // 查询参数
      queryParams: {
        page: 1,
        size: 4
      },
    }
  },
  created() {
    //调用查询banner的方法
    // this.getBannerList()
    //调用查询热门课程和名师的方法
    this.getHotCourseTeacher()
  },
  methods:{
    //查询热门课程和名师
    getHotCourseTeacher() {
      courseList(this.queryParams).then(response => {
        console.log(response)
          this.eduList = response.data.data.list
          // this.teacherList = response.data.data.teacherList
        })
    },
    //查询banner数据
    getBannerList() {
      banner.getListBanner()
        .then(response => {
          this.bannerList = response.data.data.list
        })
    }
  }
}
</script>
