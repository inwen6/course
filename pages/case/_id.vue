<template>
  <div>
    <!--中间布局-->
    <div class="wrapper activities">
      <div class="img-text">
        <div class="left-img">
          <img src="../../assets/img/widget-acti.png" alt="" />
        </div>
        <div class="right-txt ">
          <p class="big">发布时间： {{case1.createTime ? case1.createTime : new Date()}}</p>
          <p>举办地点： 深圳市华侨城洲际酒店</p>
<!--         <p>报名截止： <span class="big">85</span>天 <span class="big">15</span>时 <span class="big">16</span>分 <span class="big">10</span>秒</p>
 -->        <!--  <div class="join">
            <button class="sui-btn btn-danger">立即报名</button>
          </div> -->
        </div>
      </div>
      <div class="simple-text">
        <div class="left-content">
          <div class="content-item">
            <div class="tit">
              <span>大会介绍</span>
            </div>
           <div v-html="case1.caseContent" class="text">

            </div>
          </div>
        </div>
        <div class="right-intro">
          <div class="content-item">
            <div class="tit">
              <span>活动组织者</span>
            </div>
           <div class="text">
              <p>主办方： {{case1.authorName ? case1.authorName :' 瑞视云智'}} </p>
            </div>
          </div>
          <div class="content-item">
            <div class="tit">
              <span>相关链接</span>
            </div>
            <div class="text">
              <p>活动官网： infoQ.com</p>
            </div>
          </div>
          <div class="content-item">
            <div class="tit">
              <span>分享扩散</span>
            </div>
            <div class="text">
              <p><img src="../../assets/img/widget-weixin.png" alt="" width="30" /><img src="../../assets/img/erweima.png"
                  alt="" width="30" /></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        case1:{}
      }
    },
    asyncData({ params, error }) { //服务端执行
     return {caseId:params.id}
    },
    mounted() {
      let arr = JSON.parse(sessionStorage.getItem("caseList"));
      for (var i = 0; i < arr.length; i++) {
          if(arr[i].caseId==this.caseId){
            this.case1=arr[i]
            console.log(this.case1)
          }
      }

    },
    methods:{

    }
  }
</script>

<style>
  @charset "UTF-8";
  /*
   * colors variables
   */
  /*
   * colors variables
   */
  html, body {
    height: 100%;
    background-color: #f5f5f5;
    font-family: "微软雅黑";
  }

  .wrapper {
    overflow: hidden;
    position: relative;
    margin: 0 auto;
  }

  @media (min-width: 1200px) {
    .wrapper {
      width: 1170px;
    }
  }

  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    .wrapper {
      width: 1000px;
    }
  }

  @media (max-width: 1024px) {
    .wrapper {
      width: 800px;
    }
  }

  h2 {
    font-size: 18px;
    margin: 0;
  }

  h3 {
    font-size: 16px;
    margin: 0;
  }

  h4 {
    font-size: 14px;
    margin: 0;
  }

  h5 {
    font-size: 12px;
    margin: 0;
  }

  p {
    margin: 0;
  }

  .fl {
    float: left;
  }

  .fr {
    float: right;
  }

  i {
    font-style: normal;
  }

  /*
   * colors variables
   */
  .img-text {
    margin-bottom: 10px;
    overflow: hidden;
    background: #fff;
  }

  .img-text .left-img {
    float: left;
  }

  .img-text .right-txt {
    float: left;
    padding: 25px;
  }

  .img-text .right-txt p {
    font-size: 16px;
    color: #666;
    line-height: 28px;
  }

  .img-text .right-txt p .big {
    font-size: 20px;
  }

  .img-text .right-txt .join {
    margin: 10px 0;
    font-size: 16px;
  }

  .img-text .right-txt .join .sui-btn {
    padding: 7px 24px;
    font-size: 16px;
    font-family: 'Microsoft Yahei';
  }

  .img-text .right-txt .join .will {
    padding-left: 20px;
    line-height: 32px;
    color: #555;
  }

  /*
   * colors variables
   */
  .simple-text .content-item {
    margin-bottom: 10px;
    background: #fff;
  }

  .simple-text .content-item .tit {
    padding-top: 18px;
    margin-bottom: 5px;
    font-size: 18px;
  }

  .simple-text .content-item .tit span {
    padding-left: 20px;
    font-size: 18px;
    border-left: 2px solid #e64620;
    color: #e64620;
  }

  .simple-text .content-item .text {
    padding: 10px 22px;
    line-height: 26px;
  }

  .simple-text .content-item .text h4 {
    font-weight: normal;
    font-size: 15px;
  }

  .simple-text .content-item .text p {
    font-size: 14px;
  }

  .simple-text .content-item .text img {
    margin-right: 10px;
  }

  .simple-text .content-item .sui-form {
    margin-top: 25px;
    margin-bottom: 5px;
    overflow: hidden;
  }

  .simple-text .content-item .sui-form img {
    border-radius: 5px;
  }

  .simple-text .content-item .sui-form .controls {
    padding-left: 15px;
  }

  .simple-text .content-item .sui-form .controls .input-xxlarge {
    width: 700px;
    box-shadow: none;
  }

  .simple-text .content-item .sui-form .sui-btn {
    float: right;
    padding: 6px 20px;
    margin-right: 38px;
    margin-top: 10px;
    font-family: 'Microsoft Yahei';
    font-size: 15px;
  }

  .simple-text .content-item.comment {
    padding-bottom: 10px;
  }

  .simple-text .left-content {
    float: left;
    margin-right: 20px;
  }

  @media (min-width: 1200px) {
    .simple-text .left-content {
      width: 860px;
    }
  }

  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    .simple-text .left-content {
      width: 680px;
    }
  }

  @media (max-width: 1024px) {
    .simple-text .left-content {
      width: 550px;
    }
  }

  .simple-text .right-intro {
    float: left;
  }

  @media (min-width: 1200px) {
    .simple-text .right-intro {
      width: 290px;
    }
  }

  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    .simple-text .right-intro {
      width: 230px;
    }
  }

  @media (max-width: 1024px) {
    .simple-text .right-intro {
      width: 165px;
    }
  }

  .activity-head {
    margin-bottom: 10px;
    box-shadow: 0 0 4px 1px #ccc;
    background-color: #fff;
  }

  .activity-head .sui-form input {
    height: 33px !important;
    border: 1px solid #ccc !important;
  }

  .footer {
    margin-top: 15px;
    border-top: 1px solid #e6e6e6;
  }
</style>
