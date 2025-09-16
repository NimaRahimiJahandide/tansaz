export interface SinglePost {
  id: number
  title: string
  slug: string
  body: string
  thumb_image: string
  main_image: string
  created_at_fa: string
}

export interface SinglePostResponse {
  data: SinglePost
}

export const useSinglePost = (id: string | number) => {
  const config = useRuntimeConfig()
  
  const { data, pending, error, refresh } = useFetch<SinglePostResponse>(`/posts/${id}`, {
    baseURL: config.public.baseURL,
    key: `post-${id}`
  })

  const post = computed(() => data.value?.data || null)

  return {
    data,
    post,
    pending,
    error,
    refresh
  }
}