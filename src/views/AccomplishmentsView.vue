<template>
    <Suspense>
        <FetchData doc="accomplishments"></FetchData>
        <template #fallback>
          <SkeletonLoaderVue></SkeletonLoaderVue>
        </template>
    </Suspense>
    <FooterMenu></FooterMenu>
</template>

<script lang="ts">
import FetchData from '@/components/FetchData.vue'
import FooterMenu from '@/components/FooterMenu.vue'
import SkeletonLoaderVue from '../components/SkeletonLoader.vue'

export default {
  components: {
    FetchData,
    FooterMenu,
    SkeletonLoaderVue
  },
  created () {
    document.title = 'Accomplishments | LF'
  },
  mounted () {
    document.querySelector('#app')?.classList.add('overflow-x-hidden')
  },
  unmounted () {
    document.querySelector('#app')?.classList.remove('overflow-x-hidden')
  }
}
</script>
