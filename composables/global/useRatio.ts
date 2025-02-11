import { useWindowSize } from "@vueuse/core";

export const useRatio = () => {
    const isMobile = computed(() => {
        const { width: windowWidth } = useWindowSize();
        return windowWidth.value < 1024;
    });

    return {
        isMobile,
    };
};
