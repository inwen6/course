/*
 * @Author: inwen6
 * @Date: 2021-02-28 00:38:37
 * @LastEditTime: 2021-02-28 15:26:29
 * @LastEditors: Please set LastEditors
 * @Description: 描述
 * @FilePath: /course/api/course.js
 */
import request from '@/utils/request'

export default{

  //分页讲师查询的方法
  getFrontCourseList(page,size,couserQuery){
      return request({
          url: `/edu/courseFront/getFrontCourse/${page}/${size}`,
          method: 'post',
          data: couserQuery
      })
  },


  //课程详情查询
  getFrontCourseInfo(courseId){
      return request(
          {
            url: `/edu/courseFront/getFrontCourseInfo/${courseId}`,
            method: 'get'
          }
      )
  },


  //查询所有分类
  getAllSubject(){
      return request({
          url: '/edu/subject/findAllSubject',
          method: 'get'
      })
  },
//   查询所有章节
  getAllchapter(paeams){
    return request({
        url: `/courses/chapter/search/${paeams.page}/${paeams.size}`,
        method: 'post',
        data:paeams
    })
  },
//   查询课程详情
  getcourse(id){
    return request({
        url: `/courses/course/${id}`,
        method: 'get'
    })
  },
}