import axios from 'axios'
import Vue from 'vue'
import store from '@/store'
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
  // config.headers.Authorization = `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJjaG91IiwiZXhwIjoxNjA1MDgxOTM1LCJuYmYiOjE2MDQ5MDkxMzUsImlhdCI6MTYwNDkwOTEzNSwidWlkIjoxfQ.gjCheNdrqLbyqV-raX_jvZqV4TxIOebsNAMhrihtYqA`
  editLinkStatus(config, true)
  return config
})
// 请求完成后修改对应连接的状态
request.interceptors.response.use((res) => {
  editLinkStatus(res.config, false)
  return res
}, (err) => {
  editLinkStatus(err.config, false)
  if (err.response.status === 400) {
    Vue.prototype.$message({
      message: err.response.data.message,
      type: 'error',
    })
  } else if (err.response.status === 402) {
    const config = err.config
    // console.log(err.response)
    // config.Authorization = `Bearer ${err.response.data.data.token}`
    request(config).then(res => {
      // console.log(res)
      return Promise.resolve(res)
    }).catch(err => {
      return Promise.reject(err)
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
