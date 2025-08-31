export interface BeforeAfterItem {
  id: number
  thumb_image1: string
  main_image1: string
  thumb_image2: string
  main_image2: string
  service_name: string
  device: string
  show_in_home: number
}

export interface BeforeAfterResponse {
  data: BeforeAfterItem[]
}

export const useBeforeAfter = () => {
  const config = useRuntimeConfig()
  
  const { data, pending, error } = useFetch<BeforeAfterResponse>('/home-before-afters', {
    baseURL: config.public.baseURL,
    transform: (response: BeforeAfterResponse) => {
      // Filter items that should be shown on home page
      return {
        data: response.data.filter(item => item.show_in_home === 1)
      }
    }
  })

  // Transform API data to match component's expected format
  const gallery = computed(() => {
    if (!data.value?.data) return []
    
    return data.value.data.map(item => ({
      id: item.id,
      before: item.main_image1,
      after: item.main_image2,
      serviceName: item.service_name,
      device: item.device,
      thumbBefore: item.thumb_image1,
      thumbAfter: item.thumb_image2
    }))
  })

  return {
    data,
    gallery,
    pending,
    error
  }
}