import { useServices } from "~/composables/services";

export default defineNuxtRouteMiddleware(() => {
    const { isLoggedIn } = useServices();

    if (isLoggedIn.value) {
        return;
    } else {
        return navigateTo("/login");
    }
});
