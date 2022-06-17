<template>
    <AuthUIVue></AuthUIVue>
</template>

<script lang="ts">
import AuthUIVue from '@/components/AuthUI.vue'
import router from '@/router'
import { getAuth } from '@firebase/auth'

export default {
  components: {
    AuthUIVue
  },
  mounted () {
    if (getAuth().currentUser) {
      router.push('/')
      alert('you are already signed in!')
    }
  },
  created () {
    document.title = 'Sign In'
  }
}
</script>
