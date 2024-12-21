export const useHeaderStore = () =>
  useState<{ height: number }>('headerStore', () => {
    return {
      height: 50,
    }
  })

export const useFooterStore = () =>
  useState<{ height: number }>('footerStore', () => {
    return {
      height: 40,
    }
  })
