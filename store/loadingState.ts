import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useLoadingState = defineStore('loading', () => {
  const isLoading = ref<boolean>(true);

  function setLoading(value: boolean): void {
    isLoading.value = value;
  }

  return {
    isLoading,
    setLoading,
  };
});