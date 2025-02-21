<script setup lang="ts"></script>

<template>
    <div class="flex flex-col w-full">
        <Navbar class="z-50 pb-10"/>
        <main class="w-full min-h-screen md:mb-[7rem] mb-[22rem]">
            <slot />
        </main>
        <Footer />
    </div>
</template>

<style scoped></style>
