import httpInstance from '@/utils/http'

/**
 * @description: 获取一级分类列表数据
 * @param {*}
 * @return {*}
 */
const getGoodsDetail = async (id) => {
  return await httpInstance({
    url: '/goods',
    params: {
      id
    }
  })
}

/**
 * @description: 获取一级分类列表数据
 * @param {*}
 * @return {*}
 */
const getHotGoodsApi = async ({id,type,limit = 3}) => {
  return await httpInstance({
    url: '/goods/hot',
    params: {
      id,
      type,
      limit
    }
  })
}

export {
  getGoodsDetail,
  getHotGoodsApi
}