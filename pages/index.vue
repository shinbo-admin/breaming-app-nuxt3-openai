<template>
  <div class="Page">
    <div class="Contents">
      <div v-for="(item, i) in data" :key="i" class="Content">
        <!-- ユーザ返答 -->
        <div v-if="item.role === 'user'" class="User">
          <div>{{ item.content }}</div>
        </div>

        <!-- GPT返答 -->
        <div v-if="item.role === 'assistant'" class="Assistant">
          <div>{{ item.content }}</div>
        </div>
      </div>
    </div>
    <PartChatInputBox
      class="Fixed"
      :style="{ bottom: `calc(${footer.height}px + 20px)` }"
      :height="'140px'"
      isVoice
      @update:value="onGetText"
      @update:clear="onClearText"
    />
  </div>
</template>

<script setup lang="ts">
import { useFooterStore } from '~/stores/layout'
import type { Data } from '~/types/common'

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
const data = ref<Data[]>([])

//------------------------------------------------------------------------------------------------------------
// ライフサイクル
//------------------------------------------------------------------------------------------------------------
onMounted(() => {
  const chatData = sessionStorage.getItem('chatData')
  if (chatData) {
    data.value = JSON.parse(chatData)
  }
})

//------------------------------------------------------------------------------------------------------------
// Function
//------------------------------------------------------------------------------------------------------------
async function onGetText(value: string) {
  data.value.push({ role: 'user', content: value })

  const res = await useGetOpenAi(data.value)
  if (res.data.value?.status === 200) {
    if (res.data.value?.message) {
      data.value.push({ role: 'assistant', content: res.data.value.message })
      sessionStorage.setItem('chatData', JSON.stringify(data.value))
    }
  }
}

function onClearText(value: boolean) {
  if (value) {
    data.value = []
    sessionStorage.removeItem('chatData')
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

.Contents {
  width: 100%;
  height: calc(100% - 140px - 20px);
  letter-spacing: 3px;
  font-size: 18px;
  overflow-y: auto;
}

.Content {
  width: 100%;
  overflow-wrap: break-word;
}

.User {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  text-align: right;
  background-color: rgba(0, 0, 0, 0.1);
}

.Assistant {
  margin-bottom: 50px;
  text-align: left;
}

.Fixed {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
}
</style>
