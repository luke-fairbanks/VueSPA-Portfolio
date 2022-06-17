<template>
    <div :class="className" :style="backgroundImageStyle"></div>
</template>
<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { defineProps } from 'vue'
const props = defineProps<{
    className: string,
    imageName: string
}>()
// const backgroundImage = computed(() => `background-image: url("./assets/${props.imageName}");`)
const backgroundImageStyle = computed(() => {
  return { '--bkg-img': `url("./assets/${props.imageName}");` }
})
</script>
<style lang="scss">
div{
    background-image: var(--bkg-img);
}
</style>
