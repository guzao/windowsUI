import type { RouteRecordRaw } from 'vue-router'

export const game: RouteRecordRaw = {
  path: '/game',
  component: () => import('@/pages/game/index.vue'),
  meta: {
    title: '游戏'
  }
}