import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useStartWebsite = defineStore('startWebsite', () => {
  const isStart = ref<boolean>(false);
  const isServicesStart = ref<boolean>(false);

  function setImageClicked(value: boolean): void {
    isStart.value = value;
  }

  function setServicesStart(value: boolean): void {
    isServicesStart.value = value;
  }

  return {
    isStart,
    isServicesStart,
    setImageClicked,
    setServicesStart,
  };
});