<template>
  <ul class="ml-8">
    <li v-for="(item, index) in Mneu" 
    :key="index" style="line-height: 40px;" 
    class="h-10 cursor-pointer hover:bg-gray-200 active"
    @click="goPath(item)"
    > 
      <NIcon>
        <SettingsOutline />
      </NIcon>
      {{ item.meta?.title }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { Mneu } from '@/router'
import { NIcon } from 'naive-ui';
import { useRouter } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { SettingsOutline } from "@vicons/ionicons5";
const router = useRouter()
const goPath = (item: RouteRecordRaw) => {
  console.log(item)
  router.push(item.path)
}
</script>

<style lang="scss" scoped>
.active {
  border-left: 4px solid pink;
}
</style>