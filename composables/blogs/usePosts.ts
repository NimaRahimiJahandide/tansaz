export interface Post {
  id: number
  title: string
  slug: string
  thumb_image: string
  main_image: string
  created_at_fa: string
}

export interface PostLinks {
  first: string
  last: string
  prev: string | null
  next: string | null
}

export interface PostMeta {
  current_page: number
  last_page: number
  per_page: number
  total: number
  links: Array<{
    url: string | null
    label: string
    active: boolean
  }>
}

export interface PostsResponse {
  data: Post[]
  links: PostLinks
  meta: PostMeta
}

export const usePosts = (page: number = 1, categoryId: number | null = null) => {
  const config = useRuntimeConfig()
  
  // Build query parameters
  const query: Record<string, any> = { page }
  if (categoryId !== null) {
    query.category_id = categoryId
  }

  // Create a unique key that includes category for proper caching
  const cacheKey = categoryId 
    ? `posts-page-${page}-category-${categoryId}` 
    : `posts-page-${page}`
  
  const { data, pending, error, refresh } = useFetch<PostsResponse>('/posts', {
    baseURL: config.public.baseURL,
    query,
    key: cacheKey
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
      liked: false // Default value for UI state
    }))
  })

  const links = computed(() => data.value?.links || null)
  const meta = computed(() => data.value?.meta || null)

  return {
    data,
    posts,
    links,
    meta,
    pending,
    error,
    refresh
  }
}