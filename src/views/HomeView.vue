<template>
  <MyCardVue />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MyCardVue from '@/components/MyCard.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    MyCardVue
  },
  created () {
    document.title = 'Luke Fairbanks Portfolio'
  },
  unmounted () {
    document.querySelector('#app')?.classList.remove('overflow-x-hidden')
  }
})
</script>
