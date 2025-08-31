import { ref } from 'vue'

export const useComments = () => {
  const comments = ref([])
  const loading = ref(false)
  const error = ref(null)
  const submitting = ref(false)

  // Fetch comments from API
  const fetchComments = async (serviceId = 1) => {
    loading.value = true
    error.value = null
    
    try {
      const response = await $fetch(`https://tansaz.liara.run/api/v1/services/${serviceId}/comments`)
      
      // Ensure we always get an array
      let commentsData = response      
      if (response && response.data) {
        commentsData = response.data
      }
      
      // Make sure it's an array
      if (Array.isArray(commentsData)) {
        comments.value = commentsData
      } else {
        comments.value = []
      }
      
      console.log('Fetched comments:', comments.value)
    } catch (err) {
      error.value = err.message || 'خطا در بارگذاری نظرات'
      comments.value = []
      console.error('Error fetching comments:', err)
    } finally {
      loading.value = false
    }
  }

  // Post a new comment or reply
  const postComment = async (commentData, serviceId = 1) => {
    submitting.value = true
    error.value = null
    
    try {
      const response = await $fetch(`https://tansaz.liara.run/api/v1/services/${serviceId}/comments`, {
        method: 'POST',
        body: commentData
      })
      
      // Add the new comment to the list
      let newComment = response
      if (response && response.data) {
        newComment = response.data
      }
      
      if (newComment && Array.isArray(comments.value)) {
        comments.value.unshift(newComment)
      }
      
      return response
    } catch (err) {
      error.value = err.message || 'خطا در ارسال نظر'
      console.error('Error posting comment:', err)
      throw err
    } finally {
      submitting.value = false
    }
  }

  // Format date helper
  const formatDate = (dateString) => {
    if (!dateString) return 'تاریخ نامشخص'
    
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now - date)
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24))
    
    if (diffDays === 0) {
      return 'امروز'
    } else if (diffDays === 1) {
      return '1 روز قبل'
    } else {
      return `${diffDays} روز قبل`
    }
  }

  return {
    comments,
    loading,
    error,
    submitting,
    fetchComments,
    postComment,
    formatDate
  }
}