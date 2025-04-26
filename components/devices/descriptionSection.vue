<script setup>
let active= ref(true)

</script>

<template>
    <div class="rounded-lg overflow-hidden">
        <div class="flex flex-row">
          <!-- Red sidebar -->
          <div class="w-10 md:w-16 h-[25vh] flex flex-col">
            <div @click="active = !active" :class="active ? 'bg-red-200' : ''" class="flex-1 rounded-r-2xl border border-l-0 cursor-pointer border-red-500 flex items-center justify-center">
              <span class="text-lg  font-bold transform rotate-90 text-center">
                توضیحات
              </span>
            </div>
            <div @click="active = !active" :class="active ? '' : 'bg-red-200'" class="flex-1 flex rounded-r-2xl border border-l-0 cursor-pointer border-red-500 items-center justify-center">
              <span class="whitespace-nowrap font-bold transform  rotate-90 text-center">عمکرد دستگاه</span>
            </div>
          </div>
          <!-- Main content area -->
          <div class="flex-1 shadow-md bg-gray-50 p-6 md:p-8">
            <h1 class="md:text-2xl text-xl font-bold mb-6 text-right">
              دستگاه کوتیشن CM Slime
            </h1>
            <p class="text-justify mb-4 leading-8" v-if="active">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد.
              در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
            </p>
            <p class="text-justify mb-4 leading-8" v-else>
              این راست نیست که هرچه عاشق‌ تر باشی بهتر درک می‌کنی. همه‌ی آنچه عشق و عاشقی از من می‌ خواهد فقط درکِ این حکمت است: دیگری نشناختنی است؛ ماتیِ او پرده‌ی ابهامی به روی یک راز نیست، بل گواهی است که در آن بازیِ بود و نمود هیچ‌ جایی ندارد. پس من در مسرتِ عشق ورزیدن به یک ناشناس غرق می‌شوم، کسی که تا ابد ناشناس خواهد ماند. سِیری عارفانه: من آن‌چه را نمی‌شناسم می‌شناسم...!
              این راست نیست که هرچه عاشق‌ تر باشی بهتر درک می‌کنی. همه‌ی آنچه عشق و عاشقی از من می‌ خواهد فقط درکِ این حکمت است: دیگری نشناختنی است؛ ماتیِ او پرده‌ی ابهامی به روی یک راز نیست، بل گواهی است که در آن بازیِ بود و نمود هیچ‌ جایی ندارد. پس من در مسرتِ عشق ورزیدن به یک ناشناس غرق می‌شوم، کسی که تا ابد ناشناس خواهد ماند. سِیری عارفانه: من آن‌چه را نمی‌شناسم می‌شناسم...!
            </p>
          </div>
        </div>
      </div>
</template>