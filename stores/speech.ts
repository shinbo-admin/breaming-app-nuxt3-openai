export const useSpeechStore = () =>
  useState<{ isSpeech: boolean }>('isSpeechStore', () => {
    return {
      isSpeech: false,
    }
  })
