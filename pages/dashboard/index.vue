<template>
	<div class="min-h-screen bg-gray-100">
		<div class="flex flex-col md:flex-row mt-4 px-4 gap-4">
			<DashboardSidebarComponent />

			<!-- Main Content -->
			<div class="w-full md:w-3/4">
				<!-- Info Cards -->
				<div class="flex gap-4 mb-6">
					<div class="bg-white flex items-center justify-center w-[236px] h-[100px] rounded-[16px]">
						<div class="flex justify-between items-center gap-6">
							<div class="text-black text-[20px] font-bold">امتیاز فعلی:</div>
							<div class="text-black text-[20px] font-bold">۱۶</div>
						</div>
					</div>
					<div class="bg-white flex items-center justify-center w-[236px] h-[100px] rounded-[16px]">
						<div class="flex justify-between items-center gap-6">
							<div class="text-black text-[20px] font-bold">کیف پول:</div>
							<div class="text-black text-[20px] font-bold">16,000 <span class="font-normal text-base">تومان</span>
							</div>
						</div>
					</div>
				</div>

				<!-- Points Earned Section -->
				<div class="flex justify-between items-center mb-4">
					<div class="font-bold text-black  text-[20px]">امتیازات  کسب شده:</div>
					<div class="text-sm text-black font-semibold cursor-pointer">مشاهده همه ></div>
				</div>
				<div class="bg-white rounded-2xl mb-6">

					<!-- Table -->
					<div class="overflow-x-auto w-full">
						<table class="w-full border-collapse border border-[#50505080] rounded-2xl text-sm font-semibold overflow-hidden text-black">
							<thead>
								<tr>
									<th class="p-3 border border-[#50505080]">نوع فعالیت</th>
									<th class="p-3 border border-[#50505080]">مبلغ کل</th>
									<th class="p-3 border border-[#50505080]">درصد</th>
									<th class="p-3 border border-[#50505080]">مبلغ اضافه شده به کیف پول</th>
								</tr>
							</thead>
							<tbody class="w-full items-center text-center">
								<tr v-for="(item, index) in transactions" :key="index">
									<td class="p-3 border border-[#50505080]">{{ item.activityType }}</td>
									<td class="p-3 border border-[#50505080]">{{ item.addedAmount }}</td>
									<td class="p-3 border border-[#50505080]">{{ item.percentage }}</td>
									<td class="p-3 border border-[#50505080]">{{ item.totalAmount }}</td>
								</tr>
								<tr>
									<td colspan="4" class="py-4 px-4 border border-[#50505080]">
										<div class="flex justify-center gap-20">
											<div class="font-bold">مجموع مبالغ دریافتی:</div>
											<div class="font-bold">تومان ۴,۵۰۰,۰۰۰</div>
										</div>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</div>

		</div>
	</div>
</template>

<script setup>
definePageMeta({
	layout: 'dashboard'
});
const menuItems = [
	'داشبورد',
	'پروفایل کاربری',
	'امتیازات',
	'کیف پول',
	'سوابق و پرونده ها',
	'لیست پرداخت ها'
]

const transactions = [
	{
		activityType: 'لورم ایپسوم',
		totalAmount: '۱,۰۵۰,۰۰۰',
		percentage: '۳٪',
		addedAmount: '۱,۵۰۰,۰۰۰'
	},
	{
		activityType: 'لورم ایپسوم',
		totalAmount: '۱,۰۵۰,۰۰۰',
		percentage: '۳٪',
		addedAmount: '۱,۵۰۰,۰۰۰'
	},
	{
		activityType: 'لورم ایپسوم',
		totalAmount: '۱,۰۵۰,۰۰۰',
		percentage: '۳٪',
		addedAmount: '۱,۵۰۰,۰۰۰'
	}
]
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;700&display=swap');

body {
	font-family: 'Vazirmatn', sans-serif;
	direction: rtl;
}

/* Fix table border collapse */
table {
	border-collapse: separate;
	border-spacing: 0;
}

th,
td {
	border-bottom: 1px solid #e5e7eb;
}

tr:last-child td {
	border-bottom: none;
}
</style>