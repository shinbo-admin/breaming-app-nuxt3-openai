<template>
  <div
    class="PartChatInputBox"
    :style="{
      width: width,
      height: height,
      padding: padding,
      borderRadius: radius,
    }"
  >
    <FormTextArea :value="input" :padding="'0px'" @update:value="onChangeText" />
    <div class="Buttons">
      <IconBase :icon="ICON_TYPE.SEND_OUTLINE" isHover @click="onClickSubmit" />
    </div>
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
  width?: string
  height?: string
  padding?: string
  radius?: string
}

const props = withDefaults(defineProps<Props>(), {
  width: '600px',
  padding: '10px 20px',
  radius: '20px',
})

const emits = defineEmits<{
  (e: 'update:value', value: string): void
}>()

//------------------------------------------------------------------------------------------------------------
// 定数・変数（state）
//------------------------------------------------------------------------------------------------------------
const input = ref('')

//------------------------------------------------------------------------------------------------------------
// Function
//------------------------------------------------------------------------------------------------------------
function onChangeText(value: string) {
  input.value = value
}

function onClickSubmit() {
  emits('update:value', input.value)
  input.value = ''
}
</script>

<style lang="scss">
.PartChatInputBox {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.1);
}

.Buttons {
  position: relative;
  display: flex;
  justify-content: flex-end;
}
</style>
