import md5 from 'blueimp-md5'

function encryption(string) {
  return md5(string)
}
export default encryption
