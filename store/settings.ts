import { defineStore } from "pinia";

export interface WebsiteSettings {
  website_logo: string;
  favicon: string;
  website_name: string;
  meta_description: string;
  clinic_introduction: string;
  clinic_video: string;
  phone: string;
  whatsapp: string;
  instagram: string;
  aparat: string;
  twitter: string;
  activity_time: string;
  address: string;
  tour_link: string;
}

export interface SettingsState {
  settings: WebsiteSettings | null;
  loading: boolean;
  error: string | null;
}

export const useSettingsStore = defineStore("settings", {
  state: (): SettingsState => ({
    settings: null,
    loading: false,
    error: null,
  }),

  getters: {
    getSettings: (state): WebsiteSettings | null => state.settings,
    isLoading: (state): boolean => state.loading,
    hasError: (state): string | null => state.error,
    
    // Convenient getters for commonly used settings
    websiteName: (state): string => state.settings?.website_name || "تن‌ساز",
    websiteLogo: (state): string => state.settings?.website_logo || "",
    phone: (state): string => state.settings?.phone || "",
    whatsapp: (state): string => state.settings?.whatsapp || "",
    address: (state): string => state.settings?.address || "",
    socialMedia: (state) => ({
      instagram: state.settings?.instagram || "",
      twitter: state.settings?.twitter || "",
      aparat: state.settings?.aparat || "",
    }),
  },

  actions: {
    async fetchSettings() {
      // Don't fetch if already loading or already have settings
      if (this.loading || this.settings) return;

      this.loading = true;
      this.error = null;

      try {
        const config = useRuntimeConfig();
        const baseURL = config.public.baseURL || 'https://tansaz.liara.run/api/v1';
        
        const response = await $fetch<{ data: WebsiteSettings }>(`${baseURL}/settings`);
        this.settings = response.data;
      } catch (error: any) {
        this.error = error.message || 'Failed to fetch settings';
        console.error('Error fetching website settings:', error);
      } finally {
        this.loading = false;
      }
    },

    // Method to refresh settings if needed
    async refreshSettings() {
      this.settings = null;
      await this.fetchSettings();
    },

    // Reset store state
    resetSettings() {
      this.settings = null;
      this.loading = false;
      this.error = null;
    },
  },
});