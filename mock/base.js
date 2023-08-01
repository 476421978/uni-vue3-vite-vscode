export const baseData = {
  code: 200,
  message: 'ok',
  data: null,
  msg: ''
}

export function reqFail(msg) {
  return {
    ...baseData,
    code: 205,
    message: 'fail',
    msg
  }
}

export function reqSuccess(data) {
  return {
    ...baseData,
    data
  }
}
