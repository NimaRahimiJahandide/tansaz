<script setup lang="ts"></script>

<template>
    <div class="flex flex-col w-full">
        <Navbar />
        <main class="w-full">
            <slot />
        </main>
        <Footer />
    </div>
</template>

<style scoped></style>
