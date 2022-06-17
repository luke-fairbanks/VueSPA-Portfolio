import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import emailjs from 'emailjs-com'

import { initializeApp } from 'firebase/app'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
console.log(process.env.FIREBASE_API_KEY)
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
export const app = initializeApp(firebaseConfig)

emailjs.init('7OjaYnu6LRvIPrAVl')

createApp(App).use(store).use(router).mount('#app')

// // IDEA --> when you first load into the app, (or maybe when you first
// acesss accomplishment/ my-work page ) get all of the images in the google store
// and load through all of them with ___ = new Image()
// then save these images somewhere and when my-work or accomplishments is accessed
// call upon that storage to show the files.
