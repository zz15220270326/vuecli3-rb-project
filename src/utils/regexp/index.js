/**
 * TODO 正则表达式
 */
// ? 1. 验证用户手机号
export function checkPhoneNumber(phone) {
  const stadandard = /^1[3456789]\d{9}$/
  if (!(stadandard.test(phone))) {
    return false
  }
  return true
}
// ? 2. 输入密码 (1. 8-18位组成  2. 数字 / 字母 / 下划线组成)
export function checkPassword(password) {
  const standarad = /^(\w){8,18}$/
  if (!(standarad.test(password))) {
    return false
  } else {
    return true
  }
}
// ? 3. 手机验证码
export function checkVrCode(code) {
  const stadandard = /^[0-9]{6}$/
  if (!(stadandard.test(code))) {
    return false
  } else {
    return true
  }
}