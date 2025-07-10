import { defineStore } from "pinia"
import { computed, ref } from "vue"
import { useUserStore } from "./userStore"
import {insertCartApi,getCartDataApi,deleteCartApi} from '@/apis/cart';
export const useCartStore = defineStore('cart',()=>{
  const userStore = useUserStore()
  const isLogin = computed(() => userStore.userInfo.token)
  const cartList = ref([])
  const sumCount = computed(()=>{
    return cartList.value.reduce((sum,item)=>sum+=item.count,0)
  })
  const sumPrice = computed(()=>{
    return cartList.value.reduce((sum,item)=>sum+=item.count * item.price,0)
  })
  const isAll = computed(()=>{
    return cartList.value.every(item=>item.selected)
  })
  const selectedCount = computed(() => {
    return cartList.value.filter(item=>item.selected).reduce((sum)=>sum+=1,0)
  })
  const selectedSumPrice = computed(() => {
    return cartList.value.filter(item=>item.selected).reduce((sum,item)=>sum+=item.count*item.price,0)
  })

  //获取最新的购物车数据
  const updateNewList = async () => {
    const res = await getCartDataApi()
    cartList.value = res.result
  }
  //清空购物车
  const clearCart = () => {
    cartList.value = []
  }
  // 添加购物车商品
  const addCart = async (goods) => {
    const {skuId,count} = goods
    if (isLogin.value) {
      await insertCartApi({skuId,count})
      updateNewList()
    } else {
      const item = cartList.value.find((item) => goods.skuId===item.skuId)
      if (item) {
        item.count+=goods.count
      }else{
        cartList.value.push(goods)
      }
    }
  }
  // 删除购物车商品
  const delCart = async (skuId) => {
    if (isLogin.value) {
      await deleteCartApi([skuId])
      updateNewList()
    } else {
      cartList.value = cartList.value.filter((item)=>item.skuId!==skuId)
    }
  }
  // 单选购物车商品
  const singlecheck = (skuId, selected) => {
    const item = cartList.value.find(item=>item.skuId===skuId)
    item.selected = selected
  }
  // 全选购物车商品
  const allcheck = (selected) => {
    cartList.value.forEach(item => {
      item.selected = selected
    })
  }
  return {
    cartList,
    sumCount,
    sumPrice,
    isAll,
    selectedCount,
    selectedSumPrice,
    addCart,
    delCart,
    singlecheck,
    allcheck,
    updateNewList,
    clearCart
  }
},{
  persist: true
})