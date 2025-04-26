<script setup>
import { useLoadingState } from "../store/loadingState";
import axios from "axios";
const loadingState = useLoadingState();
</script>

<template>
  <Head>
    <Title>تن ساز | کلینیک زیبایی و لاغری تن ساز</Title>
    <!-- <Link rel="canonical" :href="config.public.websiteURL + decodeURI(route.fullPath)" /> -->
    <Meta name="description" content="کلینیک زیبایی و لاغری تن ساز" />
    <Meta property="og:description" content="کلینیک زیبایی و لاغری تن ساز" />
    <Meta property="og:image" content="https://tansazmed.com/wp-content/uploads/2024/08/IMG_5022-1024x646.png" />
    <Meta property="og:image:secure_url" content="https://tansazmed.com/wp-content/uploads/2024/08/IMG_5022-1024x646.png" />
    <Meta property="og:image:width" content="400" />
    <Meta property="og:image:height" content="300" />
    <Meta property="og:image:alt" content="تن ساز | " />
    <Meta property="og:url" content="https://tansazmed.com/wp-content/uploads/2024/08/IMG_5022-1024x646.png" />
  </Head>
  <LoadingComponent v-show="loadingState.isLoading"/>
  <main class="container max-w-[1240px] text-dark mx-auto px-5 mb-28 mt-[75px]" v-show="!loadingState.isLoading">
    <!-- start slider -->
    <section>
      <section class="md:flex hidden gap-1 mb-4">
        <nuxt-link to="/" class="underline">خانه</nuxt-link>
        /
        <nuxt-link to="/" class="underline">همه محصولات</nuxt-link>
        /
        <nuxt-link to="#">دستگاه کویتیشن CM Slime</nuxt-link>
      </section>
      <div class="flex gap-8 w-full">
        <DevicesImageSlider class="md:w-1/2 w-full" />
        <article class="md:flex flex-col hidden md:w-1/2 gap-8">
          <h1 class="font-bold md:text-3xl text-xl">دستگاه کویتیشن CM Slime</h1>
          <p class="text-justify leading-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
            طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
            تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد
            گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان
            رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که
            تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای
            اصلی و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
        </article>
      </div>
    </section>
    <!-- end slider -->
    <section class="flex text-sm gap-1 mt-8 md:hidden">
      <nuxt-link to="/" class="underline">خانه</nuxt-link>
      /
      <nuxt-link to="/" class="underline whitespace-nowrap">همه محصولات</nuxt-link>
      /
      <nuxt-link to="#">دستگاه کویتیشن CM Slime</nuxt-link>
    </section>
    <section>
      <div class="flex md:hidden flex-col gap-8 my-8">
        <h2 class="font-bold md:text-3xl text-xl">دستگاه کویتیشن CM Slime</h2>
        <p class="text-justify leading-8">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از
          طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی
          تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه درصد
          گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با نرم افزارها شناخت بیشتری را برای طراحان
          رایانه ای علی الخصوص طراحان خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید داشت که تمام
          و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و
          جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.</p>
      </div>
      <DevicesDescriptionSection />
      <DevicesVideosSlider class="mt-9" />
      <DevicesCustomerSatisfaction class="mt-9 hidden md:block" />
      <div class="h_iframe-aparat_embed_frame">
        <span style="display: block;padding-top: 57%"></span>
        <iframe class="w-full 2xl:h-[75vh] mt-9" src="https://www.aparat.com/video/video/embed/videohash/r85lx69/vt/frame" allowFullScreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"></iframe>
      </div>
      <DevicesCommentsSection class="mt-14" />
      <DevicesFaqSection  />
    </section>
  </main>
</template>

<style>
.h_iframe-aparat_embed_frame{position:relative;}.h_iframe-aparat_embed_frame .ratio{display:block;width:100%;height:auto;}.h_iframe-aparat_embed_frame iframe{position:absolute;top:0;left:0;width:100%;height:100%;}
</style>