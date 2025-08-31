// composables/useHomeComments.js
import { ref, computed } from 'vue'
import axios from 'axios'

export const useHomeComments = () => {
  const comments = ref([])
  const loading = ref(false)
  const error = ref(null)

  // API endpoint
  const API_URL = 'https://tansaz.liara.run/api/v1/home-comments'

  // Fetch comments function
  const fetchComments = async () => {
    loading.value = true
    error.value = null
    
    try {
      const response = await axios.get(API_URL)
      console.log(response);
      
      comments.value = response.data
    } catch (err) {
      error.value = err.response?.data?.message || err.message || 'خطا در دریافت کامنت‌ها'
      console.error('Error fetching comments:', err)
    } finally {
      loading.value = false
    }
  }

  // Computed properties
  const hasComments = computed(() => comments.value.length > 0)
  const commentsCount = computed(() => comments.value.length)

  return {
    // State
    comments,
    loading,
    error,
    
    // Actions
    fetchComments,
    
    // Computed
    hasComments,
    commentsCount
  }
}