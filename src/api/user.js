import request from '@/utils/request'

// 注册
const register = data => {
  return request({
    url: '/register',
    method: 'post',
    data: data,
  })
}
const registerLoading = 'post/regiseter'

// 登陆
const login = data => {
  return request({
    url: '/login',
    method: 'post',
    data: data,
  })
}
const loginLoading = 'post/login'
// 修改昵称
const editAliase = data => {
  return request({
    url: '/user/editaliase',
    method: 'post',
    data: data,
  })
}
const editAliaseLoading = 'post/user/editaliase'

// 修改密码
const editPassword = data => {
  return request({
    url: '/user/editpassword',
    method: 'post',
    data: data,
  })
}
const editPasswordLoading = 'post/user/editpassword'
export {
  login,
  loginLoading,
  editAliase,
  editAliaseLoading,
  editPassword,
  editPasswordLoading,
  register,
  registerLoading,
}
