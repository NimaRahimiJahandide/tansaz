<script setup>
import { ref, onMounted, computed } from 'vue'
import { useComments } from '~/composables/global/useComments'
import { useRoute } from 'vue-router'

// Get service ID from route
const route = useRoute()
const serviceId = computed(() => route.params.id || 1)

const { comments, loading, error, submitting, fetchComments, postComment, formatDate } = useComments()

// Form data
const formData = ref({
  name: '',
  comment: ''
})

// Reply states
const showReplies = ref({})
const replyingTo = ref(null)
const replyData = ref({
  name: '',
  text: ''
})

// Fetch comments on mount
onMounted(async () => {
  console.log('Comments component mounted, service ID:', serviceId.value)
  await fetchComments(serviceId.value)
})

// Watch for route changes
watch(() => serviceId.value, async (newServiceId) => {
  if (newServiceId) {
    console.log('Service ID changed to:', newServiceId)
    await fetchComments(newServiceId)
  }
})

// Submit new comment
const submitComment = async () => {
  if (!formData.value.name.trim() || !formData.value.comment.trim()) {
    return
  }

  try {
    await postComment({
      name: formData.value.name,
      content: formData.value.comment
    }, serviceId.value)
    
    // Reset form
    formData.value = {
      name: '',
      comment: ''
    }
  } catch (err) {
    console.error('Submit comment error:', err)
  }
}

// Submit reply
const submitReply = async (parentId) => {
  if (!replyData.value.name.trim() || !replyData.value.text.trim()) {
    return
  }

  try {
    await postComment({
      name: replyData.value.name,
      text: replyData.value.text,
      parent_id: parentId
    }, serviceId.value)
    
    // Reset reply form
    replyData.value = {
      name: '',
      text: ''
    }
    replyingTo.value = null
  } catch (err) {
    console.error('Submit reply error:', err)
  }
}

// Toggle replies visibility
const toggleReplies = (commentId) => {
  showReplies.value[commentId] = !showReplies.value[commentId]
}

// Start replying
const startReply = (commentId) => {
  replyingTo.value = commentId
  replyData.value = {
    name: '',
    text: ''
  }
}

// Cancel reply
const cancelReply = () => {
  replyingTo.value = null
  replyData.value = {
    name: '',
    text: ''
  }
}

// Computed properties
const mainComments = computed(() => {
  console.log('Computing main comments from:', comments.value)
  if (!Array.isArray(comments.value)) {
    console.log('Comments is not an array:', typeof comments.value, comments.value)
    return []
  }
  const filtered = comments.value.filter(comment => !comment.parent_id)
  console.log('Main comments:', filtered)
  return filtered
})

const getReplies = (parentId) => {
  if (!Array.isArray(comments.value)) {
    return []
  }
  return comments.value.filter(comment => comment.parent_id === parentId)
}

const hasReplies = (commentId) => {
  return getReplies(commentId).length > 0
}

// Debug computed
const debugInfo = computed(() => ({
  commentsType: typeof comments.value,
  commentsLength: Array.isArray(comments.value) ? comments.value.length : 'not array',
  commentsValue: comments.value,
  mainCommentsLength: mainComments.value.length,
  loading: loading.value,
  error: error.value,
  serviceId: serviceId.value
}))
</script>

