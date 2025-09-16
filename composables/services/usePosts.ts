export const usePosts = () => {
  const loading = ref(false)
  const error = ref(null)
  const posts = ref([])
  const meta = ref(null)

  const fetchPosts = async (serviceId, page = 1) => {
    loading.value = true
    error.value = null
    
    try {
      const response = await $fetch(`https://tansaz.liara.run/api/v1/services/${serviceId}/posts?page=${page}`)
      posts.value = response.data
      meta.value = response.meta
    } catch (err) {
      error.value = err
      console.error('Error fetching posts:', err)
    } finally {
      loading.value = false
    }
  }

  return {
    posts: readonly(posts),
    meta: readonly(meta),
    loading: readonly(loading),
    error: readonly(error),
    fetchPosts
  }
}