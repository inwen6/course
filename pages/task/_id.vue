<template>
  <div class="Content ">
      <h1 class="head" style="background-color: #409EFF;color: #FFFFFF;">作业</h1>
      <client-only>
        <el-card>
          <div style="margin-left: 20px;"><h1>作业题目:</h1>{{task.taskTitle}}</div>
          <div style="margin-left: 20px;"><h1 >作业内容</h1></div>
          <div style="margin-left: 20px;" v-html="task.taskContent"></div>
        </el-card>
        <el-card>
            <h1>教师评价:</h1>{{taskUser.taskUserReply}}
        </el-card>
        <el-card>
          <editor v-model="taskUser.taskUserContent" :min-height="192" />
          <el-button style="margin-top: 20px;" type="primary" @click="submit">提交作业</el-button>
        </el-card>
      </client-only>
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
    console.log(params.id,'asyncData')
     return {chapter:params.id}
    },
    
    created(){
      
    },
    mounted() {
      this.initTask();
    },
    watch:{
      chapter(){
        console.log('hahahha')
        this.initTask()
      }
    },
    methods:{
      initTask(){  
          console.log(this.chapter,'initTask')
          courseApi.getTasks({chapterId:this.chapter}).then(response => {
            this.task = response.data.data.tbTask
            this.taskUser = response.data.data.taskUser
          })
      },
      submit(){
        let obj = Object.assign(this.taskUser,{chapterId:this.chapter})
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
