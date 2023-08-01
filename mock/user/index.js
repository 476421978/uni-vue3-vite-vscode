import { reqFail, reqSuccess } from '../base'

const userLogin = {
  url: '/api/user/login',
  method: 'post',
  response: ({ body }) => {
    const { userPhone, userPwd } = body
    if (!userPhone || !userPwd) {
      return reqFail('账号或者密码不能为空')
    } else if (userPhone !== '12345678910' || userPwd !== '123456') {
      return reqFail('账号或者密码错误')
    } else {
      return reqSuccess({
        id: '001',
        name: 'HLG',
        token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwNmJiOTA2Mi1jOTFkLTQ3NzMtODliOC0yNDYwOWIzODBkMTEiLCJpYXQiOjE2MzgxNzAwNzAsIm5iZiI6MTYzODE3MDA3MCwiZXhwIjoxNjM4MTczNjcwLCJ1aWQiOiI4ODgifQ.fj7VvRJHAxF9nynAmtbXlDjItxX8B9UsPSojGRsvlSE',
        refToken:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzMmIzZDJhZC02MmIwLTRmZmEtYTdmMy0wZDY3Yzc4ZTJkN2EiLCJpYXQiOjE2MzgxNzAwNzAsIm5iZiI6MTYzODE3MDA3MCwiZXhwIjoxNjM4MjU2NDcwLCJ1aWQiOiI4ODgifQ.ZhaH4nF0K4-0EkmuW9McS2Pfgx7yFuYnLrqUYsdj7xY'
      })
    }
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
