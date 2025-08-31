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
      console.log('Fetching comments for service:', serviceId)
      const response = await $fetch(`https://tansaz.liara.run/api/v1/services/${serviceId}/comments`)
      
      console.log('Raw API response:', response)
      
      // Handle different response structures
      let commentsData = []
      
      if (Array.isArray(response)) {
        commentsData = response
      } else if (response && Array.isArray(response.data)) {
        commentsData = response.data
      } else if (response && response.comments && Array.isArray(response.comments)) {
        commentsData = response.comments
      } else if (response && typeof response === 'object') {
        // Check for other possible array properties
        const possibleArrays = Object.values(response).find(val => Array.isArray(val))
        if (possibleArrays) {
          commentsData = possibleArrays
        }
      }
      
      console.log('Processed comments data:', commentsData)
      comments.value = commentsData
      
    } catch (err) {
      console.error('Error fetching comments:', err)
      error.value = err.message || 'خطا در بارگذاری نظرات'
      comments.value = []
    } finally {
      loading.value = false
    }
  }

  // Post a new comment or reply
  const postComment = async (commentData, serviceId = 1) => {
    submitting.value = true
    error.value = null
    
    try {
      console.log('Posting comment:', commentData, 'for service:', serviceId)
      const response = await $fetch(`https://tansaz.liara.run/api/v1/services/${serviceId}/comments`, {
        method: 'POST',
        body: commentData
      })
      
      console.log('Post comment response:', response)
      
      // Add the new comment to the list
      let newComment = response
      if (response && response.data) {
        newComment = response.data
      }
      
      if (newComment && Array.isArray(comments.value)) {
        comments.value.unshift(newComment)
      }
      
      // Refresh comments to get updated list
      await fetchComments(serviceId)
      
      return response
    } catch (err) {
      console.error('Error posting comment:', err)
      error.value = err.message || 'خطا در ارسال نظر'
      throw err
    } finally {
      submitting.value = false
    }
  }

  // Format date helper
  const formatDate = (dateString) => {
    if (!dateString) return 'تاریخ نامشخص'
    
    try {
      const date = new Date(dateString)
      if (isNaN(date.getTime())) return 'تاریخ نامعتبر'
      
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
    } catch (err) {
      console.error('Date formatting error:', err)
      return 'تاریخ نامشخص'
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