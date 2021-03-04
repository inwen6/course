import request from '@/utils/request'

// export default {
//     //查询热门课程和名师
//   getIndexData() {
//     return request({
//       url: '/edu/indexFront/index',
//       method: 'get'
//     })
//   }
// }


//列表
export const courseList = ({page,size,...params}) => {
  return request({
    url: `/courses/course/${page}/${size}`,
    method: 'get',
    params
  })
}