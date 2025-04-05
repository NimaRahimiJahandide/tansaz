<script setup lang="ts">
import { useLoadingState } from "@/store/loadingState";
import axios from "axios";
const loadingState = useLoadingState();
const route = useRoute();

const blogDetails = ref({});

const getBlogDetail = async () => {
  try {
    const data = await axios.get(`/posts/${route.params.id}`);
    console.log(data.data)
    blogDetails.value = data.data.data;
  } catch (err) {
    console.log(err);
  }
};

onMounted(() => {
  getBlogDetail();
});

</script>
<template>
  <div>
    <!-- <div v-if="loadingState.isLoading">
      <div
        class="h-64 w-full bg-gray-300 animate-pulse relative">
       
      </div>
      <div class="max-w-[1200px] text-dark mx-auto px-3 mb-28">
        <div class="bg-white rounded-lg overflow-hidden">
          <div>
            <div class="flex md:flex-row flex-col md:gap-10 gap-5 mt-5">
              <div class="md:w-1/3 w-full h-[31rem] bg-gray-300 animate-pulse"></div>
              <div class="md:w-2/3 flex flex-col gap-3.5">
                <div class="w-80 h-[24px] bg-gray-300 rounded-4xl animate-pulse"></div>
                <div class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"></div>
                <div class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"></div>
                <div class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"></div>
                <div class="w-80 h-[24px] bg-gray-300 rounded-4xl animate-pulse"></div>
                <div class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"></div>
                <div class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"></div>
                <div class="w-full h-[24px] bg-gray-300 rounded-4xl animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <div>
      <div
        class="h-64 bg-cover bg-center relative"
        :style="
          `background-image: url('${blogDetails?.image}');`
        "
      >
        <div
          class="absolute inset-0 bg-black/50 flex items-center justify-center"
        >
          <h1
            class="text-white text-2xl text-center px-4 font-semibold"
            dir="rtl"
          >
         {{ blogDetails?.title}}
          </h1>
        </div>
      </div>
      <div class="container max-w-[1200px] text-dark mx-auto px-5 mb-28">
        <div class="bg-white rounded-lg min-h-screen">
          <div>
            <div
              class="flex md:flex-row flex-col md:items-center justify-between gap-4 text-sm text-gray-500 my-10"
            >
              <div class="flex gap-1">
                <nuxt-link to="/">خانه</nuxt-link>
                >
                <nuxt-link to="/blogs">مقالات</nuxt-link>
                >
                <nuxt-link to="#" class="font-bold"
                  >  {{ blogDetails?.title }}
                  </nuxt-link
                >
              </div>
              <div class="flex gap-4">
                <div class="flex items-center gap-1">
                  <Icon
                    name="mdi:clock-outline"
                    size="18"
                    class="text-gray-500"
                  />
                  <span>9:20</span>
                </div>
                <div class="flex items-center gap-1">
                  <Icon name="uis:schedule" size="18" class="text-gray-500" />
                  <span>{{ blogDetails?.created_at_fa }}</span>
                </div>
                <div class="flex items-center gap-1">
                  <Icon
                    name="mage:message-dots-round"
                    size="18"
                    class="text-gray-500"
                  />
                  <span>23 دیدگاه</span>
                </div>
              </div>
            </div>
            <section class="flex md:flex-row-reverse flex-col md:gap-10 gap-5">
              <article class="md:w-1/3 md:sticky md:top-0 w-full">
                <img
                  :src="blogDetails?.image"
                  alt="Beauty Product"
                  class="w-full max-h-[31rem] rounded-lg"
                />
                <div class="pb-10">
                  <p class="text-lg py-4">اشراک گذاری</p>
                  <div class="flex gap-3">
                    <span
                      class="bg-primary flex justify-center items-center rounded-full w-[30px] h-[30px] cursor-pointer"
                    >
                      <Icon
                        name="ic:baseline-facebook"
                        size="17px"
                        style="color: #fff"
                      />
                    </span>
                    <span
                      class="bg-primary flex justify-center items-center rounded-full w-[30px] h-[30px] cursor-pointer"
                    >
                      <Icon
                        name="ic:baseline-whatsapp"
                        size="17px"
                        style="color: #fff"
                      />
                    </span>
                    <span
                      class="bg-primary flex justify-center items-center rounded-full w-[30px] h-[30px] cursor-pointer"
                    >
                      <Icon
                        name="ic:baseline-telegram"
                        size="17px"
                        style="color: #fff"
                      />
                    </span>
                    <span
                      class="bg-primary flex justify-center items-center rounded-full w-[30px] h-[30px] cursor-pointer"
                    >
                      <Icon
                        name="ic:baseline-email"
                        size="17px"
                        style="color: #fff"
                      />
                    </span>
                  </div>
                </div>
              </article>
              <div class="md:w-2/3 flex flex-col gap-3.5">

                <div v-html="blogDetails?.body">

                </div>
                
                <!-- <h2 class="text-xl font-bold">
                  از پرفروش ترین برند مواد برندهای صنعت زیبایی
                </h2>
                <p class="text-light-grey leading-7 text-justify">
                  در صنعت زیبایی، انتخاب محصولات مناسب برای مراقبت از پوست، مو و
                  زیبایی به‌طور کلی، از اهمیت بسیاری برخوردار است. برندهای
                  بسیاری در این حوزه فعالیت می‌کنند، اما تنها تعداد محدودی از
                  آن‌ها توانسته‌اند به عنوان پرفروش‌ترین و محبوب‌ترین برندها
                  شناخته شوند. در اینجا به بررسی برخی از این برندها می‌پردازیم
                  که در سراسر جهان محبوبیت بسیاری دارند.
                </p>
                <h3 class="text-lg font-semibold">
                  از پرفروش ترین برند مواد برندهای صنعت زیبایی
                </h3>
                <p class="text-light-grey leading-7 text-justify">
                  ### ۱. **L’Oréal**
                </p>
                <p class="text-light-grey leading-7 text-justify">
                  شرکت فرانسوی L’Oréal یکی از بزرگترین و معروف‌ترین برندهای
                  زیبایی در جهان است. این برند با بیش از صد سال سابقه، طیف
                  گسترده‌ای از محصولات زیبایی از جمله محصولات مراقبت از پوست،
                  مو، و لوازم آرایشی را تولید می‌کند. L’Oréal همیشه به دلیل
                  نوآوری در تولید محصولات با کیفیت بالا شناخته شده و دارای
                  زیرمجموعه‌های مشهوری مانند Lancôme، Maybelline، و Kiehl’s است.
                  این برند به عنوان یکی از پیشروان صنعت زیبایی، همواره توجه
                  زیادی به تحقیقات علمی و توسعه محصولات جدید داشته است.
                </p> -->
                <BlogCommentSection class="mt-10" />
              </div>
            </section>
          </div>
        </div>
        <BlogRecentlyBlog />
      </div>
    </div>
  </div>
</template>
