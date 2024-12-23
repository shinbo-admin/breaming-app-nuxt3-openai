<template>
  <div
    class="PageWrapper"
    :style="{
      top: `${header.height}px`,
      height: `calc(100% - ${header.height}px - ${footer.height}px)`,
    }"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import { useFooterStore, useHeaderStore } from '~/stores/layout'
/*===================================================================================================================
 *
 *===================================================================================================================*/
//------------------------------------------------------------------------------------------------------------
// 定数・変数（state）
//------------------------------------------------------------------------------------------------------------
const header = useHeaderStore()
const footer = useFooterStore()
</script>

<style lang="scss">
.PageWrapper {
  position: fixed;
  left: 0;
  width: 100%;
  background-color: #e1faeb;
  overflow-y: hidden;
  overflow-x: hidden;
  padding: 20px;
}
</style>
