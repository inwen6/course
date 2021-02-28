/*
 * @Author: inwen6
 * @Date: 2021-02-28 00:38:37
 * @LastEditTime: 2021-02-28 19:35:27
 * @LastEditors: Please set LastEditors
 * @Description: 描述
 * @FilePath: /course/utils/request.js
 */
import axios from 'axios'
import cookie from 'js-cookie'
import { ColorPicker } from 'element-ui'
// 创建axios实例
const service = axios.create({
  baseURL: 'http://47.113.82.4:8001', // api的base_url
  timeout: 20000 // 请求超时时间
})



// HTTP request拦截器
service.interceptors.request.use(
  config => {

    //判断cookie里面是否有名称是'Authorization'的值
    if( cookie.get('Authorization')){
      //把获取cookie值放到header里面
      
      config.headers['Authorization'] = cookie.get('Authorization')
    }
    return config
  },
  err => {
    return Promise.reject(err)
  }
)


// http response 拦截器
service.interceptors.response.use(
  response => {
    //debugger
    if (response.data.code == 28004) {
        console.log("response.data.resultCode是28004")
        // 返回 错误代码-1 清除ticket信息并跳转到登录页面
        //debugger
        window.location.href="/login"
        return
    }else{
      if (response.data.code !== 20000) {
        //25000：订单支付中，不做任何提示
        if(response.data.code != 25000) {
          Message({
            message: response.data.message || 'error',
            type: 'error',
            duration: 5 * 1000
          })
        }
      } else {
        return response;
      }
    }
  },
  error => {  
    if(error.response.status == 401){
      window.location.href="/login"
    }
    return Promise.reject(error.response)   // 返回接口返回的错误信息
});
export default service

