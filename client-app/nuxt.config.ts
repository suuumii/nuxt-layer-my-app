export default defineNuxtConfig({
  compatibilityDate: '2025-08-14',
  extends: [
    'client-base'
  ],
  i18n: {
    locales: [
      { code: 'ja', language: 'ja-JP', name: 'Japanese', file: 'ja.json' },
      { code: 'en', language: 'en-US', name: 'English', file: 'en.json' },
    ],
  },

  runtimeConfig: {
    public: {
      mswProvider: 'client-app'
    }
  },
})