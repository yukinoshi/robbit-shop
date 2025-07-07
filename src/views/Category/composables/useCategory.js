import { getCategoryApi } from '@/apis/category';
import { ref, onMounted } from 'vue';
import { useRoute, onBeforeRouteUpdate } from 'vue-router';


export function useCategory() {
  const categoryData = ref({})
  const route = useRoute()
  const getCategory = async (id = route.params.id) => {
    const res = await getCategoryApi(id)
    categoryData.value = res.result
  }
  onBeforeRouteUpdate((to) => {
    getCategory(to.params.id)
  })
  onMounted(() => {
    getCategory()
  })
  return {
    categoryData
  }
}