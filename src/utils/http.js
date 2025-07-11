import router from "@/router"
import { useUserStore } from "@/stores/userStore"
import axios from "axios"
import { ElMessage } from 'element-plus'
import 'element-plus/theme-chalk/el-message.css'
const httpInstance = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 15000,
})
httpInstance.interceptors.request.use(config => {
  const userStore = useUserStore()
  const token = userStore.userInfo.token
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
},e=>Promise.reject(e))

httpInstance.interceptors.response.use(res=>res.data,e=>{
  const userStore = useUserStore()
  ElMessage({ type: 'warning', message: e.response.data.msg })
  if(e.response.status === 401){
    userStore.clearUserInfo()
    router.replace({ path: '/login' })
  }
  return Promise.reject(e) 
})

// httpInstance.interceptors.response.use(
//   res => res.data,
//   e => {
//     const userStore = useUserStore()
    
//     // Safely access error message
//     const errorMessage = e.response?.data?.msg || e.message || '请求错误'
    
//     ElMessage({ 
//       type: 'warning', 
//       message: errorMessage 
//     })
    
//     // Only handle 401 if response exists
//     if(e.response?.status === 401) {
//       userStore.clearUserInfo()
//       router.replace({ path: '/login' })
//     }
    
//     return Promise.reject(e) 
//   }
// )

export default httpInstance