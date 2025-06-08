<template>
  <div class="flex">
    <div class="max-w-[250px] w-full rounded-3xl overflow-hidden ">
      <!-- Image Section -->
      <div class="relative w-full">
        <div class="flex justify-center">
          <div class="relative w-full">
            <img 
              :src="image" 
              :alt="`${name} ${lastName}`"
              class="w-full h-[150px] object-cover object-top rounded-t-2xl transition-transform duration-300"
            />
          </div>
        </div>
      </div>

      <!-- Content Section -->
      <div class="bg-[#2E2E2E] text-white p-4">
        <!-- Name and Role -->
        <div class="mb-4">
          <h2 class="text-xl font-bold mb-1">
            <span class="text-brand">{{ name }}</span> {{ lastName }}
          </h2>
          <p class="text-white font-medium text-sm">{{ role }}</p>
        <hr class="my-[18px] border-[#FFFFFF4D]" />

        </div>

        <!-- Experience Section -->
        <div class="space-y-3">
          <h3 class="text-brand text-sm font-medium">
            تجربه و دیدگاه
          </h3>
          <p class="text-white text-sm leading-[25px]">
            {{ experience }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  name: {
    type: String,
    default: 'نازنین'
  },
  lastName: {
    type: String,
    default: 'بیاتی'
  },
  role: {
    type: String,
    default: 'عمل زیبایی پیکال لیفت'
  },
  experience: {
    type: String,
    default: 'لورم ایپسوم متن ساختگی یا تولید لورم ایپسوم متن ساختگی یا تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است.'
  },
  image: {
    type: String,
    default: '/api/placeholder/200/250'
  }
})
</script>

<style scoped>
</style>