<template>
  <div class="Page">
    <div class="Content">
      {{ data }}
    </div>
    <PartChatInputBox
      class="Fixed"
      :style="{ bottom: `calc(${footer.height}px + 20px)` }"
      :height="'140px'"
      @update:value="onGetText"
    />
  </div>
</template>

<script setup lang="ts">
import { useFooterStore } from '~/stores/layout'

/*===================================================================================================================
 *
 *===================================================================================================================*/
//------------------------------------------------------------------------------------------------------------
// ページ設定・引数
//------------------------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------------------------
// 定数・変数（state）
//------------------------------------------------------------------------------------------------------------
const footer = useFooterStore()
const data = ref('')

//------------------------------------------------------------------------------------------------------------
// Function
//------------------------------------------------------------------------------------------------------------
async function onGetText(value: string) {
  const res = await useGetOpenAi(value)
  if (res.data.value?.message) {
    data.value = res.data.value.message
  }
}
</script>
``

<style lang="scss">
.Page {
  position: relative;
  width: 600px;
  height: 100%;
  margin: 0 auto;
}

.Content {
  height: calc(100% - 140px - 20px);
  letter-spacing: 3px;
  font-size: 18px;
  overflow-y: auto;
}

.Fixed {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
}
</style>
