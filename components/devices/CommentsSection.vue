<template>
  <div class="bg-gray-100  p-4 my-8">
    <div class="rounded-lg container px-5 mx-auto overflow-hidden">
      <div class="md:flex w-full">
        <!-- Right Side -->
        <div class="p-4 flex flex-col md:p-8 md:w-1/2">
          <div class="flex flex-col md:gap-5 gap-2.5 pb-8">
            <h3 class="md:text-[40px] text-xl font-bold">دیدگاه کاربران</h3>
            <p class="md:text-xl text-sm font-bold">با ثبت دیدگاه خود ما را در ارائه خدمات بهتر یاری کنید</p>
          </div>
          <form class="flex flex-col" @submit.prevent="handleSubmit">
            <!-- Name Input -->
            <div class="mb-4">
              <label for="name" class="block text-gray-700 font-medium mb-2">نام</label>
              <input type="text" id="name" v-model="formData.name" placeholder="نام خود را وارد کنید"
                class="w-full px-3 py-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:border-indigo-500" />
            </div>

            <!-- Comment Textarea -->
            <div class="mb-4">
              <label for="comment" class="block text-gray-700 font-medium mb-2">دیدگاه شما</label>
              <textarea id="comment" v-model="formData.comment" placeholder="دیدگاه خود را بنویسید" rows="4"
                class="w-full px-3 py-2 resize-none bg-white border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"></textarea>
            </div>

            <!-- Submit Button -->
            <button type="submit"
              class="w-28 self-end bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 text-center items-center flex justify-center">
              ثبت دیدگاه
            </button>
          </form>
        </div>

        <!-- Left Side -->
        <div class="flex flex-col items-center justify-center gap-5 md:w-1/2 ">
          <DevicesCardComment v-for="comment in comments" :key="comment.id" :comment="comment" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  comments: Object
})

const formData = reactive({
  name: '',
  comment: ''
})

const handleSubmit = ()=> {
  console.log('Form Data:', this.formData);
  alert('دیدگاه شما با موفقیت ثبت شد!');
}
</script>

<style scoped>
/* Optional custom styles */
</style>