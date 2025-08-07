<template>
  <div v-if="show" class="fixed inset-0 z-50 flex items-center justify-center bg-[#2F2F2F80] bg-opacity-60 backdrop-blur-[5px]">
    <div class="bg-[#151515] rounded-2xl w-full max-w-[400px] mx-4 p-6 relative shadow-lg">
      <!-- Success Icon -->
      <div class="flex justify-center mb-6 mt-4">
        <div class="relative">
          <div class="w-[150px] h-[127px] rounded-full flex items-center justify-center">
            <img src="/icons/checkmark.svg" alt="checkmark">
          </div>
        </div>
      </div>

      <!-- Success Title -->
      <h2 class="text-white text-lg font-medium text-center mb-8">تبدیل با موفقیت انجام شد!</h2>

      <!-- Summary Information -->
      <div class="space-y-4 mb-6">
        <div class="flex justify-between items-center text-white">
          <span class="text-gray-400">تبدیل</span>
          <span class="font-medium">{{ result.points }} امتیاز</span>
        </div>

        <div class="flex justify-between items-center text-white">
          <span class="text-gray-400">{{ result.type === 'service' ? 'خدمت دریافتی' : 'دریافتی شما' }}</span>
          <span class="font-medium">{{ result.amount }} {{ result.currency }}</span>
        </div>

        <div v-if="result.type === 'cash'" class="flex justify-between items-center text-white">
          <span class="text-gray-400">به شماره کارت</span>
          <span class="font-medium font-mono">{{ result.cardNumber }}</span>
        </div>
      </div>

      <!-- Warning/Info Message -->
      <div class="mb-6 bg-[#1EAC741A] rounded-2xl px-3.5 py-3 gap-2 flex items-start space-x-3 space-x-reverse">
        <div class="flex-shrink-0">
          <Icon name="charm:shield-tick" size="18" style="color: #1EAC74" />
        </div>
        <div class="text-[#F2F4F6] text-sm leading-relaxed">
          {{ result.type === 'service'
            ? 'کاربر عزیز، درخواست شما ثبت شد، تیم پشتیبانی تنساز برای رزرو نوبت با شما تماس خواهند گرفت.' : result.type ==="wallet" ? 
              `کاربر عزیز، مبلغ ${result.amount} هزار تومان به کیف پول پنل تنساز شما اضاف شد، جهت مشاهده آن روی دکمه “کیف پول” بزنید.`
            : 'کاربر عزیز، مبلغ مورد نظر تا 48 ساعت دیگر به حساب شما واریز می شود.'
          }}
        </div>
      </div>

      <!-- Action Buttons -->
      <div class="flex gap-2.5">
        <button 
          @click="$emit('go-to-dashboard')"
          class="w-full bg-[#ff1d25] text-white py-3 rounded-full font-bold text-lg hover:bg-opacity-90 transition cursor-pointer"
        >
          داشبورد
        </button>
        <button 
          @click="$emit('close')"
          class="w-full bg-[#363636] text-white py-3 rounded-full font-bold text-lg transition cursor-pointer"
        >
          بستن
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    default: false
  },
  result: {
    type: Object,
    required: true
  }
})

defineEmits(['close', 'go-to-dashboard'])
</script>