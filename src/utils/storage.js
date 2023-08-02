/**
 * 全部采用同步方法
 */

import { validatenull } from '@/utils/validate'
const keyName = 'uniApp-'

function getName(name) {
  return keyName + name
}

export const setStorage = ({ name, content } = {}) => {
  const obj = {
    dataType: typeof content,
    content: content,
    datetime: new Date().getTime()
  }
  uni.setStorageSync(getName(name), JSON.stringify(obj))
}

export const getStorage = (name) => {
  let obj = uni.getStorageSync(getName(name))
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
export const removeStorage = (name) => {
  uni.removeStorageSync(getName(name))
}

export const getAllStorage = () => {
  const list = []
  const res = uni.getStorageInfoSync()
  for (let i = 0; i <= res.keys.length; i++) {
    list.push({
      name: res.key(i),
      content: getStorage({
        name: res.key(i)
      })
    })
  }
  return list
}

export const clearStorage = () => {
  uni.clearStorageSync()
}
