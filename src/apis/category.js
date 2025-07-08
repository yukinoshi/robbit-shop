import httpInstance from '@/utils/http'

/**
 * @description: 获取一级分类列表数据
 * @param {*}
 * @return {*}
 */
const getCategoryApi = async (id) => {
  return await httpInstance({
    url: '/category',
    params: {
      id
    }
  })
}

/**
 * @description: 获取二级分类列表数据图
 * @param {*}
 * @return {*}
 */
const getCategoryFilterApi = async (id) => {
  return await httpInstance({
    url: '/category/sub/filter',
    params: {
      id
    }
  })
}

/**
 * @description: 获取导航数据
 * @data { 
     categoryId: 1005000 ,
     page: 1,
     pageSize: 20,
     sortField: 'publishTime' | 'orderNum' | 'evaluateNum'
   } 
 * @return {*}
 */
const getSubCategoryApi = async (data) => {
  return await httpInstance({
    url: '/category/goods/temporary',
    method: 'post',
    data
  })
}

export {
  getCategoryApi,
  getCategoryFilterApi,
  getSubCategoryApi
}