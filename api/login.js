/*
 * @Author: inwen6
 * @Date: 2021-02-28 00:38:37
 * @LastEditTime: 2021-02-28 14:45:11
 * @LastEditors: Please set LastEditors
 * @Description: 描述
 * @FilePath: /course/api/login.js
 */
import request from '@/utils/request'

export default{

    //会员登录
    submitLogin(userInfo){
        return request({
            url: '/user/login',
            method: 'get',
            params: userInfo
        })
    },

    //根据token获取会员信息
    getMemberInfo(token){
        return request({
            url: '/users/user/info',
            method: 'get',
            params: { token },
        })
    }
}
