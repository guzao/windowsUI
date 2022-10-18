import type { App } from 'vue'
import  Navive from 'naive-ui'


export function useComponent (app: App<Element>) {
  app.use(Navive)
}