<template>
  <div>
    <div class="flex flex-col px-[16px] bg-[#F5F5F5] pt-[30px]">
      <p class="text-[20px] font-bold">
        <span class="text-[#000000]"> با</span>
        <span class="text-[#ED1C24]"> ثبت دیدگاه</span>
        <span class="text-[#000000]"> خود</span>
      </p>
      <p class="text-[20px] font-bold">
        <span class="text-[#000000]"> ما را در ارائه</span>
        <span class="text-[#ED1C24]"> خدمات بهتر </span>
        <span class="text-[#000000]"> یاری کنید</span>
      </p>

      <div class="flex flex-col gap-[4px] mt-[25px]">
        <p class="text-[14px] font-semibold text-[#000000]">نام و نام خانوادگی</p>
        <input 
          v-model="formData.name"
          type="text" 
          class="px-[16px] py-[8px] text-[14px] placeholder-[#929AA5] bg-[#ffffff] w-full h-[42px] rounded-[16px] focus:outline-0"
          placeholder="نام کامل خود را وارد کنید" 
        />
      </div>
      
      <div class="flex flex-col gap-[4px] mt-[25px]">
        <p class="text-[14px] font-semibold text-[#000000]">نظر شما</p>
        <textarea 
          v-model="formData.comment"
          class="px-[16px] py-[8px] text-[14px] placeholder-[#929AA5] bg-[#ffffff] w-full h-[126px] rounded-[16px] focus:outline-0"
          placeholder="نظر خود را بنویسید" 
        />
      </div>

      <button
        @click="submitComment"
        :disabled="submitting || !formData.name.trim() || !formData.comment.trim()"
        class="w-[134px] h-[36px] flex justify-center items-center rounded-[100px] bg-[#ED1C24] text-[14px] font-semibold text-[#ffffff] my-[28px] disabled:opacity-50 disabled:cursor-not-allowed">
        {{ submitting ? 'در حال ارسال...' : 'ارسال و ثبت نظر' }}
      </button>

      <!-- Error Message -->
      <div v-if="error" class="mb-4 p-3 bg-red-100 border border-red-300 text-red-700 rounded-[16px]">
        {{ error }}
      </div>
    </div>

    <div class="flex flex-col pt-[30px] bg-[#ffffff] px-[16px]">
      <p class="text-[20px] font-bold">
        <span class="text-[#ED1C24]"> نظرات</span>
        <span class="text-[#000000]"> کاربران</span>
      </p>
      
      <!-- Loading State -->
      <div v-if="loading" class="flex items-center justify-center py-8">
        <div class="animate-spin rounded-full h-6 w-6 border-b-2 border-[#ED1C24]"></div>
        <span class="mr-3 text-[#2E2E2E]">در حال بارگذاری نظرات...</span>
      </div>

      <!-- No Comments -->
      <div v-else-if="!loading && mainComments.length === 0" class="py-8 text-center">
        <p class="text-[#828282]">هنوز نظری ثبت نشده است. اولین نفر باشید!</p>
      </div>

      <!-- Comments List -->
      <div v-else data-aos="fade-up" data-aos-once="true">
        <div v-for="comment in mainComments" :key="comment.id" class="mb-6">
          <!-- Main Comment -->
          <div class="flex gap-[11px] mt-[25px]">
            <div class="size-[28px] rounded-full bg-[#000000]" />
            
            <div class="flex flex-col flex-1">
              <div class="flex items-center gap-[6px]">
                <p class="text-[12px] font-semibold text-[#000000]">{{ comment.name || comment.user?.name || 'کاربر ناشناس' }}</p>
                <p class="text-[12px] text-[#828282]">{{comment.created_at_fa}}</p>
              </div>
              <p class="text-[12px] leading-[20px] text-[#2E2E2E] mt-[5px]">
                {{ comment.text || comment.comment }}
              </p>

              <div class="flex items-center gap-[3px] mt-[10px]">
                <Icon name="ci:arrow-undo-down-left" size="14" style="color: #0077FF" />
                <p 
                  @click="startReply(comment.id)"
                  class="text-[12px] font-semibold text-[#0077FF] cursor-pointer hover:underline">
                  پاسخ
                </p>
              </div>
            </div>
          </div>

          <!-- Reply Form -->
          <div v-if="replyingTo === comment.id" class="mr-[39px] mt-4 p-4 bg-[#F5F5F5] rounded-[16px]">
            <div class="flex flex-col gap-[12px]">
              <input 
                v-model="replyData.name"
                type="text" 
                class="px-[16px] py-[8px] text-[12px] placeholder-[#929AA5] bg-[#ffffff] w-full h-[36px] rounded-[12px] focus:outline-0"
                placeholder="نام شما" 
              />
              <textarea 
                v-model="replyData.text"
                class="px-[16px] py-[8px] text-[12px] placeholder-[#929AA5] bg-[#ffffff] w-full h-[80px] rounded-[12px] focus:outline-0"
                placeholder="پاسخ خود را بنویسید" 
              />
              <div class="flex gap-2">
                <button
                  @click="submitReply(comment.id)"
                  :disabled="submitting || !replyData.name.trim() || !replyData.text.trim()"
                  class="px-4 py-2 bg-[#ED1C24] text-white text-[12px] rounded-[8px] disabled:opacity-50">
                  {{ submitting ? 'در حال ارسال...' : 'ارسال پاسخ' }}
                </button>
                <button
                  @click="cancelReply"
                  class="px-4 py-2 bg-[#828282] text-white text-[12px] rounded-[8px]">
                  لغو
                </button>
              </div>
            </div>
          </div>

          <!-- Show Replies Toggle -->
          <div v-if="hasReplies(comment.id)" class="flex items-center gap-[10px] mt-[15px]">
            <p 
              @click="toggleReplies(comment.id)"
              class="text-[12px] font-semibold text-[#000000] cursor-pointer hover:text-[#ED1C24]">
              {{ showReplies[comment.id] ? 'مخفی کردن پاسخ ها' : 'مشاهده پاسخ ها' }}
            </p>
            <div class="h-[1px] flex-1 bg-[#E1E1E1]" />
          </div>

          <!-- Replies -->
          <div v-if="showReplies[comment.id]" class="mr-[39px]">
            <div 
              v-for="reply in getReplies(comment.id)" 
              :key="reply.id"
              class="flex gap-[11px] mt-[25px]">
              <div class="size-[28px] rounded-full bg-[#000000]" />
              
              <div class="flex flex-col flex-1">
                <div class="flex items-center gap-[6px]">
                  <p class="text-[12px] font-semibold text-[#000000]">{{ reply.name || reply.user?.name || 'کاربر ناشناس' }}</p>
                  <p class="text-[12px] text-[#828282]">{{ comment.created_at_fa }}</p>
                </div>
                <p class="text-[12px] leading-[20px] text-[#2E2E2E] mt-[5px]">
                  {{ reply.text || reply.comment }}
                </p>

                <div class="flex items-center gap-[3px] mt-[10px]">
                  <Icon name="ci:arrow-undo-down-left" size="14" style="color: #0077FF" />
                  <p 
                    @click="startReply(comment.id)"
                    class="text-[12px] font-semibold text-[#0077FF] cursor-pointer hover:underline">
                    پاسخ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>