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
}

:root {
    --swiper-pagination-color: #000 !important;
    --swiper-pagination-bullet-inactive-color: #d9d9d9 !important;
    --swiper-pagination-bullet-inactive-opacity: 1 !important;
  }
</style>