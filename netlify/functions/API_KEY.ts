import { Handler } from '@netlify/functions'

export const handler: Handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      VUE_APP_API_KEY: process.env.FIREBASE_API_KEY,
    }),
  }
}
