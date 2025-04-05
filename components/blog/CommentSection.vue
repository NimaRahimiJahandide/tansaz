<script setup>
import { useVuelidate } from "@vuelidate/core";
import axios from "axios";
import {
  required,
  minLength,
  maxLength,
  numeric,
  helpers,
} from "@vuelidate/validators";

const props = defineProps({
  isVideo: Boolean,
});

const successTitle = ref("");
const successDescription = ref("");
const dangerTitle = ref("");
const dangerDescription = ref("");

const route = useRoute();
const router = useRouter();

const formData = reactive({
  name: "",
  mobile: "",
  text: "",
  parent_id: null,
});

const rules = computed(() => {
  return {
    name: {
      required: helpers.withMessage("پرکردن این فیلد الزامی است", required),
      minLength: helpers.withMessage(
        "نام و نام خانواگی باید حداقل 2 کارکتر باشد",
        minLength(2)
      ),
    },
    mobile: {
      numeric,
      required: helpers.withMessage("پرکردن این فیلد الزامی است", required),
      minLength: helpers.withMessage(
        "شماره موبایل صحیح نمی یاشد",
        minLength(11)
      ),
      maxLength: helpers.withMessage(
        "شماره موبایل صحیح نمی یاشد",
        maxLength(11)
      ),
    },
    text: {
      maxLength: helpers.withMessage(
        "توضیحات نباید بیشتر از 500 کاراکتر باشد",
        maxLength(500)
      ),
    },
  };
});

const loading = ref(false);

const sendComments = async () => {
  loading.value = true;
  try {
    await axios.post(`/${!props.isVideo ? 'posts' : 'videos'}/${route.params.id}/comments`, formData);
    successTitle.value = 'نظر شما ثبت شد'
    successDescription.value = 'نظر شما با موفقیت ثبت شد'
    setTimeout(() => {
      successTitle.value = "";
      router.go(0);
    }, 1500);
    loading.value = false;
  } catch (err) {
    loading.value = false;
    dangerTitle.value ="مشکلی پیش آمده!";
    dangerDescription.value ="دوباره تلاش کنید.";
    setTimeout(() => {
      dangerTitle.value = "";
    }, 3000);
  }
};

const comments = ref([])

const getPostComments = async () => {
  try {
    const data = await axios.get(
      `/${!props.isVideo ? 'posts' : 'videos'}/${route.params.id}/comments?isactive=1`
    );
    comments.value = data.data.comments
  } catch (err) {
    dangerTitle.value ="مشکلی پیش آمده!";
    dangerDescription.value ="مشکلی در نمایش کامنت ها پیش آمده.";
    setTimeout(() => {
      dangerTitle.value = "";
    }, 3000);  }
};

onMounted(() => {
  getPostComments();
});

const v$ = useVuelidate(rules, formData);
</script>

<template>
  <div>
    <ToastSuccess  :title="successTitle" :description="successDescription" v-if="successTitle.length"/>
    <ToastDanger  :title="dangerTitle" :description="dangerDescription" v-if="dangerTitle.length"/>
    <div class="w-full">
      <div
        class="flex flex-col gap-[8px] p-[12px] border-[1px] border-[#8f8f8f97] rounded-[4px] mb-[30px]"
        v-for="x in comments"
      >
        <div class="flex items-center gap-[10px]">
          <Icon name="carbon:user-avatar" size="60px" class="text-[#333333]" style="color: #333333" />
          <p cass="text-[16px] font-semibold">{{ x.name }}</p>
        </div>

        <p class="text-[14px] font-medium mr-[20px]">
      {{ x.text }}
        </p>
      </div>

      <h2 class="text-2xl font-bold mb-4 text-right">دیدگاهتان را بنویسید</h2>
      <p class="text-sm mb-5 text-gray-700">
        نشانی ایمیل شما منتشر نخواهد شد. بخش‌های موردنیاز علامت‌گذاری شده‌اند
        <span class="text-red-500">*</span>
      </p>
      <div class="mb-4">
        <label for="comment" class="block mb-1 text-right text-sm">
          دیدگاه <span class="text-red-500">*</span>
        </label>
        <textarea
          v-model="formData.text"
          id="comment"
          class="w-full border border-gray-300 rounded p-3 min-h-[200px] transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400"
          required
          @change="v$.text.$touch"
          :class="
            !v$.text.$invalid
              ? 'focus:border-green-400  !bg-green-400/10'
              : v$.text.$error
              ? '!border-red-400 focus:border-red-400 text-red-400 !bg-red-400/10'
              : 'focus:border-black'
          "
        ></textarea>
      </div>
      <div class="mb-4">
        <label for="name" class="block mb-1 text-right text-sm">
          نام <span class="text-red-500">*</span>
        </label>
        <input
          v-model="formData.name"
          type="text"
          id="name"
          class="w-full border border-gray-300 rounded p-2 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400"
          required
          @change="v$.name.$touch"
          :class="
            !v$.name.$invalid
              ? 'focus:border-green-400  !bg-green-400/10'
              : v$.name.$error
              ? '!border-red-400 focus:border-red-400 text-red-400 !bg-red-400/10'
              : 'focus:border-black'
          "
        />
      </div>
      <div class="mb-4">
        <label for="tel" class="block mb-1 text-right text-sm">
          شماره تلفن <span class="text-red-500">*</span>
        </label>
        <input
          v-model="formData.mobile"
          type="tel"
          id="tel"
          class="w-full border border-gray-300 rounded p-2 transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent hover:border-gray-400"
          required
          @change="v$.mobile.$touch"
          :class="
            !v$.mobile.$invalid
              ? 'focus:border-green-400  !bg-green-400/10'
              : v$.mobile.$error
              ? '!border-red-400 focus:border-red-400 text-red-400 !bg-red-400/10'
              : 'focus:border-black'
          "
        />
      </div>
      <div class="mb-6 flex items-start gap-2">
        <input
          type="checkbox"
          id="save-info"
          class="w-4 h-4 accent-primary cursor-pointer transition-all hover:scale-105"
        />
        <label for="save-info" class="text-sm text-gray-700 cursor-pointer">
          ذخیره نام و شماره تلفن در مرورگر برای زمانی که دوباره دیدگاهی
          می‌نویسم.
        </label>
      </div>
      <div>
        <button
          @click="sendComments"
          :disabled="v$.$invalid || v$.$errors.length || loading"
          :class="
            v$.$invalid || v$.$errors.length || loading
              ? 'cursor-not-allowed'
              : 'cursor-pointer'
          "
          type="submit"
          class="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition-all transform hover:scale-[1.02] active:scale-[0.98] font-medium"
        >
          فرستادن دیدگاه
        </button>
      </div>
    </div>
  </div>
</template>
