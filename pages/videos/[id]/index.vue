<script setup>
import axios from "axios";

const route = useRoute();

// const videos = ref([
//   {
//     id: 0,
//     thumbnail: "/images/clinic1.jpg",
//     url: "https://www.aparat.com/video/video/embed/videohash/eauv152/vt/frame",
//     title: "عجیب ترین رویدادهای مراسم افتتاحیه المپیک ۲۰۲۴ پاریس!",
//     description:'هر نفسی که فرو می‌ بریم، مرگی را که مدام به ما دست‌ اندازی می‌کند پس می‌زند... در نهایت این مرگ است که باید پیروز شود، زیرا از هنگام تولد بخشی از سرنوشت ما شده و فقط مدت کوتاهی پیش از بلعیدن طعمه اش، با آن بازی می کند. با این همه، ما تا آنجا که ممکن است، با علاقه فراوان و دلواپسی زیاد به زندگی ادامه می دهیم، همان‌ طور که تا آنجا که ممکن است طولانی‌ تر در یک حباب صابون می‌ دمیم تا بزرگتر شود، گر چه با قطعیتی تمام می‌ دانیم که خواهد ترکید.',
//     views: "۲۷۲",
//     updateAt: "۳ روز پیش",
//   },
//   {
//     id: 1,
//     thumbnail: "/images/clinic2.jpg",
//     url: "https://www.aparat.com/video/video/embed/videohash/unrz7l6/vt/frame",
//     title: "تو این شرایط رو ترکش کن!!",
//     description:' مداد رنگی ها مشغول بودند به جز مداد سفید، هیچکس به او کار نمیداد، همه میگفتند : تو به هیچ دردی نمیخوری، یک شب که مداد رنگی ها تو سیاهی شب گم شده بودند، مداد سفید تا صبح ماه کشید مهتاب کشید و انقدر ستاره کشید که کوچک و کوچکتر شد صبح توی جعبه مداد رنگی جای خالی او با هیچ رنگی  پر نشد، به یاد هم باشیم شاید فردا ما هم در کنار هم نباشیم…',
//     views: "۱۵۰",
//     updateAt: "۱ روز پیش",
//   },
//   {
//     id: 2,
//     thumbnail: "/images/clinic3.jpg",
//     url: "https://www.aparat.com/video/video/embed/videohash/haxi66g/vt/frame",
//     title: "چکاب و زیبایی حامد و مجتبی روستایی!!",
//     description: 'پیر مردی هر روز تو محله می دید پسر کی با کفش های پاره و پای برهنه با توپ پلاستیکی فوتبال بازی می کند، روزی رفت ی کتانی نو خرید و اومد و به پسرک گفت بیا این کفشا رو بپوش…پسرک کفشا رو پوشید و خوشحال رو به پیر مرد کرد و گفت: شما خدایید؟! پیر مرد لبش را گزید و گفت نه! پسرک گفت پس دوست خدایی، چون من دیشب فقط به خدا گفتم كه کفش ندارم…',
//     views: "۱۵۰",
//     updateAt: "۱ روز پیش",
//   },
//   {
//     id: 3,
//     thumbnail: "/images/clinic1.jpg",
//     url: "https://www.aparat.com/video/video/embed/videohash/iahh8hq/vt/frame",
//     title: "چکاب و زیبایی حامد و مجتبی روستایی!!",
//     description: 'خالد حسینی تو رمان باد بادک باز مینویسه : ﻣﺮﺩ ﺁﻫﺴﺘﻪ ﺩﺭ ﮔﻮﺵ ﻓﺮﺯﻧﺪ ﺗﺎﺯﻩ ﺑﻪ ﺑﻠﻮﻍ ﺭﺳﯿﺪﻩ ﺍﺵ ﺑﺮﺍﯼ ﭘﻨﺪ ﭼﻨﯿﻦ ﻧﺠﻮﺍ ﮐﺮﺩ : ” ﭘﺴﺮﻡ ﺩﺭ ﺯﻧﺪﮔﯽ ﻫﺮﮔﺰ ﺩﺯﺩﯼ ﻧﮑﻦ ” ﭘﺴﺮ ﻣﺘﻌﺠﺐ ﻭ ﻣﺒﻬﻮﺕ ﺑﻪ ﭘﺪﺭ ﻧﮕﺎﻩ ﮐﺮﺩ ﺑﺪﯾﻦ ﻣﻌﻨﺎ ﮐﻪ ﺍﻭ ﻫﺮﮔﺰ ﺩﺳﺖ ﮐﺞ ﻧﺪﺍﺷﺘﻪ ﭘﺪﺭ ﺑﻪ ﻧﮕﺎﻩ ﻣﺘﻌﺠﺐ ﻓﺮﺯﻧﺪ ﻟﺒﺨﻨﺪﯼ ﺯﺩ ﻭ ﺍﺩﺍﻣﻪ ﺩﺍﺩ : ﺩﺭ ﺯﻧﺪﮔﯽ ﺩﺭﻭﻍ ﻧﮕﻮ ﭼﺮﺍ ﮐﻪ ﺍﮔﺮ ﮔﻔﺘﯽ ﺻﺪﺍﻗﺖ ﺭﺍ ﺩﺯﺩﯾﺪﻩ ﺍﯼ، ﺧﯿﺎﻧﺖ ﻧﮑﻦ ﮐﻪ ﺍﮔﺮ ﮐﺮﺩﯼ ﻋﺸﻖ ﺭﺍ ﺩﺯﺩﯾﺪﻩ ﺍﯼ، ﺧﺸﻮﻧﺖ ﻧﮑﻦ ﺍﮔﺮ ﮐﺮﺩﯼ ﻣﺤﺒﺖ ﺭﺍ ﺩﺯﺩﯾﺪﻩ ﺍﯼ، ﻧﺎ ﺣﻖ ﻧﮕﻮ ﺍﮔﺮ ﮔﻔﺘﯽ ﺣﻖ ﺭﺍ ﺩﺯﺩﯾﺪﻩ ﺍﯼ، ﺑﯽ ﺣﯿﺎﯾﯽ ﻧﮑﻦ ﺍﮔﺮ ﮐﺮﺩﯼ ﺷﺮﺍﻓﺖ ﺭﺍ ﺩﺯﺩﯾﺪﻩ ﺍی... ﭘﺲ ﺩﺭ ﺯﻧﺪﮔﯽ ﻓﻘﻂ ﺩﺯﺩﯼ نکن !',
//     views: "۱۵۰",
//     updateAt: "۱ روز پیش",
//   },
// ]);

