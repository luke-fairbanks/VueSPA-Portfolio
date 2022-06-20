import { Handler } from '@netlify/functions'
import { initializeApp } from 'firebase/app'

export const handler: Handler = async (event, context) => {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: 'luke-fairbanks-portfolio.firebaseapp.com',
    projectId: 'luke-fairbanks-portfolio',
    storageBucket: 'luke-fairbanks-portfolio.appspot.com',
    messagingSenderId: '261899530731',
    appId: process.env.FIREBASE_APP_ID,
    measurementId: 'G-6XM1P4FGMZ'
  }

  // Initialize Firebase
  const app = initializeApp(firebaseConfig)

  return {
    statusCode: 200,
    app
  }
}
