import { defineStore } from "pinia"
import { computed, ref } from "vue"

export const useCartStore = defineStore('cart',()=>{
  const cartList = ref([])
  const sumCount = computed(()=>{
    return cartList.value.reduce((sum,item)=>sum+=item.count,0)
  })
  const sumPrice = computed(()=>{
    return cartList.value.reduce((sum,item)=>sum+=item.count * item.price,0)
  })
  const addCart = (goods) => {
    const item = cartList.value.find((item) => goods.skuId===item.skuId)
    if (item) {
      item.count+=goods.count
    }else{
      cartList.value.push(goods)
    }
  }
  const delCart = (skuId) => {
    cartList.value = cartList.value.filter((item)=>item.skuId!==skuId)
  }
  return {
    cartList,
    addCart,
    delCart,
    sumCount,
    sumPrice
  }
},{
  persist: true
})