export const useServices = (page: number = 1) => {
  const { data, pending, error, refresh } = useFetch(`https://tansaz.liara.run/api/v1/services`, {
    key: `services-${page}`,
    query: { page },
    server: true,
    transform: (response: any) => {
      return {
        services: response.data || [],
        meta: response.meta || {},
        links: response.links || {}
      }
    }
  })

  return {
    data,
    pending,
    error,
    refresh
  }
}