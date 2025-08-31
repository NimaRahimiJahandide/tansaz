export const useService = () => {
  const loading = ref(false)
  const error = ref(null)
  const service = ref(null)

  const fetchService = async (id) => {
    loading.value = true
    error.value = null
    
    try {
      const { data } = await $fetch(`https://tansaz.liara.run/api/v1/services/${id}`)
      service.value = data
    } catch (err) {
      error.value = err
      console.error('Error fetching service:', err)
    } finally {
      loading.value = false
    }
  }

  return {
    service: readonly(service),
    loading: readonly(loading),
    error: readonly(error),
    fetchService
  }
}