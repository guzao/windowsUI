<template>
  <div class="flex w_layout">

    <div class="w_slider">
      <ul>
        <li v-for="item in 10" class="hover:bg-gray-50" :key="item"> 
          菜单{{ item }}
        </li>
      </ul>
    </div>

    <div class="w_main h-full flex-1">
      <router-view> </router-view>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.w_layout {
  height: 100vh;
  .w_slider {
    width: 300px;
    &  li {
      line-height: 36px;
      margin: 2px 0;
    }
  }
}


</style>