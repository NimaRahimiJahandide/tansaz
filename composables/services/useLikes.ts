export const useLikes = () => {
  const loading = ref(false)
  const error = ref(null)

  // Get liked clips from localStorage
  const getLikedClips = () => {
    if (process.client) {
      const liked = localStorage.getItem('likedClips')
      return liked ? JSON.parse(liked) : []
    }
    return []
  }

  // Save liked clip to localStorage
  const saveLikedClip = (clipId) => {
    if (process.client) {
      const likedClips = getLikedClips()
      if (!likedClips.includes(clipId)) {
        likedClips.push(clipId)
        localStorage.setItem('likedClips', JSON.stringify(likedClips))
      }
    }
  }

  // Check if clip is already liked
  const isClipLiked = (clipId) => {
    const likedClips = getLikedClips()
    return likedClips.includes(clipId)
  }

  // Like a clip
  const likeClip = async (clipId) => {
    // Check if already liked
    if (isClipLiked(clipId)) {
      return { success: false, message: 'Clip already liked' }
    }

    loading.value = true
    error.value = null

    try {
      const response = await $fetch(`https://tansaz.liara.run/api/v1/clips/${clipId}/like`, {
        method: 'POST'
      })

      // Save to localStorage on success
      saveLikedClip(clipId)

      return { success: true, message: response.message }
    } catch (err) {
      error.value = err
      console.error('Error liking clip:', err)
      return { success: false, message: 'خطا در ثبت لایک' }
    } finally {
      loading.value = false
    }
  }

  return {
    loading: readonly(loading),
    error: readonly(error),
    likeClip,
    isClipLiked,
    getLikedClips
  }
}