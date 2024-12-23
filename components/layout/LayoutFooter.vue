<template>
  <div class="Footer" :style="{ height: `${footer.height}px` }">
    <div class="FooterInner" :style="{ lineHeight: `${footer.height}px` }">
      <div />
      <div class="Center">copy right sh.maeda</div>
      <div :style="{ height: `${footer.height}px` }">
        <v-switch
          label="文章読み上げ"
          color="red-darken-3"
          v-model="isSpeech"
          density="compact"
          @change="onChangeSwitch"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFooterStore } from '~/stores/layout'
import { useSpeechStore } from '~/stores/speech'
/*===================================================================================================================
 *
 *===================================================================================================================*/
//------------------------------------------------------------------------------------------------------------
// 定数・変数（state）
//------------------------------------------------------------------------------------------------------------
const footer = useFooterStore()
const speech = useSpeechStore()
const isSpeech = ref(false)

//------------------------------------------------------------------------------------------------------------
// Function
//------------------------------------------------------------------------------------------------------------
function onChangeSwitch() {
  speech.value.isSpeech = isSpeech.value
}
</script>

<style lang="scss">
.Footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #20c77c;
}

.FooterInner {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 0 20px;
  height: 100%;
}

.Center {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
}
</style>
