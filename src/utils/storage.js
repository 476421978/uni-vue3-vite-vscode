/**
 * 一个浏览器同时打开两个tab，localstorage和cookie是共享的，sessionstorage是不共享的
 * sessionstorage 仅在当前网页会话下有效，关闭页面或浏览器后会被清除
 * localStorage 理论上永久有效的，除非主动清除。
 */
import { validatenull } from '@/utils/validate'
const keyName = '-'
/**
 * 存储localStorage
 */
export const setStorage = ({ name, content, type } = {}) => {
  name = keyName + name
  const obj = {
    dataType: typeof content,
    content: content,
    type: type,
    datetime: new Date().getTime()
  }
  if (type) sessionStorage.setItem(name, JSON.stringify(obj))
  else localStorage.setItem(name, JSON.stringify(obj))
}
/**
 * 获取 localStorage
 */
export const getStorage = (name) => {
  name = keyName + name
  let obj = sessionStorage.getItem(name)
  if (validatenull(obj)) obj = localStorage.getItem(name)
  if (validatenull(obj)) return
  try {
    obj = JSON.parse(obj)
  } catch (e) {
    return obj
  }
  let content
  if (obj.dataType === 'string') {
    content = obj.content
  } else if (obj.dataType === 'number') {
    content = Number(obj.content)
  } else if (obj.dataType === 'boolean') {
    content = eval(obj.content)
  } else if (obj.dataType === 'object') {
    content = obj.content
  }
  return content
}
/**
 * 删除localStorage
 */
export const removeStorage = ({ name, type } = {}) => {
  name = keyName + name
  if (type) {
    sessionStorage.removeItem(name)
  } else {
    localStorage.removeItem(name)
  }
}
/**
 * 获取全部localStorage
 */
export const getAllStorage = ({ type } = {}) => {
  const list = []
  if (type) {
    for (let i = 0; i <= sessionStorage.length; i++) {
      list.push({
        name: sessionStorage.key(i),
        content: getStorage({
          name: sessionStorage.key(i),
          type: 'session'
        })
      })
    }
  } else {
    for (let i = 0; i <= localStorage.length; i++) {
      list.push({
        name: localStorage.key(i),
        content: getStorage({
          name: localStorage.key(i)
        })
      })
    }
  }
  return list
}

/**
 * 清空全部localStorage
 */
export const clearStorage = ({ type } = {}) => {
  if (type) {
    sessionStorage.clear()
  } else {
    localStorage.clear()
  }
}
