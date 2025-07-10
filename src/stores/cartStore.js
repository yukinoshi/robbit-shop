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
  const isAll = computed(()=>{
    return cartList.value.every(item=>item.selected)
  })
  const selectedCount = computed(() => {
    return cartList.value.filter(item=>item.selected).reduce((sum)=>sum+=1,0)
  })
  const selectedSumPrice = computed(() => {
    return cartList.value.filter(item=>item.selected).reduce((sum,item)=>sum+=item.count*item.price,0)
  })
  // 添加购物车商品
  const addCart = (goods) => {
    const item = cartList.value.find((item) => goods.skuId===item.skuId)
    if (item) {
      item.count+=goods.count
    }else{
      cartList.value.push(goods)
    }
  }
  // 删除购物车商品
  const delCart = (skuId) => {
    cartList.value = cartList.value.filter((item)=>item.skuId!==skuId)
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
    allcheck
  }
},{
  persist: true
})