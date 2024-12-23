<template>
  <div class="Header" :style="{ height: `${header.height}px` }">
    <div class="HeaderInner" :style="{ lineHeight: `${header.height}px` }">
      <img
        src="/logo.png"
        alt="logo"
        :style="{
          height: `calc(${header.height}px - 10px)`,
          width: `calc(${header.height}px - 10px)`,
        }"
      />
      <div>dummy@gmail.co.jp</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHeaderStore } from '~/stores/layout'
/*===================================================================================================================
 *
 *===================================================================================================================*/
//------------------------------------------------------------------------------------------------------------
// 定数・変数（state）
//------------------------------------------------------------------------------------------------------------
const header = useHeaderStore()
</script>

<style lang="scss">
.Header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #20c77c;
}

.HeaderInner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px 0 10px;
  color: #fff;
}
</style>
