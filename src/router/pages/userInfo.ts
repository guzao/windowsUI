import type { RouteRecordRaw } from 'vue-router'

export const useInfo: RouteRecordRaw = {
  path: '/updat',
  component: () => import('@/pages/useInfo/index.vue'),
  meta: {
    title: '用户信息'
  }
}