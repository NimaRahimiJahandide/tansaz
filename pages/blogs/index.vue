<script setup>
import { ref, onMounted, nextTick, onBeforeUnmount, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStartWebsite } from "@/store/initWebsite"
import { usePosts } from '~/composables/blogs/usePosts'

const startWebsite = useStartWebsite()
const router = useRouter()
const route = useRoute()

// Get current page from query params
const currentPage = ref(parseInt(route.query.page) || 1)

// Use the composable
const { posts, links, meta, pending, error } = usePosts(currentPage.value)

// Watch for page changes in query params
watch(() => route.query.page, (newPage) => {
  currentPage.value = parseInt(newPage) || 1
})

const categoryList = ref([
  'همه مقالات',
  'مراقبت پوست',
  'لیزر موهای زائد',
  'کرم ضد آفتاب',
  'مراقبت مو',
  'زیبایی صورت',
  'لاغری',
  'سلامت پوست'
])

const showLeftFade = ref(false)

const goBack = () => {
  if (window.history.length > 1) {
    router.back()
  } else {
    router.push('/')
  }
}

const toggleLike = (blogId) => {
  const blog = posts.value.find(b => b.id === blogId)
  if (blog) {
    blog.liked = !blog.liked
  }
}

const selectedCategory = ref(0)

const goToBlog = (slug) => {
  router.push(`/blogs/${slug}`)
}

const goToPage = (page) => {
  if (page >= 1 && page <= meta.value?.last_page) {
    router.push({
      path: '/blogs',
      query: { page }
    })
  }
}

const checkScrollable = () => {
  nextTick(() => {
    const scrollContainer = document.querySelector('.custom-scroll')
    if (scrollContainer) {
      showLeftFade.value = scrollContainer.scrollWidth > scrollContainer.clientWidth
    }
  })
}

onMounted(() => {
  startWebsite.setImageClicked(true)
  checkScrollable()
  window.addEventListener('resize', checkScrollable)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', checkScrollable)
})
</script>

<template>
  <div class="flex flex-col items-center bg-[#EFEFEF] pt-[84px]">
    <section class="w-full px-[16px]">
      <div class="flex items-center justify-between w-full">
        <header class="">
          <h1 class="text-xl font-bold">
            <span class="text-brand">مقالات</span> کاربردی
          </h1>
        </header>

        <img @click="goBack" src="/icons/left-arrow.svg" alt="" />
      </div>

      <div class="flex items-center h-[46px] bg-[#ffffff] rounded-[14px] mt-[16px] w-full px-[16px]">
        <img src="/icons/search-icon.svg" alt="" class="size-[20px]" />
        <input type="text" name="" id="" placeholder="سوال مورد نظرتان را جستجو کنید..."
          class="p-[8px] w-full h-full focus:outline-0 placeholder-[#2E2E2E80]" />
      </div>
    </section>

    <section class="flex flex-col gap-[4px] w-full mt-[10px] pr-[16px]">
      <div class="w-full relative">
        <transition name="blog-fade">
          <div class="mt-4 flex items-center gap-[10px] overflow-x-scroll custom-scroll">
            <div class="px-[16px] py-[8px] rounded-[30px] cursor-pointer"
              :class="selectedCategory == i ? 'bg-[#ED1C24]' : 'bg-[#ffffff] '" v-for="(x, i) in categoryList" :key="i"
              @click="selectedCategory = i">
              <p class="text-[14px] text-nowrap" :class="selectedCategory == i ? 'text-[#ffffff]' : 'text-[#2E2E2E] '">
                {{ x }}
              </p>
            </div>
          </div>
        </transition>
        <!-- Fade effect on the left side -->
        <div class="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#EFEFEF] to-transparent pointer-events-none z-10"></div>
      </div>
    </section>

    <section class="bg-[#EFEFEF] pb-[30px] pt-[18px] w-full px-[16px] flex flex-col gap-4">
      <!-- Loading state -->
      <div v-if="pending" class="flex justify-center items-center py-8">
        <div class="animate-spin rounded-full h-8 w-8 border-b-2 border-brand"></div>
      </div>

      <!-- Error state -->
      <div v-else-if="error" class="text-center py-8 text-red-500">
        خطا در بارگذاری مقالات
      </div>

      <!-- Content -->
      <template v-else>
        <h2 class="text-lg font-semibold">
          <span class="text-brand">{{ meta?.total || 0 }}</span> مقاله وجود دارد
        </h2>

        <article class="rounded-2xl overflow-hidden relative" v-for="blog in posts" :key="blog.id" 
          @click="goToBlog(blog.slug)" data-aos="fade-up" data-aos-once="true">
          <!-- Heart image -->
          <span class="absolute right-4 top-3 cursor-pointer z-10" @click.stop="toggleLike(blog.id)">
            <img v-if="blog.liked" src="/icons/Heart-white.svg" alt="Heart-white" />
            <img v-else src="/icons/Heart.svg" alt="Heart" />
          </span>

          <!-- Image -->
          <img :src="blog.image" :alt="blog.title" class="w-full h-80 object-cover" />

          <!-- Overlay and Text -->
          <div class="absolute inset-0 bg-gradient-to-t from-[#151515] via-[#15151596] to-transparent via-[20.35%] from-[1.3%] flex flex-col justify-end p-4">
            <h3 class="text-lg font-bold text-white leading-6 mb-5">
              {{ blog.title }}
            </h3>
            <p class="flex text-xs font-medium text-white justify-between">
              <span class="mr-2">زمان مطالعه: {{ blog.duration }}</span>
              <span>تاریخ نشر: {{ blog.date }}</span>
            </p>
          </div>
        </article>

        <!-- Pagination Controls -->
        <div v-if="meta && meta.last_page > 1" class="flex justify-center items-center gap-4 mt-8">
          <!-- Previous Button -->
          <button 
            @click="goToPage(meta.current_page - 1)"
            :disabled="!links?.prev"
            :class="[
              'px-4 py-2 rounded-full font-semibold transition-colors',
              links?.prev 
                ? 'bg-brand text-white hover:bg-red-600' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            ]">
            قبلی
          </button>

          <!-- Page Numbers -->
          <div class="flex items-center gap-2">
            <span class="text-sm text-gray-600">
              صفحه {{ meta.current_page }} از {{ meta.last_page }}
            </span>
          </div>

          <!-- Next Button -->
          <button 
            @click="goToPage(meta.current_page + 1)"
            :disabled="!links?.next"
            :class="[
              'px-4 py-2 rounded-full font-semibold transition-colors',
              links?.next 
                ? 'bg-brand text-white hover:bg-red-600' 
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            ]">
            بعدی
          </button>
        </div>
      </template>
    </section>
  </div>
</template>

<style>
.custom-scroll::-webkit-scrollbar {
  width: 0px;
}

.blog-fade-enter-active {
  transition: all 0.3s ease;
}

.blog-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.blog-fade-enter-from,
.blog-fade-leave-to {
  transform: translateY(-20px);
  opacity: 0;
}
</style>