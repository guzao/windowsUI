import type { RouteRecordRaw } from 'vue-router'

export const applaction: RouteRecordRaw = {
  path: '/applaction',
  component:  () => import('@/pages/application/index.vue'),
  meta: {
    title: '应用'
  }
}