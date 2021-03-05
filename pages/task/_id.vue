<template>
  <div class="Content ">
      <h1 class="head" style="background-color: #409EFF;color: #FFFFFF;">作业</h1>
      <el-card>
        <div style="margin-left: 20px;"><h1>作业题目:</h1>{{task.taskTitle}}</div>
        <div style="margin-left: 20px;"><h1 >作业内容</h1></div>
        <div style="margin-left: 20px;" v-html="task.taskContent"></div>
      </el-card>
      <el-card>
          <h1>教师评价:</h1>{{taskUser.taskUserReply}}
      </el-card>
      <el-card>  
        <!-- <editor v-model="taskUser.taskUserContent" :min-height="192" />  -->
        <el-button style="margin-top: 20px;" type="primary" @click="submit">提交作业</el-button>
      </el-card>
  </div>
</template>

<script>
  import courseApi from '@/api/course' 
  export default{
    data(){
      return{
        task:{},
        taskUser:{}
      }
    },
    asyncData({ params, error }) { //服务端执行
     return {chapter:params.id}
    },
    mounted() {
      this.initTask();

    },
    methods:{
      initTask(){
          courseApi.getTasks({chapterId:this.chapter.chapterId}).then(response => {
            this.task = response.data.data.tbTask
          })
      },
      submit(){
        let obj = Object.assign(this.task,{chapterId:this.chapter.chapterId})
          courseApi.addTasks(obj).then(response => {
            // this.task = response.data.data.tbTask
            alert(response.data.message)
          })
      }
    }
  }
</script>

<style scoped="scoped">
  h1{
    font-size: 18px;
    color: #985054;
  }
</style>
