import request from '@/utils/request'

// 每日诗句
const everyPoem = data => {
  return request({
    url: '/poem/everydaypoem',
    method: 'get',
    params: data,
  })
}
const everyPoemLoading = 'get/poem/everydaypoem'
// 搜索诗句
const searchPoem = data => {
  return request({
    url: '/poem/searchpoem',
    method: 'get',
    params: data,
  })
}
const searchPoemLoading = 'get/poem/searchpoem'
// 诗词详情
const poemDesc = data => {
  return request({
    url: '/poem/getpoemcontent',
    method: 'post',
    data: data,
  })
}
const poemDescLoading = 'post/poem/getpoemcontent'
export {
  everyPoem, everyPoemLoading, searchPoem, searchPoemLoading, poemDesc, poemDescLoading,
}
