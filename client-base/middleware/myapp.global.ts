export default defineNuxtRouteMiddleware((to, from) => {
  if (import.meta.client && typeof window !== 'undefined') {
    window.alert('middleware from client-base: ' + JSON.stringify(to) + '\n\n\n' + JSON.stringify(from))
  }
})
