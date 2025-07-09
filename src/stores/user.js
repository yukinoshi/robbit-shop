import { loginApi } from "@/apis/login"
import {defineStore} from "pinia"
import { ref } from "vue"

export const useUserStore = defineStore('Xtxuser',() => {
  const userInfo = ref({})

  const getUserInfo = async ({account, password}) => {
    const res = await loginApi({account,password})
    userInfo.value = res.result
  }

  const clearUserInfo = () => {
    userInfo.value = 0
  }
  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
},{
  persist: true
})