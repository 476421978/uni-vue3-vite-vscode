export default [
  {
    url: '/api/createUser',
    method: 'post',
    response: ({ body }) => {
      return {
        code: 200,
        message: 'ok',
        data: null
      }
    }
  },
  {
    url: '/api/getRoleById',
    method: 'get',
    response: ({ query }) => {
      return {
        code: 200,
        message: 'ok',
        data: null
      }
    }
  }
]
