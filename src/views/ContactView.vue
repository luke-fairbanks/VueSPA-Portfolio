<template>
    <contact-form-vue />
</template>

<script lang="ts">
import ContactFormVue from '@/components/ContactForm.vue'
export default {
  components: {
    ContactFormVue
  },
  created () {
    document.title = 'Contact | LF'
  }
}
</script>
