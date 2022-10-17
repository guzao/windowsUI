import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import {applaction} from './pages/applaction'
import {authConfig} from './pages/authConfig'
import {auxiliary} from './pages/auxiliary'
import {game} from './pages/game'
import { networkAndInternet } from './pages/newtworkAndInternte'
import {privacy} from './pages/privacy'
import {update} from './pages/update'
import {useInfo} from './pages/userInfo'

const notFind: RouteRecordRaw = {
  path: '/:path(.*)*',
  component: () => import('@/pages/notFind.vue'),
  meta: {
  }
}

const pages: RouteRecordRaw = {
  path: '/',
  redirect: '/applaction',
  component: () => import('@/pages/layout/index.vue'),
  meta: {
  },
  children: [
    applaction,
    authConfig,
    auxiliary,
    game,
    networkAndInternet,
    privacy,
    update,
    useInfo
  ]
}

export const router = createRouter({
  history: createWebHistory('/'),
  routes: [  notFind, pages ]
})