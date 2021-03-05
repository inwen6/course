<template>
  <div class="Content">
    <h1>请选择作业所属课程</h1>
    <el-card class="couse-list" v-for="course in courseList" v-bind:key="course.courseId">
      {{course.courseName}}
      <button type="default" class="Right" @click="showChapter(course.courseId)">查看章节</button>
    </el-card>
    <el-card class="chapter-list "  v-if="showDialog">
         <h1>选择作业所属章节 <el-button class="Right" type="danger " @click="closeChapter()" round>关闭</el-button></h1>
        <ul v-if="chapterList">
            <li v-for="chapter in chapterList" v-bind:key="chapter.chapterId"><a :href="'/task/'+chapter.chapterId" >{{chapter.chapterName}}</a></li>
        </ul>

      <button type="default" class="Right" @click="showChapter(course)">查看章节</button>
    </el-card>
  <!--  <el-card class="chapter-list "  v-if="showDialog">
         <h1>选择作业所属章节 <el-button class="Right" type="danger " @click="closeChapter()" round>关闭</el-button></h1>
        <ul>
            <li v-for="chapter in chapterList" v-bind:key="chapter.chapterId">
              <a :href="'/task/'+chapter.chapterId" >{{chapter.chapterName}}</a>
              <p @click="routerJump(chapter)">{{chapter.chapterName}}</p>
            </li>
        </ul>

    </el-card> -->
  </div>
</template>

<script>
  import courseApi from '@/api/course'

  export default {
    data() {
      return {
        showDialog:false,
        data: [{
          label: '一级 1',
          children: [{
            label: '二级 1-1'
          }]
        }],
        courseList: [],
        queryParams: {
          page: 1,
          size: 99
        },
        chapterList: [],
        defaultProps: {
          children: 'children',
          label: 'courseName'
        },
        teacherId:''
      };
    },
    mounted() {
      this.showDialog=false
      courseApi.getallcourse(this.queryParams).then(response => {
        this.courseList = response.data.data.list

      })
    },
    methods: {
      routerJump(row){
        row.teacherId = this.teacherId
        this.$router.push({
          name: 'task-id',params:{id:row}
        })
      },
      showChapter(course){
        this.teacherId = course.courseAuthorId || ''
          this.showDialog=true
          this.chapterList=""
          courseApi.getAllchapter({page:1,size:99,courseId:course.courseId})
             .then(response =>{
               this.chapterList = response.data.data.list

             })
      },
      closeChapter(){
        this.showDialog=false
      }
    }
  };
</script>

<style scoped="scoped">
  .couse-list {
    margin: 20px;
  }

  h1 {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    font-size: 24px;
    margin-left: 40px;

  }

  a{
    color: #FFFFFF;
    margin: 20px;
    padding: 10px;
    font-size: 18px;
    font-weight: 400;
      font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
   }


  .chapter-list{
    position: absolute;
    z-index: 10;
    width: 90%;
    height: 400px;
    background-color: #409EFF;
    left:0; right:0; top:0; bottom:0;
    margin:auto;
    color: #FFFFFF;
    padding: 20px;
    overflow-y: auto;
  }
  .el-card__body{
    height: 100%;
  }



</style>
