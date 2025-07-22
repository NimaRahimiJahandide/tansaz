<script setup>
import { ref, onMounted, nextTick, onBeforeUnmount } from 'vue';
import { useRouter } from 'vue-router';
import { useStartWebsite } from "@/store/initWebsite";

const startWebsite = useStartWebsite();
const router = useRouter();

const reviews = ref([
  {
    id: 1,
    name: "نازنین بیاتی",
    subtitle: "رژیم غذایی",
    experience: "تجربه و دیدگاه",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
    avatar: "/images/avatar1.png",
    rating: 5
  },
  {
    id: 2,
    name: "نازنین بیاتی",
    subtitle: "رژیم غذایی",
    experience: "تجربه و دیدگاه",
    description: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد",
    avatar: "/images/avatar2.png",
    rating: 4
  }
]);

const categories = ref([
  { id: 0, name: 'همه', active: true },
  { id: 1, name: 'خدمات - لاغری', active: false },
  { id: 2, name: 'چربی سوزی موضعی', active: false },
  { id: 3, name: 'عضله ساز', active: false },
  { id: 4, name: 'آنالیز اندام', active: false }
]);

const selectedCategory = ref(0);
const showDropdown = ref(false);

const goBack = () => {
  if (window.history.length > 1) {
    router.back();
  } else {
    router.push('/');
  }
};

const selectCategory = (categoryId) => {
  selectedCategory.value = categoryId;
  categories.value.forEach(cat => {
    cat.active = cat.id === categoryId;
  });
  showDropdown.value = false;
};

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push('★');
    } else {
      stars.push('☆');
    }
  }
  return stars.join('');
};

onMounted(() => {
  startWebsite.setImageClicked(true);
});
</script>

<template>
  <div class="flex flex-col items-center bg-[#EFEFEF] pt-[84px] min-h-screen">
    <!-- Header Section -->
    <section class="w-full px-[16px]">
      <div class="flex items-center justify-between w-full mb-6">
        <header>
          <h1 class="text-xl font-bold">
            <span class="text-brand">نظرات</span> کاربران
          </h1>
        </header>
        <button @click="goBack" class="p-2">
          <img src="/icons/left-arrow.svg" alt="بازگشت" class="w-8 h-8" />
        </button>
      </div>

      <!-- Category Dropdown -->
      <div class="relative mb-3">
        <span class="text-[14px] font-medium leading-[23px] pb-1 block mb-2">انتخاب دسته بندی:
          <div class="bg-white w-full rounded-[14px] px-4 py-3 flex items-center justify-between">
            {{categories.find(cat => cat.id === selectedCategory)?.name || 'همه'}}
            <svg 
            class="w-5 h-5 transition-transform"
            :class="{ 'rotate-180': showDropdown }"
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
          </svg>
          </div>
        </span>
        <div class="mt-4 flex items-center gap-[10px] overflow-x-scroll custom-scroll">
          <div class="px-[16px] py-[8px] rounded-[30px] cursor-pointer"
            :class="selectedCategory === cat.id ? 'bg-brand text-white' : 'bg-[#ffffff] text-[#2E2E2E]'"
            v-for="cat in categories" :key="cat.id" @click="selectCategory(cat.id)">
            <p class="text-[14px] text-nowrap">
              {{ cat.name }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="w-full px-[16px] mb-6">
      <div class="text-right">
        <h2 class="text-lg font-semibold">
          <span class="text-brand">110</span> نظر وجود دارد
        </h2>
      </div>
    </section>

    <!-- Reviews Section -->
    <section class="w-full px-[16px] pb-[30px] flex flex-col gap-4">
      <article v-for="review in reviews" :key="review.id" class="bg-white rounded-2xl p-4 shadow-sm" data-aos="fade-up"
        data-aos-once="true">
        <!-- User Info -->
        <div class="flex items-center border-b border-[#E1E1E1] pb-4 justify-between mb-4">
          <div class="flex items-center gap-3">
            <div>
              <h3 class="font-bold text-[20px] text-[#2E2E2E] pb-1.5">
                <span class="text-brand">{{ review.name.split(' ')[0] }}</span>
                {{ review.name.split(' ').slice(1).join(' ') }}
              </h3>
              <p class="text-sm text-[#2E2E2E] font-medium">{{ review.subtitle }}</p>
            </div>
          </div>

          <!-- Service Button -->
          <button class="bg-brand text-white px-4 py-2 rounded-full text-sm font-medium">
            مشاهده خدمت
          </button>
        </div>

        <!-- Experience Title -->
        <div class="mb-3">
          <h4 class="font-medium text-[14px] text-brand">{{ review.experience }}</h4>
        </div>

        <!-- Review Content -->
        <div class="text-[#2E2E2E] text-base text-justify leading-[25px] mb-4">
          {{ review.description }}
        </div>

      </article>

      <!-- Load More Button -->
      <button class="mt-8 w-full bg-brand text-white text-center rounded-full h-[48px] font-semibold">
        مشاهده بیشتر
      </button>
    </section>
  </div>
</template>

<style scoped>
/* Custom scrollbar styles if needed */
.custom-scroll::-webkit-scrollbar {
  width: 0px;
}

/* Dropdown animation */
.dropdown-enter-active,
.dropdown-leave-active {
  transition: all 0.3s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>