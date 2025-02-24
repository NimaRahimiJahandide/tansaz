<template>
    <div>
        <NuxtRouteAnnouncer />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>

<style>
*{
    direction: rtl;
    box-sizing: border-box;
    font-family: 'iran-yekan';
    scroll-behavior: smooth;
}


:root {
    --swiper-pagination-color: #000 !important;
    --swiper-pagination-bullet-inactive-color: #d9d9d9 !important;
    --swiper-pagination-bullet-inactive-opacity: 1 !important;
    --swiper-navigation-background-color: gray;
    --swiper-navigation-color:#fff;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>