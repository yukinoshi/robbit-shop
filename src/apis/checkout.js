import httpInstance from '@/utils/http'

const getCheckInfoApi = async () => {
  return httpInstance({
    url: '/member/order/pre'
  })
}

export { 
  getCheckInfoApi
}