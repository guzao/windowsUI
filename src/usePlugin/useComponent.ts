import type { App } from 'vue'
import Navive from 'naive-ui'
import Pcard from '@/components/Pcard.vue'

export function useComponent (app: App<Element>) {
  app.use(Navive)
  app.component('Pcard', Pcard)
}