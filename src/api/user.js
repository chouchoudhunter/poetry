import request from '@/utils/request'

// 登陆
const login = data => {
  return request({
    url: '/login',
    method: 'post',
    data: data,
  })
}
const loginLoading = 'post/login'

export { login, loginLoading }
