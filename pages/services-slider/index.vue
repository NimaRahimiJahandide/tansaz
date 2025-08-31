<script setup>
const router = useRouter()
definePageMeta({
  layout: 'services'
});
const handleServiceSelected = (service) => {
  // Navigate to services page with the selected service ID
  router.push(`/services?selectedService=${service.id || 0}`)
}
</script>

<template>
  <div>
    <ServicesBeautyServicesSlider @service-selected="handleServiceSelected" />
  </div>
</template>