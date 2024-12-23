import { defineEventHandler } from 'h3'
import OpenAI from 'openai'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const config = useRuntimeConfig()

  const openai = new OpenAI({
    apiKey: config.openaiApiKey,
  })

  const completion = await openai.chat.completions.create({
    model: 'gpt-4',
    messages: body,
  })

  try {
    return { status: 200, message: completion.choices[0].message.content }
  } catch (error) {
    return { status: 500, message: 'error' }
  }
})
