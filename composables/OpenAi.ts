export async function useGetOpenAi(postData: any) {
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
