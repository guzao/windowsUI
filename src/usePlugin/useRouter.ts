import type { App } from 'vue'
import { router } from '@/router'

export function useRouter (app: App<Element>) {
  app.use(router)
}