import request from '@/utils/request'
// 每日诗句
const weather = data => {
  return request({
    url: '/getweather',
    method: 'get',
  })
}
const weatherLoading = 'get/getweather'

export { weather, weatherLoading }
