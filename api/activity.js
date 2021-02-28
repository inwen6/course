import request from '@/utils/request'

export default{
  //分页查询活动
  getActivityByPage(params){
    return request({
      url:`/employ/activity/${params.page}/${params.size}`,
      method:'get'
    })
  }
}
