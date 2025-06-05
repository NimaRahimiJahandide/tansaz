<template>
    <nav class="bg-white shadow-md fixed w-full z-50">
        <div class="container mx-auto px-4 py-4 flex justify-between items-center">
            <!-- Logo -->
            <div class="flex items-center space-x-2">
                <!-- <img src="/logo.png" alt="Logo" class="h-8 w-auto" /> -->
                <span class="text-xl font-bold text-red-600">Tansaz</span>
            </div>

            <!-- Profile Icon -->
            <div class="hidden md:block">
                <button class="focus:outline-none">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 12a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM6 18.75a.75.75 0 00.75.75h12.75a.75.75 0 00.75-.75v-2.25a.75.75 0 00-.75-.75h-12.75a.75.75 0 00-.75.75v2.25z" />
                    </svg>
                </button>
            </div>

            <!-- Hamburger Menu (for mobile) -->
            <div class="md:hidden">
                <button type="button" class="focus:outline-none" @click="toggleMenu">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <div v-if="isMenuOpen" class="md:hidden bg-white shadow-lg absolute top-full left-0 w-full">
            <ul class="py-4 px-6 space-y-4">
                <li>
                    <a href="#" class="text-gray-800 hover:text-red-600">Home</a>
                </li>
                <li>
                    <a href="#" class="text-gray-800 hover:text-red-600">About</a>
                </li>
                <li>
                    <a href="#" class="text-gray-800 hover:text-red-600">Services</a>
                </li>
                <li>
                    <a href="#" class="text-gray-800 hover:text-red-600">Contact</a>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    data() {
        return {
            isMenuOpen: false,
        };
    },
    methods: {
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        },
    },
};
</script>

<style scoped>
/* Add any custom styles here if needed */
</style>