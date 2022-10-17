import type { RouteRecordRaw } from 'vue-router'

export const authConfig: RouteRecordRaw = {
  path: '/authConfig',
  component: () => import('@/pages/authConfig/index.vue'),
  meta: {
    title: '其他配置'
  }
}