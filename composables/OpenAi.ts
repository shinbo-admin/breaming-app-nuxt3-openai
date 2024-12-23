import type { Data } from '~/types/common'

export async function useGetOpenAi(postData: Data[]) {
  const data = useFetch('/api/openai', {
    method: 'POST',
    headers: {
      accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData),
  })

  return data
}
