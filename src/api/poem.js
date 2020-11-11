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

export { everyPoem, everyPoemLoading }
