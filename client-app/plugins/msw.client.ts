import { worker } from '~/mocks/browser'

export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig()
  
  if (process.dev && config.public.mswProvider === 'client-app') {
    console.log('[MSW] Starting from client-app')
    await worker.start({
      onUnhandledRequest: 'bypass',
    })
  } else if (process.dev) {
    console.log('[MSW] Skipping start in client-app (provider:', config.public.mswProvider, ')')
  }
})