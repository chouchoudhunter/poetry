import Cookies from 'js-cookie'

const name = 'Token'

function getToken() {
  return Cookies.get(name) ? Cookies.get(name) : false
}

function setToken(val) {
  return Cookies.set(name, val)
}

function removeToken() {
  return Cookies.remove(name)
}
export { getToken, setToken, removeToken }
