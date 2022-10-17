import type { RouteRecordRaw } from 'vue-router'

export const privacy: RouteRecordRaw = {
  path: '/隐私',
  component: () => import('@/pages/privacy/index.vue'),
  meta: {
    title: '隐私设置'
  }
}