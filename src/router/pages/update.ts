import type { RouteRecordRaw } from 'vue-router'

export const update: RouteRecordRaw = {
  path: '/update',
  component: () => import('@/pages/update/index.vue'),
  meta: {
    title: '系统更新'
  }
}