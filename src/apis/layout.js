import httpInstance from '@/utils/http'
/**
 * @description: 获取分类数据
 * @param {*}
 * @return {*}
 */
const getCategoryApi = async () => await httpInstance({url: '/home/category/head'})

export {
  getCategoryApi
} 