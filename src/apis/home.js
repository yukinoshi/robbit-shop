import httpInstance from '@/utils/http'

/**
 * @description: 获取banner图
 * @param {*}
 * @return {*}
 */
const getgetBannerApi = async () => await httpInstance({url: '/home/banner'})
export {
  getgetBannerApi
} 