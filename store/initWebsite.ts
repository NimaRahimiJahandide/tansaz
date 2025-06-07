import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStartWebsite = defineStore('startWebsite', () => {
  const isStart = ref<boolean>(false);

  function setImageClicked(value: boolean): void {
    isStart.value = value;
  }

  return {
    isStart,
    setImageClicked,
  };
});