<template>
  <div class="FormTextArea" :style="{ width: width, height: height }">
    <textarea
      class="TextArea"
      :placeholder="placeholder"
      :style="{ padding: padding, fontSize: fontSize }"
      :value="value"
      @input="onChange"
    />
  </div>
</template>

<script setup lang="ts">
/*===================================================================================================================
 *
 *===================================================================================================================*/
//------------------------------------------------------------------------------------------------------------
// ページ設定・引数
//------------------------------------------------------------------------------------------------------------
interface Props {
  placeholder?: string
  padding?: string
  fontSize?: string
  width?: string
  height?: string
  value: string
}

const props = withDefaults(defineProps<Props>(), {
  placeholder: 'メッセージを送信する',
  padding: '10px',
  fontSize: '18px',
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
function onChange(e: Event) {
  const target = e.target as HTMLInputElement
  input.value = target?.value || ''
  emits('update:value', input.value)
}
</script>

<style lang="scss">
.FormTextArea {
  position: relative;
}

.TextArea {
  width: 100%;
  height: 100%;
  border: none;
  resize: none;
  background-color: rgba(0, 0, 0, 0);
}

.TextArea:focus {
  outline: none;
}
</style>
