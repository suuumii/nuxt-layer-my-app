export default defineNuxtPlugin(() => {
  if (import.meta.client && typeof window !== 'undefined') {
    window.alert('samplePlugin')
  }
})
