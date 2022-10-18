<template>
  <n-layout style="height: 100vh; padding: 40px 0;" has-sider>
    
    <n-layout-sider >
      <Menu />
    </n-layout-sider>

    <n-layout>
      <n-scrollbar style="max-height: 100vh; padding: 0 200px;">
        <n-layout-content class="h-full">
          <router-view></router-view>
        </n-layout-content>
      </n-scrollbar>
    </n-layout>

  </n-layout>
</template>

<script lang="ts" setup>
import Menu from "./Menu/index.vue";
</script>

<style lang="scss" scoped>

</style>