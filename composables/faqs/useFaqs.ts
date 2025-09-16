export interface Service {
  id: number
  thumb_image: string
  main_image: string
  name: string
  slug: string
  type: string
  created_at_fa: string
}

export interface FaqItem {
  id: number
  category: string
  question: string
  answer: string
  service: Service | null
}

export interface PaginationLinks {
  first: string | null
  last: string | null
  prev: string | null
  next: string | null
}

export interface PaginationMeta {
  current_page: number
  from: number | null
  last_page: number
  path: string
  per_page: number
  to: number | null
  total: number
}

export interface FaqsApiResponse {
  data: FaqItem[]
  links: PaginationLinks
  meta: PaginationMeta
}

export const useFaqs = () => {
  const config = useRuntimeConfig()
  const currentPage = ref(1)
  const perPage = ref(10)

  const { data: faqs, pending: loading, error, refresh } = useAsyncData<FaqsApiResponse>(
    'faqs',
    () => $fetch(`${config.public.baseURL}/faqs`, {
      params: {
        page: currentPage.value,
        per_page: perPage.value
      }
    }),
    {
      key: `faqs-${currentPage.value}-${perPage.value}`,
      default: () => ({
        data: [],
        links: {
          first: null,
          last: null,
          prev: null,
          next: null
        },
        meta: {
          current_page: 1,
          from: null,
          last_page: 1,
          path: '',
          per_page: 10,
          to: null,
          total: 0
        }
      })
    }
  )

  const goToPage = async (page: number) => {
    if (page >= 1 && page <= (faqs.value?.meta.last_page || 1)) {
      currentPage.value = page
      await refresh()
    }
  }

  const nextPage = async () => {
    if (faqs.value?.links.next) {
      await goToPage(currentPage.value + 1)
    }
  }

  const prevPage = async () => {
    if (faqs.value?.links.prev) {
      await goToPage(currentPage.value - 1)
    }
  }

  const hasNextPage = computed(() => !!faqs.value?.links.next)
  const hasPrevPage = computed(() => !!faqs.value?.links.prev)

  return {
    faqs: readonly(faqs),
    loading: readonly(loading),
    error: readonly(error),
    currentPage: readonly(currentPage),
    hasNextPage,
    hasPrevPage,
    goToPage,
    nextPage,
    prevPage,
    refresh
  }
}