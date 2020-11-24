import axios from 'axios'

// 每日诗句
const weather = data => {
  return axios({
    url: 'http://wthrcdn.etouch.cn/weather_mini?city=%E6%88%90%E9%83%BD',
    method: 'get',
  })
}
const weatherLoading = 'gethttp://wthrcdn.etouch.cn/weather_mini?city=%E6%88%90%E9%83%BD'

export { weather, weatherLoading }
