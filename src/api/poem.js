import request from '@/utils/request'

// 每日诗句
const everyPoem = data => {
  return request({
    url: '/poem/everydaypoem',
    method: 'get',
    data: {
      username: 'diyyouxi',
      password: '9630289381',
    },
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
export { everyPoem, everyPoemLoading, searchPoem, searchPoemLoading }
