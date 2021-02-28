<!--
 * @Author: inwen6
 * @Date: 2021-02-28 00:38:37
 * @LastEditTime: 2021-02-28 18:02:48
 * @LastEditors: Please set LastEditors
 * @Description: 描述
 * @FilePath: /course/pages/player/_vid.vue
-->
<template>
  <div>

    <!-- 阿里云视频播放器样式 -->
    <!-- <link rel="stylesheet" href="https://g.alicdn.com/de/prismplayer/2.8.1/skins/default/aliplayer-min.css" > -->
    <!-- 阿里云视频播放器脚本 -->
    <!-- <script charset="utf-8" type="text/javascript" src="https://g.alicdn.com/de/prismplayer/2.8.1/aliplayer-min.js" /> -->

    <link rel="stylesheet" href="https://g.alicdn.com/de/prismplayer/2.9.3/skins/default/aliplayer-min.css" />
    <script type="text/javascript" charset="utf-8" src="https://g.alicdn.com/de/prismplayer/2.9.3/aliplayer-min.js"></script>
    <!-- 定义播放器dom -->
    <div id="J_prismPlayer" class="prism-player" />
  </div>
</template>
<script> 
  import cookie from 'js-cookie'
export default {
    layout: 'video',//应用video布局 
   asyncData({ params, error }) {
    let arr = cookie.get('VideoList')
    console.log(arr)
    // console.log(arr.files((item)=>item.courseId == params.vid))
    return {vid:params.vid}
   },
    mounted() { //页面渲染之后  created 
        new Aliplayer({
            "id": "J_prismPlayer",
            "source": this.vid,
            "width": "100%",
            "height": "500px",
            "autoplay": true,
            "isLive": false,
            "rePlay": false,
            "playsinline": true,
            "preload": true,
            "controlBarVisibility": "hover",
            "useH5Prism": true
            }, function (player) {
                console.log("The player is created");
            }
        );

    }

}
</script>
