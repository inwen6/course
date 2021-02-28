<template>
  <div class="wrapper">
     <div class="fl left-list ">
        <div class="tit">
         <span>职位描述</span>
        </div>
        <div class="content">
         <p>我们提供：</p>
         <p>富有市场竞争力的薪水；</p>
         <p>一套程序猿的顶级梦幻装备， 一台顶级CPU+大内存+SSD台式机+护眼显示屏，一把舒适的人体工程学座椅；</p>
         <p>一群聪明欢乐的小伙伴们；</p>
         <p>顶级IT创业公司提供的大平台，丰富的晋升机制；</p>
         <p>提供独立的单身公寓，空调热水。</p>
         <p>提供五险，双休和法定假日休假</p>
        </div>
        <div class="tit">
         <span>职位要求</span>
        </div>
        <div class="content">
         <p>对新技术有好奇心, 学习能力强, 良好的英文资料阅读能力</p>
         <p>熟悉面向对象编程, 有良好的编程⻛格和习惯.</p>
         <p>良好的团队合作精神和沟通能力，勤奋上进</p>
         <p>熟练使用PHP, 熟悉symfony/laravel优先.</p>
         <p>熟悉HTML/CSS/JS, 懂vuejs优先.</p>
         <p>熟悉 Linux/Mac 开发环境</p>
         <p>熟悉 MySQL 数据库，掌握 MongoDB, Redis 等 NoSQL</p>
         <p>熟悉git协作</p>
         <p>*我们是正域团队,，我们正在做一件改变行业的事情，</p>
         <p>如果你激情四射、胆大有料、敢想敢干、协作一流， 立刻加入我们！</p>
        </div>
        <div class="time">
         发布于1小时前
        </div>
       </div>

  </div>
</template>

<script>
</script>

<style scoped="scoped">
  @charset "UTF-8";
  /*
   * colors variables
   */
  /*
   * colors variables
   */


  .wrapper {
    height: 100%;
    background-color: #f5f5f5;
    font-family: "微软雅黑";
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
  .hot-company .mail {
    line-height: 36px;
    padding: 0 10px;
    background-color: #e1e1e1;
    color: #999;
    font-size: 14px;
  }

  .hot-company .company {
    background-color: #fff;
  }

  .hot-company .company .head {
    padding-top: 15px;
  }

  .hot-company .company .head h4 {
    border-left: 2px solid #55cbc4;
    padding-left: 15px;
    font-size: 16px;
    color: #55cbc4;
  }

  .hot-company .company .company {
    padding: 10px;
  }

  .hot-company .company .company .company-item {
    font-family: "微软雅黑";
    text-align: center;
    border-bottom: 1px solid #f5f5f5;
    margin-bottom: 10px;
  }

  .hot-company .company .company .company-item p {
    line-height: 24px;
  }

  .hot-company .company .company .company-item .title {
    font-size: 16px;
    font-weight: bold;
  }

  .hot-company .company .company .company-item .position {
    font-size: 14px;
    color: #e64620;
  }

  .hot-company .company .company .company-item .position a {
    color: #e64620;
    text-decoration: none;
  }

  /*
   * colors variables
   */
  .job-intro {
    padding: 15px 0;
  }

  .job-intro .left-img {
    float: left;
    margin-right: 15px;
    border: 1px solid #e1e1e1;
  }

  .job-intro .middle-intro {
    float: left;
  }

  .job-intro .middle-intro div {
    line-height: 28px;
  }

  .job-intro .middle-intro .name {
    font-size: 20px;
  }

  .job-intro .middle-intro .intro {
    font-size: 16px;
  }

  .job-intro .middle-intro .tag {
    margin-top: 10px;
  }

  .job-intro .middle-intro .tag li {
    display: inline-block;
    background-color: #e1ecf4;
    border-radius: 5px;
    margin-right: 8px;
    list-style: none;
    color: #39739d;
    padding: 2px 4px;
    font-size: 12px;
  }

  .job-intro .middle-intro .link {
    line-height: 32px;
  }

  .job-intro .middle-intro .link a {
    color: #55cbc4;
    font-size: 16px;
  }

  .job-intro .right-tool {
    float: right;
    margin-right: 15px;
  }

  .job-intro .right-tool .throw {
    margin-bottom: 10px;
  }

  .job-intro .right-tool .sui-btn {
    font-size: 14px;
    font-family: 'Microsoft Yahei';
  }

  .job-intro .right-tool .btn-throw {
    background-color: #55cbc4;
    color: #fff;
    padding: 4px 25px;
    border-radius: 4px;
  }

  .job-intro .right-tool .btn-collect {
    background-color: #fff;
    color: #55cbc4;
    border-color: #55cbc4;
    padding: 4px 32px;
  }

  .job-intro .right-tool span {
    color: #999;
    font-size: 14px;
    vertical-align: middle;
    padding-right: 5px;
    padding-left: 3px;
  }

  /*
   * colors variables
   */
  .company-job .intro {
    text-align: center;
  }

  .company-job .intro img {
    border: 1px solid #e1e1e1;
  }

  .company-job .intro .title {
    font-size: 20px;
    line-height: 40px;
  }

  .company-job .intro .content {
    text-align: left;
    font-size: 14px;
    line-height: 28px;
  }

  .company-job .tag {
    margin-top: 10px;
  }

  .company-job .tag li {
    color: #55cbc4;
    border: 1px solid #55cbc4;
    font-size: 16px;
    display: inline-block;
    padding: 4px 10px;
    border-radius: 15px;
    margin-right: 10px;
    margin-bottom: 10px;
  }

  .company-job .btns {
    margin-top: 10px;
  }

  .company-job .btns .sui-btn {
    padding: 5px 20px;
    border-radius: 4px;
    margin-right: 18px;
    color: #fff;
    border: 0;
    font-family: 'Microsoft Yahei';
    font-size: 14px;
  }

  .company-job .btns .btn-home {
    background-color: #5bc0de;
  }

  .company-job .btns .btn-position {
    background-color: #f0ad4e;
  }

   .tit {
    font-size: 18px;
    color: #55cbc4;
    margin-bottom: 10px;
  }

   .tit span {
    padding-left: 22px;
    border-left: 2px solid #55cbc4;
  }

  .tag-item .left-list {
    margin-right: 10px;
    padding-top: 20px;
    padding-bottom: 20px;
    background: #fff;
  }

  .tag-item .left-list .content {
    padding: 0 22px;
    margin-bottom: 15px;
    font-size: 14px;
    line-height: 26px;
  }

  .tag-item .left-list .time {
    padding-left: 22px;
    font-size: 16px;
    color: #999;
  }

  @media (min-width: 1200px) {
    .tag-item .left-list {
      width: 850px;
    }
  }

  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    .tag-item .left-list {
      width: 700px;
    }
  }

  @media (max-width: 1024px) {
    .tag-item .left-list {
      width: 590px;
    }
  }

  .tag-item .right-tag {
    padding: 20px;
    background: #fff;
  }

  @media (min-width: 1200px) {
    .tag-item .right-tag {
      width: 260px;
    }
  }

  @media only screen and (min-width: 1024px) and (max-width: 1200px) {
    .tag-item .right-tag {
      width: 240px;
    }
  }

  @media (max-width: 1024px) {
    .tag-item .right-tag {
      width: 150px;
    }
  }

  .footer {
    margin-top: 15px;
    border-top: 1px solid #e6e6e6;
  }

</style>
