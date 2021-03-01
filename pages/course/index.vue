<template>
  <div id="aCoursesList" class="bg-fa of">
    <section class="no-data-wrap" v-if="!data">
      <em class="icon30 no-data-ico">&nbsp;</em>
      <span class="c-666 fsize14 ml10 vam">没有相关数据，小编正在努力整理中...</span>
    </section>
    <!-- /课程列表 开始 -->
    <section class="container">
      <header class="comm-title">
        <h2 class="fl tac">
          <span class="c-333">全部课程</span>
        </h2>
      </header>
      <section class="c-sort-box">
        <div class="mt40">
      
          <!-- /无数据提示 结束-->
          <article  v-if="data.length>0" class="comm-course-list">
            <ul class="of" id="bna">
              <li v-for="item in data" :key="item.courseId">
                <div class="cc-l-wrap">
                  <section class="course-img">
                    <img :src="item.courseImage" class="img-responsive" :alt="item.courseName">
                    <div class="cc-mask">
                      <a :href="'/course/'+item.courseId" title="开始学习" class="comm-btn c-btn-1">开始学习</a>
                    </div>
                  </section>
                  <h3 class="hLh30 txtOf mt10" align="center">
                    <a :href="'/course/'+item.courseId" :title="item.courseName" class="course-title fsize18 c-333">{{item.courseName}}</a>
                  </h3>
                  <p class="txt-title" align="center">
                    课时数:{{item.courseHour}}   讲师:{{item.authorName}}
                  </p>
                </div>
              </li>

            </ul>
            <div class="clear"></div>
          </article>
        </div>
        <!-- 公共分页 开始 -->
        <div>
      <div class="paging">
        <!-- undisable这个class是否存在，取决于数据属性hasPrevious -->
        <!-- <a
          :class="{undisable: !data.hasPrevious}"
          href="#"
          title="首页"
          @click.prevent="gotoPage(1)">首</a>
        <a
          :class="{undisable: !data.hasPrevious}"
          href="#"
          title="前一页"
          @click.prevent="gotoPage(data.current-1)">&lt;</a>
        <a
          v-for="page in data.pages"
          :key="page"
          :class="{current: data.current == page, undisable: data.current == page}"
          :title="'第'+page+'页'"
          href="#"
          @click.prevent="gotoPage(page)">{{ page }}</a>
        <a
          :class="{undisable: !data.hasNext}"
          href="#"
          title="后一页"
          @click.prevent="gotoPage(data.current+1)">&gt;</a>
        <a
          :class="{undisable: !data.hasNext}"
          href="#"
          title="末页"
          @click.prevent="gotoPage(data.pages)">末</a>
        <div class="clear"/> -->
      </div>
    </div>
      </section>
    </section>
    <!-- /课程列表 结束 -->
  </div>
</template>
<script>
import courseApi from '@/api/course'

export default {
  data() {
    return {
      page:1, //当前页
      data:{},  //课程列表
      subjectNestedList: [], // 一级分类列表
      subSubjectList: [], // 二级分类列表

      searchObj: {}, // 查询表单对象

      oneIndex:-1,
      twoIndex:-1,
      buyCountSort:"",
      gmtCreateSort:"",
      priceSort:"",
      queryParams:{
        page:1,
        size:999
      }
    }
  },
  created() {
    //课程第一次查询
    this.initCourseFirst()
    //一级分类显示
    this.initSubject()
  },
  methods:{
    //1 查询第一页数据
    initCourseFirst() {
      courseApi.getallcourse(this.queryParams).then(response => {
        console.log(response.data.data.list)
        this.data = response.data.data.list
      })
    },

    //2 查询所有一级分类
    initSubject() {
      courseApi.getAllSubject()
        .then(response => {
          this.subjectNestedList = response.data.data.items
        })
    },

    //3 分页切换的方法
    gotoPage(page) {
      courseApi.getFrontCourseList(page,8,this.searchObj).then(response => {
        this.data = response.data.data
      })
    },

    //4 点击某个一级分类，查询对应二级分类
    searchOne(subjectParentId,index) {
      //把传递index值赋值给oneIndex,为了active样式生效
      this.oneIndex = index

      this.twoIndex = -1
      this.searchObj.subjectId = ""
      this.subSubjectList = []

      //把一级分类点击id值，赋值给searchObj
      this.searchObj.subjectParentId = subjectParentId
      //点击某个一级分类进行条件查询
      this.gotoPage(1)

      //拿着点击一级分类id 和 所有一级分类id进行比较，
      //如果id相同，从一级分类里面获取对应的二级分类
      for(let i=0;i<this.subjectNestedList.length;i++) {
        //获取每个一级分类
        var oneSubject = this.subjectNestedList[i]
        //比较id是否相同
        if(subjectParentId == oneSubject.id) {
          //从一级分类里面获取对应的二级分类
          this.subSubjectList = oneSubject.children
        }
      }
    },

    //5 点击某个二级分类实现查询
    searchTwo(subjectId,index) {
      //把index赋值,为了样式生效
      this.twoIndex = index
      //把二级分类点击id值，赋值给searchObj
      this.searchObj.subjectId = subjectId
      //点击某个二级分类进行条件查询
      this.gotoPage(1)
    },

    //6 根据销量排序
    searchBuyCount() {
      //设置对应变量值，为了样式生效
      this.buyCountSort = "1"
      this.gmtCreateSort = ""
      this.priceSort = ""

      //把值赋值到searchObj
      this.searchObj.buyCountSort = this.buyCountSort
      this.searchObj.gmtCreateSort = this.gmtCreateSort;
      this.searchObj.priceSort = this.priceSort;

      //调用方法查询
      this.gotoPage(1)
    },

    //7 最新排序
    searchGmtCreate() {
      //设置对应变量值，为了样式生效
      this.buyCountSort = ""
      this.gmtCreateSort = "1"
      this.priceSort = ""

      //把值赋值到searchObj
      this.searchObj.buyCountSort = this.buyCountSort
      this.searchObj.gmtCreateSort = this.gmtCreateSort;
      this.searchObj.priceSort = this.priceSort;

      //调用方法查询
      this.gotoPage(1)
    },

    //8 价格排序
    searchPrice() {
      //设置对应变量值，为了样式生效
      this.buyCountSort = ""
      this.gmtCreateSort = ""
      this.priceSort = "1"

      //把值赋值到searchObj
      this.searchObj.buyCountSort = this.buyCountSort
      this.searchObj.gmtCreateSort = this.gmtCreateSort;
      this.searchObj.priceSort = this.priceSort;

      //调用方法查询
      this.gotoPage(1)
    }

  }
};
</script>
<style scoped>
  .active {
    background: #bdbdbd;
  }
  .hide {
    display: none;
  }
  .show {
    display: block;
  }
  .txt-title{
    color: #777777;
  }
</style>
