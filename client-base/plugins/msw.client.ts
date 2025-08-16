import { worker } from '~/mocks/browser'

export default defineNuxtPlugin(async () => {
  const config = useRuntimeConfig()
  
  if (process.dev && config.public.mswProvider === 'client-base') {
    console.log('[MSW] Starting from client-base layer')
    await worker.start({
      onUnhandledRequest: 'bypass',
    })
  } else if (process.dev) {
    console.log('[MSW] Skipping start in client-base layer (provider:', config.public.mswProvider, ')')
  }
})