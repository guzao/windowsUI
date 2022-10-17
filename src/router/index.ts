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


export const router = createRouter({
  history: createWebHistory('/'),
  routes: [ applaction, authConfig,auxiliary, game,networkAndInternet,  privacy,  update, useInfo, notFind ]
})