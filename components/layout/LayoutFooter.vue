<template>
  <div class="Footer" :style="{ height: `${footer.height}px` }">
    <div class="FooterInner">
      <div style="height: 100%">
        <v-switch
          label="テーマ"
          color="red-darken-3"
          v-model="isDark"
          density="compact"
          @change="onChangeTheme"
        />
      </div>
      <div class="Center">copy right sh.maeda</div>
      <div style="height: 100%">
        <v-switch
          label="文章読み上げ"
          color="red-darken-3"
          v-model="isSpeech"
          density="compact"
          @change="onChangeSpeech"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useFooterStore } from '~/stores/layout'
import { useSpeechStore } from '~/stores/speech'
import { useTheme } from 'vuetify'
/*===================================================================================================================
 *
 *===================================================================================================================*/
//------------------------------------------------------------------------------------------------------------
// 定数・変数（state）
//------------------------------------------------------------------------------------------------------------
const footer = useFooterStore()
const speech = useSpeechStore()
const theme = useTheme()
const isSpeech = ref(false)
const isDark = ref(false)

//------------------------------------------------------------------------------------------------------------
// Function
//------------------------------------------------------------------------------------------------------------
function onChangeSpeech() {
  speech.value.isSpeech = isSpeech.value
}

function onChangeTheme() {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>

<style lang="scss">
.Footer {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: rgb(var(--v-theme-footer));
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
