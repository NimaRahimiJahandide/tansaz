export interface Service {
  id: number
  thumb_image: string
  main_image: string
  name: string
  slug: string
  type: string
  created_at_fa: string
}

export interface Personnel {
  id: number
  thumb_image: string
  main_image: string
  name: string
  education: string
  expertise: string
  description: string
  likes: number
  is_active: number
  services: Service[]
}

export interface PersonnelsResponse {
  data: Personnel[]
}

export const usePersonnels = () => {
  const config = useRuntimeConfig()
  
  const { data, pending, error, refresh } = useFetch<PersonnelsResponse>('/personnels', {
    baseURL: config.public.baseURL,
    query: {
      isActive: 1
    },
    key: 'personnels-active'
  })

  // Transform API data to match component's expected format
  const personnels = computed(() => {
    if (!data.value?.data) return []
    
    return data.value.data.map(personnel => ({
      id: personnel.id,
      thumb_image: personnel.thumb_image,
      main_image: personnel.main_image,
      name: personnel.name,
      education: personnel.education,
      expertise: personnel.expertise,
      description: personnel.description,
      likes: personnel.likes,
      is_active: personnel.is_active,
      services: personnel.services
    }))
  })

  return {
    data,
    personnels,
    pending,
    error,
    refresh
  }
}