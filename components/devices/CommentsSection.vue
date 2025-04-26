<template>
  <div class="bg-gray-100 md:h-[70vh] p-4 my-8">
    <div class="rounded-lg overflow-hidden">
      <div class="md:flex w-full">
        <!-- Left Side -->
        <div class="p-4 md:p-8 md:w-1/2">
          <h1 class="text-2xl font-bold mb-4">دیدگاه کاربران</h1>
          <form class="" @submit.prevent="handleSubmit">
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
              class="w-28 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mt-4 text-center items-center flex justify-center">
              ثبت دیدگاه
            </button>
          </form>
        </div>

        <!-- Right Side (Optional: Image or Instructions) -->
        <div class="flex flex-col gap-5 md:w-1/2 ">
          <DevicesCardComment />
          <DevicesCardComment />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        comment: ''
      }
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission logic here
      console.log('Form Data:', this.formData);
      alert('دیدگاه شما با موفقیت ثبت شد!');
    }
  }
};
</script>

<style scoped>
/* Optional custom styles */
</style>