export interface Gallery {
  id: number
  thumb_image: string
  main_image: string
  title: string
  description: string
  views: number
  created_at_fa: string
}

export interface GalleriesResponse {
  data: Gallery[]
}

export const useGalleries = () => {
  const config = useRuntimeConfig()
  
  const { data, pending, error, refresh } = useFetch<GalleriesResponse>('/galleries', {
    baseURL: config.public.baseURL,
    key: 'galleries'
  })

  // Transform API data to match component's expected format
  const galleries = computed(() => {
    if (!data.value?.data) return []
    
    return data.value.data.map(gallery => ({
      id: gallery.id,
      thumb_image: gallery.thumb_image,
      main_image: gallery.main_image,
      title: gallery.title,
      description: gallery.description,
      views: gallery.views,
      created_at_fa: gallery.created_at_fa
    }))
  })

  return {
    data,
    galleries,
    pending,
    error,
    refresh
  }
}