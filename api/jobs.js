import request from '@/utils/request'

export default{
  //分页查询活动
  getJobsyByPage(params){
    return request({
      url:`/employ/jobs/${params.page}/${params.size}`,
      method:'get'
    })
  }
}
