export interface HomePost {
  id: number
  title: string
  slug: string
  thumb_image: string
  main_image: string
  created_at_fa: string
}

export interface HomePostsResponse {
  data: HomePost[]
}

export const useHomePosts = () => {
  const config = useRuntimeConfig()
  
  const { data, pending, error } = useFetch<HomePostsResponse>('/home-posts', {
    baseURL: config.public.baseURL,
  })

  // Transform API data to match component's expected format
  const posts = computed(() => {
    if (!data.value?.data) return []
    
    return data.value.data.map(post => ({
      id: post.id,
      image: post.thumb_image,
      title: post.title,
      slug: post.slug,
      duration: "2 دقیقه", // Default value since not provided by API
      date: post.created_at_fa,
    }))
  })

  return {
    data,
    posts,
    pending,
    error
  }
}