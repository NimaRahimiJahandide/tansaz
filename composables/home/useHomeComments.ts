import { ref, computed } from 'vue'

export const useHomeComments = () => {
  // API endpoint - replace with your actual API URL
  const API_URL = 'https://tansaz.liara.run/api/v1/home-comments'

  // Using useFetch for better Nuxt 3 integration and SSR support
  const { data: comments, pending: loading, error, refresh: fetchComments } = useFetch(API_URL, {
    // Transform the response to handle different API response structures
    transform: (data: any) => {
      if (Array.isArray(data)) {
        return data
      }
      return data?.data || data?.comments || []
    },
    // Default value when no data is available
    default: () => [],
    // Handle errors gracefully
    onResponseError({ request, response, options }) {
      console.error('API Error:', response.status, response.statusText)
    },
    // Optional: Add caching
    key: 'home-comments',
    // Optional: Server-side rendering
    server: true
  })

  // Computed properties
  const hasComments = computed(() => comments.value && comments.value.length > 0)
  const commentsCount = computed(() => comments.value ? comments.value.length : 0)

  // Error message in Persian
  const errorMessage = computed(() => {
    if (!error.value) return null
    return error.value.message || 'خطا در دریافت کامنت‌ها'
  })

  return {
    // State
    comments,
    loading,
    error: errorMessage,
    
    // Actions
    fetchComments,
    
    // Computed
    hasComments,
    commentsCount
  }
}