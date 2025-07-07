import httpInstance from '@/utils/http'

/**
 * @description: 获取banner图
 * @param {*}
 * @return {*}
 */
const getgetBannerApi = async () => await httpInstance({url: '/home/banner'})
/**
 * @description: 获取新鲜好物
 * @param {*}
 * @return {*}
 */
const findNewApi = async () => await httpInstance({url: '/home/new'})
/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
const findHotApi = async () => await httpInstance({url: '/home/hot'})
/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
const getGoodsApi = async () => await httpInstance({url: '/home/goods'})

export {
  getgetBannerApi,
  findNewApi,
  findHotApi,
  getGoodsApi
} 