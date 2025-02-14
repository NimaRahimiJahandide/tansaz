<script setup lang="ts"></script>

<template>
    <div class="flex flex-col w-full">
        <Navbar />
        <main class="w-full h-screen mb-[1000px]">
            <slot />
        </main>
        <Footer />
    </div>
</template>

<style scoped></style>
