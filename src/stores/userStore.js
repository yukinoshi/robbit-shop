import { loginApi } from "@/apis/login"
import {defineStore} from "pinia"
import { ref } from "vue"
import { useCartStore } from "./cartStore"

export const useUserStore = defineStore('Xtxuser',() => {
  const cartStore = useCartStore()
  const userInfo = ref({})

  const getUserInfo = async ({account, password}) => {
    const res = await loginApi({account,password})
    userInfo.value = res.result
  }

  const clearUserInfo = () => {
    userInfo.value = 0
    cartStore.clearCart()
  }
  return {
    userInfo,
    getUserInfo,
    clearUserInfo
  }
},{
  persist: true
})