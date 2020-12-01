import Cookies from 'js-cookie'

const name = 'Token'

function getToken() {
  return Cookies.get(name) ? Cookies.get(name) : ' 0'
}

function setToken(val) {
  return Cookies.set(name, val)
}

function removeToken() {
  return Cookies.remove(name)
}
export { getToken, setToken, removeToken }
