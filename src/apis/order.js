import httpInstance from '@/utils/http'

/**
 * @description: 获取订单数据
 * @param {	
 *  orderState:0,
 *   page:1,
 *   pageSize:2
  }
 * @return {*}
 */
const getUserOrder = async (params) => {
  return await httpInstance({
    url:'/member/order',
    method:'GET',
    params
  })
}

export {
  getUserOrder
}