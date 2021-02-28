import request from '@/utils/request'

export default{
  //分页查询活动
  getCaseByPage(params){
    return request({
      url:`/employ/case/${params.page}/${params.size}`,
      method:'get'
    })
  }
}
