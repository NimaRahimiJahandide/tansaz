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

export const usePosts = (page: Ref<number> | number = 1, categoryId: Ref<number | null> | number | null = null) => {
  const config = useRuntimeConfig()
  
  // Convert to refs if they aren't already
  const pageRef = typeof page === 'number' ? ref(page) : page
  const categoryIdRef = typeof categoryId === 'number' || categoryId === null ? ref(categoryId) : categoryId
  
  // Build query parameters reactively
  const query = computed(() => {
    const q: Record<string, any> = { page: pageRef.value }
    if (categoryIdRef.value !== null) {
      q.category_id = categoryIdRef.value
    }
    return q
  })

  // Create a unique key that includes category for proper caching
  const cacheKey = computed(() => {
    return categoryIdRef.value 
      ? `posts-page-${pageRef.value}-category-${categoryIdRef.value}` 
      : `posts-page-${pageRef.value}`
  })
  
  const { data, pending, error, refresh } = useFetch<PostsResponse>('/posts', {
    baseURL: config.public.baseURL,
    query,
    key: cacheKey.value
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