import { createApp } from 'vue'
import 'virtual:windi.css'
import App from '../App.vue'

import { useRouter } from './useRouter'
import { useComponent } from './useComponent'


export function setupApp () {
  const app = createApp(App)
  useRouter(app)
  useComponent(app)
  app.mount('#app')
}
