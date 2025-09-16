export interface Category {
  id: number
  name: string
  slug: string
  seo_title: string
  meta_description: string
  description: string
  is_active: number
}

export interface CategoryLinks {
  first: string
  last: string
  prev: string | null
  next: string | null
}

export interface CategoryMeta {
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

export interface CategoriesResponse {
  data: Category[]
  links: CategoryLinks
  meta: CategoryMeta
}

export const useCategories = (page: number = 1) => {
  const config = useRuntimeConfig()
  
  const { data, pending, error, refresh } = useFetch<CategoriesResponse>('/categories', {
    baseURL: config.public.baseURL,
    query: {
      page
    },
    key: `categories-${page}`
  })

  // Transform API data to match component's expected format
  const categories = computed(() => {
    if (!data.value?.data) return []
    
    return data.value.data.map(category => ({
      id: category.id,
      name: category.name,
      slug: category.slug,
      seo_title: category.seo_title,
      meta_description: category.meta_description,
      description: category.description,
      is_active: category.is_active
    }))
  })

  const links = computed(() => data.value?.links || null)
  const meta = computed(() => data.value?.meta || null)

  return {
    data,
    categories,
    links,
    meta,
    pending,
    error,
    refresh
  }
}