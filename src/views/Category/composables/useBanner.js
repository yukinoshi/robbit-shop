import { onMounted, ref } from "vue"
import { getgetBannerApi } from "@/apis/home"
export function useBanner() {
  const bannerList = ref([])
  const getBanner = async () => {
    const res = await getgetBannerApi({
      distributionSite: '2'
    })
    console.log(res)
    bannerList.value = res.result
  }
  onMounted(() => getBanner())

  return {
    bannerList
  }
}