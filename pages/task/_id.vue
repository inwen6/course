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
        <el-input
          type="textarea"
          :rows="2"
          placeholder="请输入内容"
          v-model="taskUser.taskUserContent">
        </el-input>
        <el-button style="margin-top: 20px;" type="primary">提交作业</el-button>
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
     return {chapterId:params.id}
    },
    mounted() {
      this.initTask();

    },
    methods:{
      initTask(){
          courseApi.getTasks({chapterId:this.chapterId}).then(response => {
            this.task = response.data.data.tbTask

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
