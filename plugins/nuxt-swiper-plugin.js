/*
 * @Author: inwen6
 * @Date: 2021-02-28 00:38:37
 * @LastEditTime: 2021-03-05 01:22:15
 * @LastEditors: Please set LastEditors
 * @Description: 描述
 * @FilePath: /course/plugins/nuxt-swiper-plugin.js
 */
import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper/dist/ssr'
import VueQriously from 'vue-qriously'
import ElementUI from 'element-ui' //element-ui的全部组件
import 'element-ui/lib/theme-chalk/index.css'//element-ui的css

// import editor from '@/components/editor'

Vue.use(ElementUI) //使用elementUI
Vue.use(VueQriously)
Vue.use(VueAwesomeSwiper)

// Vue.component('editor',editor)