import httpInstance from '@/utils/http'

/**
 * @description: 生成订单信息
 * @param {*}
 * @return {*}
 */
const getCheckInfoApi = async () => {
  return await httpInstance({
    url: '/member/order/pre'
  })
}

/**
 * @description: 提交订单(准备开始支付)
 * @param {*}
 * @return {*}
 */
const createOrderApi = async (data) => {
  return await httpInstance({
    url: '/member/order',
    method: 'POST',
    data
  })
}


export { 
  getCheckInfoApi,
  createOrderApi
}