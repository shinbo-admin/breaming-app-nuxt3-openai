<template>
  <div
    class="IconBase"
    :style="{ height: height, width: width, lineHeight: height, borderRadius: radius }"
    :class="{ Hover: isHover }"
  >
    <i :class="`mdi ${icon}`" :style="{ fontSize: size }" />
  </div>
</template>

<script setup lang="ts">
import { ICON_TYPE } from '~/constants/constants'

/*===================================================================================================================
 *
 *===================================================================================================================*/
//------------------------------------------------------------------------------------------------------------
// ページ設定・引数
//------------------------------------------------------------------------------------------------------------
interface Props {
  icon: ICON_TYPE
  height?: string
  width?: string
  size?: string
  radius?: string
  isHover?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  height: '40px',
  width: '40px',
  size: '20px',
  radius: '8px',
})
</script>

<style lang="scss">
.IconBase {
  display: flex;
  justify-content: center;
  cursor: pointer;
}

.Hover:hover {
  background-color: rgba(0, 0, 0, 0.3);
}
</style>
