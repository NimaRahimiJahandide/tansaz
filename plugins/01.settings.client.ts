import { useSettingsStore } from "~/store/settings";

export default defineNuxtPlugin(async () => {
  // Only run on client side for this example
  // You can also create a server version for SSR if needed
  
  const settingsStore = useSettingsStore();
  
  // Fetch settings immediately when the plugin loads
  await settingsStore.fetchSettings();

  return {
    provide: {
      settingsStore,
    },
  };
});