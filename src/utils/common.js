/**
 * 提示方法
 * @param {String} title 提示文字
 * @param {String}  icon icon图片
 * @param {Number}  duration 提示时间
 */
export function Toast(title, icon = 'none', duration = 1500) {
  if (title) {
    uni.showToast({
      title,
      icon,
      duration
    })
  }
}

/**
 * 页面跳转
 * @param {'navigateTo' | 'redirectTo' | 'reLaunch' | 'switchTab' | 'navigateBack' | number } url  转跳路径
 * @param {String} params 跳转时携带的参数
 * @param {String} type 转跳方式
 **/
export function useRouter(url, params = {}, type = 'navigateTo') {
  try {
    if (Object.keys(params).length) url = `${url}?data=${encodeURIComponent(JSON.stringify(params))}`
    if (type === 'navigateBack') {
      uni[type]({ delta: url })
    } else {
      uni[type]({ url })
    }
  } catch (error) {
    console.error(error)
  }
}

/**
 * 保存图片到本地
 * @param {String} filePath 图片临时路径
 **/
export function saveImage(filePath) {
  if (!filePath) return false
  uni.saveImageToPhotosAlbum({
    filePath,
    success: (res) => {
      toast('图片保存成功', 'success')
    },
    fail: (err) => {
      if (err.errMsg === 'saveImageToPhotosAlbum:fail:auth denied' || err.errMsg === 'saveImageToPhotosAlbum:fail auth deny') {
        uni.showModal({
          title: '提示',
          content: '需要您授权保存相册',
          showCancel: false,
          success: (modalSuccess) => {
            uni.openSetting({
              success(settingData) {
                if (settingData.authSetting['scope.writePhotosAlbum']) {
                  uni.showModal({
                    title: '提示',
                    content: '获取权限成功,再次点击图片即可保存',
                    showCancel: false
                  })
                } else {
                  uni.showModal({
                    title: '提示',
                    content: '获取权限失败，将无法保存到相册哦~',
                    showCancel: false
                  })
                }
              },
              fail(failData) {
                console.log('failData', failData)
              }
            })
          }
        })
      }
    }
  })
}
