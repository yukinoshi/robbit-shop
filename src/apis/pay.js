import httpInstance from '@/utils/http'

/**
 * @description: 提交订单(准备开始支付)
 * @param {*}
 * @return {*}
 */
const getOrderApi = async (id) => {
  return await httpInstance({
    url: `/member/order/${id}`,
  })
}

export {
  getOrderApi
}