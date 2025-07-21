import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

export const useStartWebsite = defineStore('startWebsite', () => {
  const isStart = ref<boolean>(false);
  const isServicesStart = ref<boolean>(false);

  function setImageClicked(value: boolean): void {
    console.log('setImageClicked called with:', value);
    isStart.value = value;
    console.log('isStart after setImageClicked:', isStart.value);
  }

  function setServicesStart(value: boolean): void {
    isServicesStart.value = value;
  }

  // Add a computed property for debugging
  const debugInfo = computed(() => ({
    isStart: isStart.value,
    isServicesStart: isServicesStart.value
  }));

  return {
    isStart,
    isServicesStart,
    setImageClicked,
    setServicesStart,
    debugInfo,
  };
});