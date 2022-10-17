import type { RouteRecordRaw } from 'vue-router'

export const networkAndInternet: RouteRecordRaw = {
  path: '/networkAndInternet',
  component: () => import('@/pages/networkAndInternet/index.vue'),
  meta: {
    title: '网络和wifi'
  }
}