<template>
    <div class="min-h-screen bg-white">
        <LoadingComponent v-show="loadingState.isLoading" />

        <main class="container px-8 mx-auto pt-16" v-show="!loadingState.isLoading">
            <section class="flex flex-col md:flex-row">
                <div class="flex md:hidden flex-col gap-6 pb-6 pt-7">
                    <h2 class="text-[32px] leading-[140%] font-bold">سمینار بزرگ</h2>
                    <h2
                        class="text-[32px] self-end leading-[140%] font-bold bg-gradient-to-r from-[#EF172E] via-[#EF172E] to-[#3D0C11] text-transparent bg-clip-text text-border">
                        زیبایی و سلامت</h2>
                </div>
                <article class="flex flex-1 justify-center">
                    <img class="object-cover md:h-[85vh] h-[467px] max-md:w-[400px]" src="/images/flower.png" alt="flower">
                </article>
                <article class="flex-1">
                    <div class="md:flex hidden flex-col gap-2">
                        <h2 class="md:text-[64px] leading-[140%] font-bold">سمینار بزرگ</h2>
                        <h2
                            class="md:text-[64px] self-end leading-[140%] font-bold bg-gradient-to-r from-[#EF172E] via-[#EF172E] to-[#3D0C11] text-transparent bg-clip-text text-border">
                            زیبایی و سلامت</h2>
                    </div>
                    <div class="md:pt-28 pt-8 flex flex-col">
                        <h3 class="text-[20px] font-bold">جناب {{guests.gender}} {{guests.name}}</h3>
                        <p class="text-[20px] pt-6">{{guests?.seminar?.question}}</p>
                        <button  :disabled="guests?.is_ready" :class="guests?.is_ready ? 'bg-[#FF9EA8] cursor-not-allowed' : 'bg-primary cursor-pointer'" class=" self-end text-white md:w-32 w-24 md:h-14 h-7 text-[14px] md:text-base font-semibold rounded-[8px] mt-6 md:mt-14">عنوان دکمه</button>
                    </div>
                    <div class="pt-11">
                        <span class="text-[20px]">{{guests?.seminar?.final_message}}</span>
                        <span></span>
                    </div>
                </article>
            </section>
        </main>
    </div>
</template>

<script setup>
import { useLoadingState } from "@/store/loadingState";
import axios from "axios";
const loadingState = useLoadingState();
const route = useRoute();

const guests = ref([]);

const getGuests = async () => {
    loadingState.setLoading(true);
    await axios.get(
        `/guests/${route.params.id}`
    )
        .then(response => {
            guests.value = response.data.data
            loadingState.setLoading(false);
        }).catch(err => {
            console.log(err);
        })
};

onMounted(() => {
    getGuests();
});
</script>

<style scoped></style>
