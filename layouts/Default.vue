<script setup lang="ts"></script>

<template>
    <div class="flex flex-col w-full">
        <Navbar />
        <main class="w-full min-h-screen mb-[330px]">
            <slot />
        </main>
        <Footer />
    </div>
</template>

<style scoped></style>
