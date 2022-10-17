import { createApp } from 'vue'
import 'virtual:windi.css'
import App from '../App.vue'

import { useRouter } from './useRouter'


export function setupApp () {
  const app = createApp(App)
  useRouter(app)
  app.mount('#app')
}
