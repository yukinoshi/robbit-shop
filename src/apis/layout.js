import httpInstance from '@/utils/http'

const getCategoryApi = async () => await httpInstance({url: '/home/category/head'})

export {
  getCategoryApi
} 