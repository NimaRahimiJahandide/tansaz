import { useSettingsStore } from "~/store/settings";

export const useWebsiteSettings = () => {
  const settingsStore = useSettingsStore();

  // Ensure settings are loaded
  const ensureSettings = async () => {
    if (!settingsStore.settings && !settingsStore.loading) {
      await settingsStore.fetchSettings();
    }
  };

  // Initialize settings if not already loaded
  if (process.client && !settingsStore.settings && !settingsStore.loading) {
    settingsStore.fetchSettings();
  }

  return {
    // State
    settings: computed(() => settingsStore.settings),
    loading: computed(() => settingsStore.loading),
    error: computed(() => settingsStore.error),

    // Convenient computed properties
    websiteName: computed(() => settingsStore.websiteName),
    websiteLogo: computed(() => settingsStore.websiteLogo),
    phone: computed(() => settingsStore.phone),
    whatsapp: computed(() => settingsStore.whatsapp),
    address: computed(() => settingsStore.address),
    socialMedia: computed(() => settingsStore.socialMedia),

    // Methods
    fetchSettings: settingsStore.fetchSettings,
    refreshSettings: settingsStore.refreshSettings,
    ensureSettings,

    // Helper methods
    getSetting: (key: keyof typeof settingsStore.settings) => {
      return computed(() => settingsStore.settings?.[key] || '');
    },

    // Check if settings are ready
    isReady: computed(() => !settingsStore.loading && !!settingsStore.settings),
  };
};