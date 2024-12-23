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
    <div class="Content">
      <FormTextArea
        v-if="!isVoiceRecognition"
        :value="input"
        padding="0px"
        height="80px"
        @update:value="onChangeMessage"
      />

      <div v-else class="Progress">
        <v-progress-linear color="deep-purple-accent-4" height="6" indeterminate rounded />
      </div>
    </div>

    <div class="Buttons">
      <div class="LeftSide">
        <IconBase
          v-if="!isVoiceRecognition"
          :icon="ICON_TYPE.CLOSE"
          isHover
          @click="onClearMessage"
        />
      </div>

      <div v-if="!isVoiceRecognition" class="RightSide">
        <IconBase v-if="isVoice" :icon="ICON_TYPE.VOICE" isHover @click="onStartVoice" />
        <IconBase :icon="ICON_TYPE.SEND_OUTLINE" isHover @click="onSubmitMessage" />
      </div>
      <div v-else class="RightSide">
        <IconBase :icon="ICON_TYPE.CANCEL" isHover @click="onCancelVoice" />
        <IconBase :icon="ICON_TYPE.CHECK_OUTLINE" isHover @click="onSubmitVoice" />
      </div>
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
  isVoice?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  width: '600px',
  padding: '10px 20px',
  radius: '20px',
})

const emits = defineEmits<{
  (e: 'update:value', value: string): void
  (e: 'update:isClear', value: boolean): void
  (e: 'update:error', value: string): void
}>()

//------------------------------------------------------------------------------------------------------------
// 定数・変数（state）
//------------------------------------------------------------------------------------------------------------
const input = ref('')
const voiceMessage = ref('')
const isVoiceRecognition = ref(false)
const recognition = ref()

//------------------------------------------------------------------------------------------------------------
// マウント
//------------------------------------------------------------------------------------------------------------
onMounted(() => {
  if (props.isVoice) {
    // 音声認識の初期設定
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
      recognition.value = new SpeechRecognition()
      recognition.value.lang = 'ja-JP'
      recognition.value.interimResults = true
      recognition.value.continuous = false
    } else {
      emits('update:error', 'このブラウザは音声認識をサポートしていません。')
    }
  }
})

//------------------------------------------------------------------------------------------------------------
// Function
//------------------------------------------------------------------------------------------------------------
function onChangeMessage(value: string) {
  input.value = value
}

function onSubmitMessage() {
  emits('update:value', input.value)
  input.value = ''
}

function onClearMessage() {
  emits('update:isClear', true)
  input.value = ''
}

function onStartVoice() {
  isVoiceRecognition.value = true
  input.value = ''

  if (!recognition) return
  recognition.value.start()
  recognition.value.onresult = (event: any) => {
    const transcript = Array.from(event.results)
      .map((result: any) => result[0].transcript)
      .join('')

    voiceMessage.value = transcript
  }
}

function onSubmitVoice() {
  recognition.value.stop()
  input.value = voiceMessage.value
  emits('update:value', input.value)
  isVoiceRecognition.value = false
}

function onCancelVoice() {
  recognition.value.stop()
  input.value = ''
  voiceMessage.value = ''
  isVoiceRecognition.value = false
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

.Content {
  position: relative;
  height: 80px;
}

.Progress {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.Buttons {
  position: relative;
  display: flex;
  justify-content: space-between;
}

.RightSide {
  display: flex;
}
</style>
