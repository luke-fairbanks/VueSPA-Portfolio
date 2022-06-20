import { Handler } from '@netlify/functions'

export const handler: Handler = async (event, context) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      VUE_APP_APP_ID: process.env.FIREBASE_APP_ID,
    }),
  }
}
