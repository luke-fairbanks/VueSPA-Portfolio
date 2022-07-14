<template>
  <div @click="toggleModal" class="imageEdit"><i class="fas fa-images"></i></div>
  <Teleport to="body">
    <transition name="modal-animation">
        <div v-show="modalActive" class="modal">
        <div class="modal-background" @click="toggleModal"></div>
        <transition name="modal-animation-inner">
            <div v-show="modalActive" class="modal-inner">
            <i @click="toggleModal" class="far fa-times-circle"></i>
            <form @submit.prevent="startUpdate" id="postForm" enctype="multipart/form-data" autocomplete="on">
            </form>
            </div>
        </transition>
        </div>
    </transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'
import { saveImages, updateData } from '@/scripts/db'
const emit = defineEmits(['refreshDom'])
const props = defineProps<{
  modalActive: boolean,
  doc: string,
  post: any
}>()
const modalActive = ref(false)
const toggleModal = () => {
  modalActive.value = !modalActive.value
}
function startUpdate () {
  console.log('start update')
}
</script>

<style lang="scss" scoped>
.imageEdit{
    cursor: pointer;
    &:hover{
        color: var(--main-light-color)
    }
}
</style>
