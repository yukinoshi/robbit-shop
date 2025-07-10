import { loginApi } from "@/apis/login"
import {defineStore} from "pinia"
import { ref } from "vue"
import { useCartStore } from "./cartStore"
import {mergeCartApi} from '@/apis/cart';
export const useUserStore = defineStore('Xtxuser',() => {
  const cartStore = useCartStore()
  const userInfo = ref({})

  const getUserInfo = async ({account, password}) => {
    const res = await loginApi({account,password})
    userInfo.value = res.result
    await mergeCartApi(cartStore.cartList.map(item =>
      ({
          skuId: item.skuId,
          selected: item.selected,
          count: item.count
      })
    ))
    cartStore.updateCartNewList()
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