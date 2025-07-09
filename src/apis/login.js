import httpInstance from '@/utils/http'

/**
 * @description: 登录校验
 * @param {*} 
 * @returns 
 */
const loginApi = async ({account,password}) => {
  return await httpInstance({
    url: '/login',
    method: 'POST',
    data: {
      account,
      password
    }
  })
}

export {
  loginApi
}