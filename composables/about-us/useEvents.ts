export interface Event {
  id: number
  thumb_image: string
  main_image: string
  title: string
  date: string
}

export interface EventsResponse {
  data: Event[]
}

export const useEvents = () => {
  const config = useRuntimeConfig()
  
  const { data, pending, error, refresh } = useFetch<EventsResponse>('/events', {
    baseURL: config.public.baseURL,
    key: 'events'
  })

  // Transform API data to match component's expected format
  const events = computed(() => {
    if (!data.value?.data) return []
    
    return data.value.data.map(event => ({
      id: event.id,
      image: event.main_image,
      title: event.title,
      date: event.date,
      thumb_image: event.thumb_image
    }))
  })

  return {
    data,
    events,
    pending,
    error,
    refresh
  }
}