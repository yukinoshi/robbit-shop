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

/**
 * @description: 登录校验
 * @param {*} 
 * @returns 
 */
const getLikeListAPI = async ({ limit = 4 }) => {
  return await httpInstance({
    url:'/goods/relevant',
    params: {
      limit 
    }
  })
}

export {
  loginApi,
  getLikeListAPI
}