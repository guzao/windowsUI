import type { RouteRecordRaw } from 'vue-router'

export const auxiliary: RouteRecordRaw = {
  path: '/auxiliary',
  component: () => import('@/pages/auxiliary/index.vue'),
  meta: {
    title: '辅助'
  }
}