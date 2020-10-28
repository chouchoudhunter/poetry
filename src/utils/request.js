import axios from 'axios'
import store from '@/store'
// eslint-disable-next-line
const codeMessage = {
  400: '参数错误',
  401: '访问由于凭据无效被拒绝',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  500: '服务器发生错误，请检查服务器。',
}

const request = axios.create({
  baseURL: '',
  timeout: 50000,
})
// 请求拦截，把链接的状态添加到store里
request.interceptors.request.use((config) => {
  editLinkStatus(config,false)
  return config
})
// 请求完成后修改对应连接的状态
request.interceptors.response.use((res)=>{
  editLinkStatus(res.config,false)
  return res;
},(err)=>{
  editLinkStatus(err.config,false)
  return Promise.reject(err)
})

editLinkStatus(config,status){
  const linkName = config.method + config.url.replace(config.baseURL, '')
  store.commit('requestStatus/addLinks', {
    linkName: linkName,
    linkStatus: status,
  })
}
export default request
