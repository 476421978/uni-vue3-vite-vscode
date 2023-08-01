import { baseData } from '../base'

const userLogin = {
  url: '/api/user/login',
  method: 'post',
  response: ({ body }) => {
    const { userPhone, userPwd } = body
    if (!userPhone || !userPwd) baseData.msg = '账号或者密码不能为空'

    if (userPhone === '12345678910' && userPwd === '123456') {
      baseData.data = {
        id: '001',
        name: 'HLG'
      }
    } else {
      baseData.message = 'fail'
      baseData.msg = '账号或者密码错误'
    }

    return baseData
  }
}

const userInfo = {
  url: '/api/user/info',
  method: 'get',
  response: ({ query }) => {
    return baseData
  }
}

export default [userLogin, userInfo]
