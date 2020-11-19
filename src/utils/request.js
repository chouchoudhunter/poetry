import axios from 'axios'
import Vue from 'vue'
import store from '@/store'
import { getToken, setToken } from './auth.js'
// eslint-disable-next-line
const codeMessage = {
  400: '参数错误',
  401: '访问由于凭据无效被拒绝',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  500: '服务器发生错误，请检查服务器。',
}

const request = axios.create({
  baseURL: '/api',
  timeout: 50000,
})
// 请求拦截，把链接的状态添加到store里
request.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${getToken()}`
  editLinkStatus(config, true)
  return config
})
// 请求完成后修改对应连接的状态
request.interceptors.response.use((res) => {
  editLinkStatus(res.config, false)
  return res.data
}, (err) => {
  editLinkStatus(err.config, false)
  // 400
  if (err.response.status === 400) {
    Vue.prototype.$message({
      message: err.response.data.message,
      type: 'error',
    })
    // 402代表token即将过期，使用新的token重新获取
  } else if (err.response.status === 402) {
    const config = err.config
    setToken(err.response.data.data.token)
    return request(config).then(res => {
      return Promise.resolve(res.data)
    }).catch(err => {
      return Promise.reject(err)
    })
    // 401错误说明当前请求需要登陆或者需要重新登录
  } else if (err.response.status === 401) {
    // 重置状态，打开登录弹窗
  } else {
    Vue.prototype.$message({
      message: codeMessage[err.response.status],
      type: 'error',
    })
  }
  return Promise.reject(err)
})
var editLinkStatus = function(config, status) {
  const linkName = config.method + config.url.replace(config.baseURL, '')
  store.commit('requestStatus/addLinks', {
    linkName: linkName,
    linkStatus: status,
  })
  // console.log(store.state)
}
export default request