// const video = computed(() => {
//   const videoId = parseInt(route.params.id, 10);
//   return videos.value.find(video => video.id === videoId);
// });

const video = ref({});
const categories = ref([]);

const getVideos = async () => {
  try {
    const data = await axios.get(`/videos/${route.params.id}`);

    const categoriesData = await axios.get("/categories?isactive=1");

    categories.value = categoriesData.data.data;

    video.value = data.data.data;
    console.log(video.value);
  } catch (err) {
    console.log(err);
  }
};

onMounted(() => {
  getVideos();
});
</script>

<template>
  <section class="flex min-h-screen">
    <VideosSidebarComponent class="sticky top-14" :list="categories" />
    <div
      class="container max-w-[1200px] mx-auto bg-white text-gray-800 rtl mb-28"
    >
      <div class="overflow-x-auto max-md:mt-16 scrollbar-hide md:hidden block">
        <ul class="flex items-center px-2 py-1 min-w-max">
          <a
            href="#"
            class="whitespace-nowrap px-3 py-1.5 text-xs font-medium hover:bg-gray-100 rounded-md transition-colors"
            >تبلیغات</a
          >
          <a
            href="#"
            class="whitespace-nowrap px-3 py-1.5 text-xs font-medium hover:bg-gray-100 rounded-md transition-colors"
            >فیلم و سریال</a
          >
          <a
            href="#"
            class="whitespace-nowrap px-3 py-1.5 text-xs font-medium hover:bg-gray-100 rounded-md transition-colors"
            >آموزشی</a
          >
          <a
            href="#"
            class="whitespace-nowrap px-3 py-1.5 text-xs font-medium hover:bg-gray-100 rounded-md transition-colors"
            >طنز</a
          >
          <a
            href="#"
            class="whitespace-nowrap px-3 py-1.5 text-xs font-medium hover:bg-gray-100 rounded-md transition-colors"
            >فیلم کودک</a
          >
          <a
            href="#"
            class="whitespace-nowrap px-3 py-1.5 text-xs font-medium hover:bg-gray-100 rounded-md transition-colors"
            >مذهبی</a
          >
        </ul>
      </div>
      <main class="flex flex-row-reverse">
        <div class="flex-1 p-5">
          <div class="h_iframe-aparat_embed_frame">
            <span style="display: block; padding-top: 57%"></span
            ><iframe
              :src="video?.script"
              allowFullScreen="true"
              webkitallowfullscreen="true"
              mozallowfullscreen="true"
            ></iframe>
          </div>
          <div class="flex flex-col gap-3 pt-5 pb-20">
            <h1 class="text-[24px] font-bold">{{ video?.title }}</h1>
            <p>{{ video.body }}</p>
          </div>
          <h2 class="font-bold text-lg mb-3">ویدیوهای مشابه</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <!-- <VideosCardComponent
              v-for="video in videos"
              :key="video.id"
              :video="video"
            /> -->
          </div>
        </div>
      </main>
      <div class="max-w-[1200px] px-5 pt-10">
        <BlogCommentSection :is-video="true"/>
      </div>
    </div>
  </section>
</template>
