<template>
  <div class="in-wrap">
    <!-- 公共头引入 -->
    <header id="header">
      <section class="container">
        <h1 id="logo">
          <a href="#" title="瑞视云智">
            <img src="../assets/img/loading.gif" width="100%" alt="瑞视云智">
          </a>
        </h1>
        <div class="h-r-nsl">
          <ul class="nav">
            <router-link to="/" tag="li" active-class="current" exact>
              <a>首页</a>
            </router-link>
            <router-link to="/course" tag="li" active-class="current linkStyle">
              <a>教学</a>
              <div class="positionsDiv">
                <router-link tag="div" to="/course">课程</router-link>
                <router-link tag="div" to="/task">作业</router-link>
              </div>
            </router-link>
            <router-link to="/activity" tag="li" active-class="current linkStyle">
              <a>学工</a>

              <div class="positionsDiv">
                <router-link tag="div" to="/course">满意度</router-link>
                <router-link tag="div" to="/">考勤</router-link>
                <router-link tag="div" to="/course">演讲</router-link>
                <router-link tag="div" to="/case">活动</router-link>
              </div>

            </router-link>
            <router-link to="/jobs" tag="li" active-class="current">
              <a>就业</a>

              <div class="positionsDiv">
                <router-link tag="div" to="/jobs">资讯</router-link>
                <router-link tag="div" to="/activity">活动</router-link>
                <router-link tag="div" to="/case">案例</router-link>
              </div>

            </router-link>
          </ul>
          <ul class="h-r-login">
            <li v-if="!loginInfo.avatar" id="no-login">
              <a href="/login" title="登录">
                <em class="icon18 login-icon">&nbsp;</em>
                <span class="vam ml5">登录</span>
              </a>
              <!-- |
              <a href="/register" title="注册">
                <span class="vam ml5">注册</span>
              </a> -->
            </li>
            <li v-if="loginInfo.avatar" id="is-login-one" class="mr10">
              <a id="headerMsgCountId" href="#" title="消息">
                <em class="icon18 news-icon">&nbsp;</em>
              </a>
              <q class="red-point" style="display: none">&nbsp;</q>
            </li>
            <li v-if="loginInfo.avatar" id="is-login-two" class="h-r-user">
              <a href="/ucenter" title>
                <img :src="loginInfo.avatar" width="30" height="30" class="vam picImg" alt>
                <span id="userName" class="vam disIb">{{ loginInfo.nickname }}</span>
              </a>
              <a href="javascript:void(0);" title="退出" @click="logout()" class="ml5">退出</a>
            </li>
            <!-- /未登录显示第1 li；登录后显示第2，3 li -->
          </ul>
          <!-- <aside class="h-r-search">
            <form action="#" method="post">
              <label class="h-r-s-box">
                <input type="text" placeholder="输入你想学的课程" name="queryCourse.courseName" value>
                <button type="submit" class="s-btn">
                  <em class="icon18">&nbsp;</em>
                </button>
              </label>
            </form>
          </aside> -->
        </div>
        <aside class="mw-nav-btn">
          <div class="mw-nav-icon"></div>
        </aside>
        <div class="clear"></div>
      </section>
    </header>
    <!-- /公共头引入 -->

    <nuxt />

    <!-- 公共底引入 -->
    <footer id="footer">
      <section class="container">
        <div class>
          <h4 class="hLh30">
            <span class="fsize18 f-fM c-999">友情链接</span>
          </h4>
          <ul class="of flink-list">
            <li>
              <a href="http://www.atguigu.com/" title="尚硅谷" target="_blank">深圳瑞丽视</a>
            </li>
          </ul>
          <div class="clear"></div>
        </div>
        <div class="b-foot">
          <section class="fl col-7">
            <section class="mr20">
              <section class="b-f-link">
                <a href="#" title="关于我们" target="_blank">关于我们</a>|
                <a href="#" title="联系我们" target="_blank">联系我们</a>|
                <a href="#" title="帮助中心" target="_blank">帮助中心</a>|
                <a href="#" title="资源下载" target="_blank">资源下载</a>|
                <span>服务热线：0755-82222222(深圳)</span>
                <span>Email：info@.com</span>
              </section>
              <section class="b-f-link mt10">
                <span>©2021课程版权均归瑞视云智所有 深ICP备17055252333号</span>
              </section>
            </section>
          </section>
          <aside class="fl col-3 tac mt15">
            <section class="gf-tx">
              <span>
                <img src="~/assets/img/wx-icon.png" alt>
              </span>
            </section>
            <section class="gf-tx">
              <span>
                <img src="~/assets/img/wb-icon.png" alt>
              </span>
            </section>
          </aside>
          <div class="clear"></div>
        </div>
      </section>
    </footer>
    <!-- /公共底引入 -->
  </div>
</template>
<script>
  import '~/assets/css/reset.css'
  import '~/assets/css/theme.css'
  import '~/assets/css/global.css'
  import '~/assets/css/web.css'
  import '~/assets/css/base.css'
  import '~/assets/css/activity_tab.css'
  import '~/assets/css/bottom_rec.css'
  import '~/assets/css/nice_select.css'
  import '~/assets/css/order.css'
  import '~/assets/css/swiper-3.3.1.min.css'
  import "~/assets/css/pages-weixinpay.css"

  import cookie from 'js-cookie'
  import loginApi from '@/api/login'

  export default {
    data() {
      return {
        token: '',
        loginInfo: {
          id: '',
          age: '',
          avatar: '',
          mobile: '',
          nickname: '',
          sex: ''
        }
      }
    },
    created() {
    },
    mounted(){
      //获取路径里面token值
      this.token = this.$route.query.token
      console.log(this.token)
      if (this.token) { //判断路径是否有token值
        this.wxLogin()
      }
      this.showInfo()
    },
    methods: {
      //微信登录显示的方法
      wxLogin() {
        //console.log('************'+this.token)
        //把token值放到cookie里面
        cookie.set('guli_token', this.token )
        cookie.set('guli_ucenter', '', )
        //console.log('====='+cookie.get('guli_token'))
        //调用接口，根据token值获取用户信息
        loginApi.getMemberInfo()
          .then(response => {
            // console.log('################'+response.data.data.userInfo)
            this.loginInfo = response.data.data.member
            cookie.set('guli_ucenter', this.loginInfo)
          })
      },
      //创建方法，从cookie获取用户信息
      showInfo() {
        //从cookie获取用户信息
        var userStr = cookie.get('guli_ucenter')
        console.log(userStr)
        // 把字符串转换json对象(js对象)
        if (userStr) {
          this.loginInfo = JSON.parse(userStr)
        }
      },

      //退出
      logout() {
        //清空cookie值
        cookie.set('guli_token', '')
        cookie.set('guli_ucenter', '' )
        //回到首页面
        window.location.href = "/";
      }

    }
  };

</script>
<style scoped>
  .nav li{
    position: relative;
  }
  .nav li:hover .positionsDiv{
    display: block;
  }
  .positionsDiv{
    width: 80px;
    background: #eee;
    position: absolute;
    top: 52px;
    z-index: 9999;
    display: none;
    box-sizing: border-box;
  }
  .positionsDiv div{
    width: 100%;
    height: 40px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
  }
  .positionsDiv div:hover{
    background-color: darkcyan;
  }
</style>
