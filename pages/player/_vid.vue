<!--
 * @Author: inwen6
 * @Date: 2021-02-28 00:38:37
 * @LastEditTime: 2021-03-05 12:02:17
 * @LastEditors: your name
 * @Description: 描述
 * @FilePath: /accccc/pages/player/_vid.vue
-->
<template>
  <div>

    <!-- 阿里云视频播放器样式 -->
    <!-- <link rel="stylesheet" href="https://g.alicdn.com/de/prismplayer/2.8.1/skins/default/aliplayer-min.css" > -->
    <!-- 阿里云视频播放器脚本 -->
    <!-- <script charset="utf-8" type="text/javascript" src="https://g.alicdn.com/de/prismplayer/2.8.1/aliplayer-min.js" /> -->

      <link rel="stylesheet" href="https://g.alicdn.com/de/prismplayer/2.9.3/skins/default/aliplayer-min.css" />
      <no-ssr>
        <script type="text/javascript" charset="utf-8" src="https://g.alicdn.com/de/prismplayer/2.9.3/aliplayer-min.js"></script>
      </no-ssr>
    
    <!-- 定义播放器dom -->
    <div id="J_prismPlayer" class="prism-player" />
  </div>
</template>
<script>  
export default {
    layout: 'video',//应用video布局 
   asyncData({ params, error }) { //服务端执行
    return {vid:params.vid}
   },
    mounted() { //页面渲染之后  created  
        let arr = JSON.parse(sessionStorage.getItem('VideoList'))
        let url = ''
        for(let i=0;i<arr.length;i++){
            if(arr[i].chapterId == this.vid){ 
                url = arr[i].chapterVideoUrl
            }
        }  
        new Aliplayer({
            "id": "J_prismPlayer",
            "source": url,
            "width": "100%",
            "height": "90vh",
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
