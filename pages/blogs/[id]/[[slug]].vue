<script setup lang="ts">
import { useLoadingState } from "@/store/loadingState";
import axios from "axios";
const loadingState = useLoadingState();
const route = useRoute();

const blogDetails = ref({});
const comments  = ref([]);

const getBlogDetail = async () => {
  loadingState.setLoading(true);
  await axios.get(`/posts/${route.params.id}`)
  .then(response=>{
    blogDetails.value = response.data.data;
  loadingState.setLoading(false);
  }) .catch(err=>{
    console.log(err);
  }) 
};

const getPostComments = async () => {
  loadingState.setLoading(true);
  await axios.get(
      `/posts/${route.params.id}/comments?isactive=1`
    )
    .then(response=>{
      comments.value = response.data.comments
      loadingState.setLoading(false);
    }).catch(err=>{
      console.log(err);
    }) 
};

onMounted(() => {
  getBlogDetail();
  getPostComments()
});

</script>
<template>
  <div>
    <Head>
      <Title>تن ساز | {{blogDetails.slug}}</Title>
      <!-- <Link rel="canonical" :href="config.public.websiteURL + decodeURI(route.fullPath)" /> -->
      <Meta name="description" content="کلینیک زیبایی و لاغری تن ساز" />
      <Meta property="og:description" content="کلینیک زیبایی و لاغری تن ساز" />
      <Meta property="og:image" content="https://tansazmed.com/wp-content/uploads/2024/08/IMG_5022-1024x646.png" />
      <Meta property="og:image:secure_url" content="https://tansazmed.com/wp-content/uploads/2024/08/IMG_5022-1024x646.png" />
      <Meta property="og:image:width" content="400" />
      <Meta property="og:image:height" content="300" />
      <Meta property="og:image:alt" content="تن ساز | مقالات" />
      <Meta property="og:url" content="https://tansazmed.com/wp-content/uploads/2024/08/IMG_5022-1024x646.png" />
    </Head>
    <!-- <div v-if="loadingState.isLoading">
      <div
        class="h-64 w-full bg-gray-300 animate-pulse relative">
       
      </div>
      <div class="max-w-[1240px] text-dark mx-auto px-3 mb-28">
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
    <LoadingComponent v-if="loadingState.isLoading"/>
    <div v-else>
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
      <div class="container max-w-[1240px] text-dark mx-auto px-5 mb-28">
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
                <div class="flex gap-1">
                  <Icon
                    name="mdi:clock-outline"
                    size="18"
                    class="text-gray-500"
                  />
                  <span>{{ blogDetails?.created_at_fa?.split(' ')[1] }}</span>
                </div>
                <div class="flex gap-1">
                  <Icon name="uis:schedule" size="18" class="text-gray-500" />
                  <span>{{ blogDetails?.created_at_fa?.split(' ')[0] }}</span>
                </div>
                <div class="flex gap-1">
                  <Icon
                    name="mage:message-dots-round"
                    size="18"
                    class="text-gray-500"
                  />
                  <span>{{ comments.length }} دیدگاه</span>
                </div>
              </div>
            </div>
            <section class="flex md:flex-row-reverse flex-col md:gap-10 gap-5">
              <article class="md:w-1/3 md:sticky md:top-0 w-full">
                <img
                  :src="blogDetails?.image"
                  :alt="blogDetails?.title"
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
