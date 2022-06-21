/* eslint-disable */
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
const firebaseConfig = {
  apiKey: 'AIzaSyCC-XHHVG54bD2z6-C7p-CHaDWBru2XXag',
  authDomain: 'luke-fairbanks-portfolio.firebaseapp.com',
  projectId: 'luke-fairbanks-portfolio',
  storageBucket: 'luke-fairbanks-portfolio.appspot.com',
  messagingSenderId: '261899530731',
  appId: '1:261899530731:web:6a480b7982d89bdcb969ae',
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
