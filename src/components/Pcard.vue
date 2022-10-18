<template>
  <div>
    <n-card v-for="item in 20" :key="item" class="mb-2">
      
      <div class="flex items-center">

        <div class="left mr-4">
          <NIcon size="28">
            <MicOffCircle />
          </NIcon>
        </div>
        <div class="right">
          <div> top </div>
          <div> bot </div>
        </div>

      </div>
    </n-card>
  </div>
</template>

<script lang="ts" setup>
import { NIcon } from 'naive-ui';
import { MicOffCircle } from '@vicons/ionicons5';
</script>

<style lang="scss" scoped></style>