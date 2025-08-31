import { useApi } from '~/composables/api/useApi'

export interface FaqItem {
  id: number
  category: string
  question: string
  answer: string
}

export interface FaqApiResponse {
  data: FaqItem[]
}

export const useFaqApi = () => {
  const { get } = useApi()
  const faqs = ref<FaqItem[]>([])
  const loading = ref(false)
  const error = ref<string | null>(null)

  const fetchFaqs = async () => {
    try {
      loading.value = true
      error.value = null

      const response = await get<FaqApiResponse>('/home-faqs')
      
      faqs.value = response.data || []
    } catch (err) {
      console.error('Error fetching FAQs:', err)
      error.value = 'خطا در دریافت اطلاعات'
      
      // Fallback to default data in case of error
      faqs.value = [
        {
          id: 1,
          category: "عمومی",
          question: "سوال مورد نظر انجا قرار میگیرد؟",
          answer: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است.",
        }
      ]
    } finally {
      loading.value = false
    }
  }

  return {
    faqs: readonly(faqs),
    loading: readonly(loading),
    error: readonly(error),
    fetchFaqs
  }
}