<template>
  <h1>Login to Your Account</h1>
  <div class="login-form">
    <p><input type="text" placeholder="Email" v-model="email" /></p>
    <p><input type="password" placeholder="Password" v-model="password" /></p>
    <p v-if="errMsg">{{ errMsg }}</p>
    <p><button @click="signIn()">Submit</button></p>
  </div>
</template>
<style scoped lang="scss">
h1{
    text-align: center;
  }
.login-form{

  p{
    display: flex;
    justify-content: center;
  }
}
</style>
<script setup lang="ts">
import router from '@/router'
import store from '@/store'
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { ref } from 'vue'

const email = ref('')
const password = ref('')
const errMsg = ref()
function signIn () {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      const user = userCredential.user
      console.log(user, 'signed in!')
      router.push('/')
      store.commit('setLoggedIn', true)
    })
    .catch(error => {
      switch (error.code) {
        case 'auth/invalid-email':
          errMsg.value = 'Invalid email'
          break
        case 'auth/user-not-found':
          errMsg.value = 'No account with that email was found'
          break
        case 'auth/wrong-password':
          errMsg.value = 'Incorrect password'
          break
        default:
          errMsg.value = 'Email or password was incorrect'
          break
      }
    })
}
</script>
