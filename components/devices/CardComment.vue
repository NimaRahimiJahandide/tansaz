<template>
  <div class="mx-auto w-full" dir="rtl">
    <ToastSuccess  :title="successTitle" :description="successDescription" v-if="successTitle.length"/>
    <ToastDanger  :title="dangerTitle" :description="dangerDescription" v-if="dangerTitle.length"/>
    <div class="bg-white w-full rounded-3xl rounded-tr-none p-6 shadow-md border border-[#8080808C]">
      <!-- User Name Header -->
      <h3 class="text-lg font-bold mb-2 text-gray-800">{{comment.name}}</h3>

      <!-- User Comment/Description -->
      <p class="text-gray-600 text-sm leading-relaxed mb-4">
        {{ comment.text }}
      </p>

      <!-- Like Button -->
      <div class="flex items-center justify-end">
        <span class="ml-1 text-sm">{{comment.likes}}</span>
        <button :disabled="loading" class="flex items-center text-gray-500 hover:text-gray-700 transition-colors">
          <svg @click="commentLike(comment.id)" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-thumbs-up cursor-pointer">
            <path d="M7 10v12" />
            <path
              d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";

defineProps({
  comment: Object,
})

const successTitle = ref("");
const successDescription = ref("");
const dangerTitle = ref("");
const dangerDescription = ref("");

const loading = ref(false);
const router = useRouter();

const commentLike = async (id) => {
  loading.value = true;
  try {
    await axios.post(`/comments/${id}/like`);
    successTitle.value = 'نظر لایک شد'
    successDescription.value = 'نظر  با موفقیت لایک شد'
    setTimeout(() => {
      successTitle.value = "";
      router.go(0);
    }, 1500);
    loading.value = false;
  } catch (err) {
    console.log(err);
    
    loading.value = false;
    dangerTitle.value = "مشکلی پیش آمده!";
    dangerDescription.value = "دوباره تلاش کنید.";
    setTimeout(() => {
      dangerTitle.value = "";
    }, 3000);
  }
}
</script>