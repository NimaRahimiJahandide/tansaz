<script setup lang="ts">
import { useLoadingState } from "@/store/loadingState";
import axios from "axios";
const loadingState = useLoadingState();
const route = useRoute();

const deviceDetails = ref({});
const comments = ref([]);
const srcValue = ref(null)

const getDevices = async () => {
  // loadingState.setLoading(true);
  await axios.get(`/device-infos/${route.params.id}`)
    .then(response => {
      deviceDetails.value = response.data.data;
      const script = deviceDetails.value.clips[0].script;
      if (script.includes("aparat.com/v/")) {
        srcValue.value = script.split("/").pop().replace(/["',]/, '').trim();
      }
      else if (script.includes("aparat.com/embed/")) {
        const match = script.match(/aparat\.com\/embed\/([^?&"]+)/);
        srcValue.value = match ? match[1] : null;
      }
      else {
        srcValue.value = null;
        console.error("قالب شناسه ویدیو نامعتبر است!");
      }
      loadingState.setLoading(false);
    }).catch(err => {
      console.log(err);
    })
};

const getPostComments = async () => {
  // loadingState.setLoading(true);
  await axios.get(
    `/device-infos/${route.params.id}/comments?isactive=1`
  )
    .then(response => {
      comments.value = response.data.comments
      loadingState.setLoading(false);
    }).catch(err => {
      console.log(err);
    })
};

let isExtend = ref(true)

onMounted(() => {
  getDevices();
  getPostComments()
});
</script>

<template>
  <div>
    <Head>
      <Title>تن ساز | {{ deviceDetails.title }}</Title>
      <!-- <Link rel="canonical" :href="config.public.websiteURL + decodeURI(route.fullPath)" /> -->
      <Meta name="description" content="کلینیک زیبایی و لاغری تن ساز" />
      <Meta property="og:description" content="کلینیک زیبایی و لاغری تن ساز" />
      <Meta property="og:image" content="https://tansazmed.com/wp-content/uploads/2024/08/IMG_5022-1024x646.png" />
      <Meta property="og:image:secure_url"
        content="https://tansazmed.com/wp-content/uploads/2024/08/IMG_5022-1024x646.png" />
      <Meta property="og:image:width" content="400" />
      <Meta property="og:image:height" content="300" />
      <Meta property="og:image:alt" content="تن ساز | " />
      <Meta property="og:url" content="https://tansazmed.com/wp-content/uploads/2024/08/IMG_5022-1024x646.png" />
    </Head>
    <LoadingComponent v-show="loadingState.isLoading" />
    <main class="text-dark mx-auto  mb-28 md:mt-[20px] mt-14" v-show="!loadingState.isLoading">
      <div class="container px-5 mx-auto">
        <!-- start slider -->
        <section>
          <section class="md:flex hidden text-xs gap-1">
            <nuxt-link to="/" class="underline">خانه</nuxt-link>
            /
            <nuxt-link to="/" class="underline">همه محصولات</nuxt-link>
            /
            <nuxt-link to="#">{{ deviceDetails.title }}</nuxt-link>
          </section>
          <div class="flex gap-8 mt-6 w-full">
            <DevicesImageSlider :slider="deviceDetails.images" class="md:w-1/2 w-full" />
            <article class="md:flex flex-col hidden md:w-1/2 gap-8 mb-4">
              <h1 class="font-bold md:text-[44px] text-xl">{{ deviceDetails.title }}</h1>
              <div>
                <p class="text-justify leading-8" v-if="isExtend">{{ deviceDetails?.full_description?.substring(0, 500) + '...' }}</p>
                <p class="text-justify leading-8" v-else>{{ deviceDetails?.full_description }}</p>
                <span @click="isExtend = !isExtend" class="cursor-pointer text-primary">{{isExtend ? 'مشاهده کمتر': 'مشاهده بیشتر'}}</span>
              </div>
            </article>
          </div>
        </section>
        <!-- end slider -->
        <section class="flex text-xs gap-1 mt-8 md:hidden">
          <nuxt-link to="/" class="underline">خانه</nuxt-link>
          /
          <nuxt-link to="/" class="underline whitespace-nowrap">همه محصولات</nuxt-link>
          /
          <nuxt-link to="#">{{ deviceDetails.title }}</nuxt-link>
        </section>
      </div>
      <section>
        <div class="flex md:hidden flex-col gap-8 my-8 container px-5 mx-auto">
          <h2 class="font-bold md:text-[44px] text-xl">{{ deviceDetails.title }}</h2>
          <div>
            <p class="text-justify leading-8" v-if="isExtend">{{ deviceDetails?.full_description?.substring(0, 500) + '...' }}</p>
            <p class="text-justify leading-8" v-else>{{ deviceDetails?.full_description }}</p>
            <span @click="isExtend = !isExtend" class="cursor-pointer text-primary">{{isExtend ? 'مشاهده کمتر': 'مشاهده بیشتر'}}</span>
          </div>
        </div>
        <div class="container px-5 mx-auto">
          <DevicesDescriptionSection :title="deviceDetails.title" :shortDescription="deviceDetails.short_description"
            :functionality="deviceDetails.functionality" />
          <div>
            <DevicesVideosSlider v-if="deviceDetails.satisfactions" :clips="deviceDetails.satisfactions" class="mt-9" />
          </div>
          <DevicesCustomerSatisfaction :pics="deviceDetails.beforeAfters" class="mt-9" />
          <div class="h_iframe-aparat_embed_frame">
            <span style="display: block;padding-top: 57%"></span>
            <iframe class="w-full 2xl:h-[75vh] mt-9"
              :src="`https://www.aparat.com/video/video/embed/videohash/${srcValue}/vt/frame`" allowFullScreen="true"
              webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
          </div>
        </div>
        <DevicesCommentsSection :comments="comments" class="mt-14" />
        <DevicesFaqSection />
      </section>
    </main>
  </div>
</template>

<style>
.h_iframe-aparat_embed_frame {
  position: relative;
}

.h_iframe-aparat_embed_frame .ratio {
  display: block;
  width: 100%;
  height: auto;
}

.h_iframe-aparat_embed_frame iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height:100%;
}
</style>