<template>
  <ul>
    <li v-for="item in 10" :key="item" class="h-10 cursor-pointer"> 
      <NIcon>
        <SettingsOutline />
      </NIcon>
      菜单{{ item }}
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { NIcon } from 'naive-ui';
import { SettingsOutline } from "@vicons/ionicons5";
</script>

<style lang="scss" scoped>

</style>