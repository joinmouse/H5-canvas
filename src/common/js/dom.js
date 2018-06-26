export function addClass(el, className) {
  if (hasClass(el, className)) {
    return
  }
  let newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

/* 正则判断是否有某个className
* @ (^|\\s)正则以当前开头或者空白字符开头
* @ (\\s|$)正则后为空白字符或结束
*/
export function hasClass(el, className) {
  let reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}