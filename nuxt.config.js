/*
 * @Author: inwen6
 * @Date: 2021-03-04 21:46:05
 * @LastEditTime: 2021-03-05 13:40:59
 * @LastEditors: your name
 * @Description: 描述
 * @FilePath: /accccc/nuxt.config.js
 */
module.exports = {
  plugins: [
    { src: '~/plugins/nuxt-swiper-plugin.js', ssr: false },
    { src: '~/utils/oss.js', ssr: false }
  ],

  css: [
    'swiper/dist/css/swiper.css'
  ],
  /*
  ** Headers of the page
  */
  head: {
    title: '在线教育平台',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '{{escape description }}' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script:[
      { type:"text/javascript" ,charset:"utf-8", src:"https://g.alicdn.com/de/prismplayer/2.9.3/aliplayer-min.js" }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */

  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
