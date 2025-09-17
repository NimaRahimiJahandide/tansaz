export interface Benefit {
  id: number
  title: string
  description: string
}

export interface BenefitsResponse {
  data: Benefit[]
}

export const useBenefits = () => {
  const config = useRuntimeConfig()
  
  const { data, pending, error, refresh } = useFetch<BenefitsResponse>('/benefits', {
    baseURL: config.public.baseURL,
    key: 'benefits'
  })

  // Transform API data to match component's expected format
  const benefits = computed(() => {
    if (!data.value?.data) return []
    
    return data.value.data.map(benefit => ({
      id: benefit.id,
      title: benefit.title,
      description: benefit.description
    }))
  })

  return {
    data,
    benefits,
    pending,
    error,
    refresh
  }
}