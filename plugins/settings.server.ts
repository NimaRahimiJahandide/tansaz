import { useSettingsStore } from "~/store/settings";

export default defineNuxtPlugin(async (nuxtApp) => {
  // This runs on server-side for SSR
  const settingsStore = useSettingsStore();
  
  // Fetch settings on server
  await settingsStore.fetchSettings();

  // Hydrate the store state to client
  if (process.server) {
    nuxtApp.ssrContext!.payload.settingsStore = {
      settings: settingsStore.settings,
      loading: false,
      error: settingsStore.error,
    };
  }

  if (process.client) {
    // Restore state from server payload
    const payload = nuxtApp.payload.settingsStore;
    if (payload) {
      settingsStore.$patch(payload);
    }
  }
});