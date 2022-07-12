<template>
    <Suspense>
        <FetchData doc="my-work"></FetchData>
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
    document.title = 'My Work | LF'
    document.querySelector('meta[name="description"]')?.setAttribute('content', 'My Work')
    document.querySelector('#app')?.classList.add('overflow-x-hidden')
  }
}
</script>
