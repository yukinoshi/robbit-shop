import httpInstance from '@/utils/http'

const getCategoryApi = async (id) => {
  return await httpInstance({
    url: '/category',
    params: {
      id
    }
  })
}

export {
  getCategoryApi
}