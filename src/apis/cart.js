import httpInstance from '@/utils/http'

/**
 * @description: 获取购物车
 * @param {*}
 * @return {*}
 */
const getCartDataApi = async () => {
  return httpInstance({
    url: '/member/cart',
  })
}

/**
 * @description: 加入购物车
 * @param {*}
 * @return {*}
 */
const insertCartApi = async ({skuId,count}) => {
  return httpInstance({
    url: '/member/cart',
    method: 'POST',
    data: {
      skuId,
      count
    }
  })
}

/**
 * @description: 加入购物车
 * @param {*}
 * @return {*}
 */
const deleteCartApi = async (ids) => {
  return httpInstance({
    url: '/member/cart',
    method: 'DELETE',
    data: {
      ids
    }
  })
}

/**
 * @description: 合并购物车
 * @param {*}
 * @return {*}
 */
const mergeCartApi = async (data) => {
  return httpInstance({
    url: '/member/cart/merge',
    method: 'POST',
    data
  })
}

export {
  getCartDataApi,
  insertCartApi,
  deleteCartApi,
  mergeCartApi
}