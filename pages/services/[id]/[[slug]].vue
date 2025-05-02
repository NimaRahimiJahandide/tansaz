<script setup lang="ts">
import axios from "axios";
import pageData from '@/assets/data/pageData.json';
import { useLoadingState } from "@/store/loadingState";

const blogs = ref([]);
const getBlogs = async () => {
  await axios.get(`/categories/1/posts`)
    .then(response => {
      blogs.value = response.data.data;
    }).catch(err => {
      console.log(err);
    })
};

const loadingState = useLoadingState();

setTimeout(() => {
  loadingState.setLoading(false);
}, 1000);

const route = useRoute();

interface Card {
  id: number;
  title: string;
  icon: string;
  route?: string;
}

interface Section {
  title: string;
  description: string;
}

interface BodyContent {
  code: string;
}

interface PageData {
  id: number;
  slug: string;
  title: string;
  data: {
    firstSection: Section;
    banner: {
      title: string;
      cards: Card[];
      dontShow?: boolean;
    };
    firstBody: {
      title: string;
      image: string;
      lists: string[];
    };
    secondBody: BodyContent;
    thirdBody: BodyContent;
    slides: Array<{
      id: number;
      image: string;
    }>;
    cards: Array<{
      id: number;
      text: string;
    }>;
  };
}

const pages = ref<PageData[]>(pageData);
const currentPage = ref<PageData>();

const pageState = reactive({
  firstSection: {} as PageData['data']['firstSection'],
  banner: {} as PageData['data']['banner'],
  firstBody: {} as PageData['data']['firstBody'],
  secondBody: {} as PageData['data']['secondBody'],
  thirdBody: {} as PageData['data']['thirdBody'],
  slides: [] as PageData['data']['slides'],
  cards: [] as PageData['data']['cards']
});

watch(
  () => route.params.id,
  (newId) => {
    currentPage.value = pages.value.find(page =>
      page.id === parseInt(newId)
    );

    if (currentPage.value) {
      Object.assign(pageState, currentPage.value.data);
      pageState.firstSection = pageState.firstSection
      pageState.banner = pageState.banner
      pageState.firstBody = pageState.firstBody
      pageState.secondBody = pageState.secondBody
      pageState.thirdBody = pageState.thirdBody
      pageState.slides = pageState.slides
      pageState.cards = pageState.cards
    }
  },
  { immediate: true }
);

onMounted(() => {
  getBlogs();
});
</script>

<template>
  <div>
    <LoadingComponent v-show="loadingState.isLoading" />

    <div class="mt-[75px]" v-show="!loadingState.isLoading">

      <Head>
        <Title>تن ساز | {{ pageState.firstSection.title }} تن ساز</Title>
        <!-- <Link rel="canonical" :href="config.public.websiteURL + decodeURI(route.fullPath)" /> -->
        <Meta name="description" content="کلینیک زیبایی و لاغری تن ساز" />
        <Meta property="og:description" content="کلینیک زیبایی و لاغری تن ساز" />
        <Meta property="og:image" content="https://tansazmed.com/wp-content/uploads/2024/08/IMG_5022-1024x646.png" />
        <Meta property="og:image:secure_url"
          content="https://tansazmed.com/wp-content/uploads/2024/08/IMG_5022-1024x646.png" />
        <Meta property="og:image:width" content="400" />
        <Meta property="og:image:height" content="300" />
        <Meta property="og:image:alt" :content="`تن ساز | ${pageState.firstSection.title}`" />
        <Meta property="og:url" content="https://tansazmed.com/wp-content/uploads/2024/08/IMG_5022-1024x646.png" />
      </Head>
      <PagesFirstSection :firstSectionData="pageState.firstSection" />
      <ServicesSection :banner="pageState.banner" v-if="!pageState.banner.dontShow" />
      <div class="mt-[75px] max-w-[1240px] mx-auto px-5 text-justify">
        <div class="flex items-center md:flex-row flex-col gap-[20px] mt-[75px]">
          <div class="md:w-1/2">
            <h3 class="text-primary text-[30px]">
              {{ pageState.firstBody.title }}
            </h3>
            <div class="p-6 rounded-lg">
              <ul class="list-disc list-inside space-y-2 text-[14px] mr-4">
                <li v-for="(list, index) in pageState.firstBody.lists" :key="index">
                  {{ list }}
                </li>
              </ul>
            </div>
          </div>
          <div class="md:w-1/2">
            <img :src="pageState.firstBody.image" :alt="pageState.firstBody.title" />
          </div>
        </div>
      </div>
      <SliderBeforAfterExample :slides="pageState.slides" title="نمونه های قبل و بعد"
        description="با اطمینانی کامل، زیبایی خود را با ما دو چندان کنید" />
      <ReservationAndContactUsBanner />
      <div class="text-justify" v-html="pageState.secondBody.code"></div>
      <WhyTansaz title="چرا زیبایی و لاغری در کلینیک تن ساز" :cards="pageState.cards" />
      <div class="text-justify" v-html="pageState.thirdBody.code"></div>
      <ReservationForm />
      <FaqSection />
      <!-- <YoursSatisfaction /> -->
      <HomeBlogsSection :blogs="blogs" />
    </div>
  </div>
</template>

<style scoped></style>
