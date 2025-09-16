<script setup>
import { useStartWebsite } from "@/store/initWebsite";
import { useSinglePost } from '~/composables/blogs/useSinglePost'

const route = useRoute()
const router = useRouter()
const startWebsite = useStartWebsite()

// Get post ID from route params
const postId = route.params.id

// Fetch single post data
const { post, pending, error } = useSinglePost(postId)

// Handle loading and error states
if (error.value) {
  throw createError({
    statusCode: 404,
    statusMessage: 'Post not found'
  })
}

// Set page meta
useHead({
  title: computed(() => post.value?.title || 'Loading...'),
})

const goBack = () => {
  if (window.history.length > 1) {
    router.back();
  } else {
    router.push('/');
  }
};

onMounted(() => {
  startWebsite.setImageClicked(true);
});
</script>

<template>
  <div class="flex flex-col bg-[#EFEFEF] pt-[84px] mb-[30px]">
    <!-- Loading state -->
    <div v-if="pending" class="flex justify-center items-center min-h-[400px]">
      <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-[#ED1C24]"></div>
    </div>

    <!-- Post content -->
    <template v-else-if="post">
      <header class="w-full px-[16px]">
        <section class="flex items-center justify-between w-full">
          <article class="flex gap-[10px]">
            <span class="bg-white flex items-center justify-center size-[34px] rounded-full">
              <Icon name="solar:share-bold-duotone" size="18" style="color: #ED1C24" />
            </span>
            <span class="bg-white flex items-center justify-center size-[34px] rounded-full">
              <Icon name="mdi:heart" size="18" style="color: #ED1C24" />
            </span>
          </article>
          <img @click="goBack" src="/icons/left-arrow.svg" alt="Go back" />
        </section>

        <section class="text-[#2E2E2E]" data-aos="fade-up" data-aos-once="true">
          <img 
            class="h-[250px] object-cover object-center rounded-2xl w-full my-[20px]" 
            :src="post.main_image"
            :alt="post.title"
          >
          <article class="flex flex-col gap-[12px]">
            <h1 class="text-[20px] font-bold">{{ post.title }}</h1>
            <div class="flex gap-4">
              <span class="flex items-center gap-[5px] text-[14px] font-medium leading-[23px]">
                <Icon name="solar:calendar-outline" size="18" style="color: #ED1C24" />
                {{ post.created_at_fa }}
              </span>
              <span class="flex items-center gap-[5px] text-[14px] font-medium leading-[23px]">
                <Icon name="iconamoon:clock" size="18" style="color: #ED1C24" />
                2 دقیقه
              </span>
              <span class="flex items-center gap-[5px] text-[14px] font-medium leading-[23px]">
                <Icon name="clarity:eye-show-line" size="18" style="color: #ED1C24" />
                555 نفر
              </span>
            </div>
          </article>
        </section>
      </header>

      <div class="flex flex-col pt-[20px] px-[16px] pb-[16px] z-[10]" data-aos="fade-up" data-aos-once="true">
        <div 
          class="text-[16px] text-justify text-[#2E2E2E] leading-[30px] mt-[10px] prose prose-lg max-w-none"
          v-html="post.body"
        />
      </div>
      
      <HomeBlogsSection />
      <Comments />
    </template>
  </div>
</template>

<style scoped>
/* Gradient سفارشی */
.custom-gradient {
  background-repeat: no-repeat;
  background-size: cover;
  background-image: 
    linear-gradient(0deg, #F5F5F5, #F5F5F5),
    linear-gradient(180deg, rgba(0, 0, 0, 0) 90.73%, rgba(0, 0, 0, 0.2) 110.4%);
}

/* متن‌های داخل محتوای Prose */
:deep(.prose p) {
  font-size: 16px;
  text-align: justify;
  color: #2E2E2E;
  line-height: 30px;
  margin-bottom: 16px;
}

:deep(.prose h1),
:deep(.prose h2),
:deep(.prose h3) {
  color: #2E2E2E;
  font-weight: bold;
  margin-bottom: 16px;
}

:deep(.prose ul),
:deep(.prose ol) {
  color: #2E2E2E;
  line-height: 30px;
  margin-bottom: 16px;
}
</style>
