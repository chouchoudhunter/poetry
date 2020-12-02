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

// 诗句喜欢不喜欢
const likePoem = data => {
  return request({
    url: '/poem/likepoem',
    method: 'post',
    data: data,
  })
}
const likePoemLoading = 'post/poem/likepoem'
// 喜欢诗句列表
const likePoemList = data => {
  return request({
    url: '/poem/likepoem',
    method: 'post',
    data: data,
  })
}
const likePoemListLoading = 'post/poem/likepoem'
export {
  everyPoem,
  everyPoemLoading,
  searchPoem,
  searchPoemLoading,
  poemDesc,
  poemDescLoading,
  likePoem,
  likePoemLoading,
  likePoemList,
  likePoemListLoading,
}
