<template>
  <div @click="toggleModal" class="imageEdit"><i class="fas fa-images"></i></div>
  <Teleport to="body">
    <transition name="modal-animation">
        <div v-show="modalActive" class="modal">
        <div class="modal-background" @click="toggleModal"></div>
        <transition name="modal-animation-inner">
            <div v-show="modalActive" class="modal-inner">
                <i @click="toggleModal" class="far fa-times-circle exit-modal-icon"></i>
                <div class="image-upload-wrapper">

                </div>
            </div>
        </transition>

        </div>
    </transition>
  </Teleport>
</template>

<!-- TODO:
    find a real file upload component
    implement it
    good luck.
 -->

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

const myFiles: string[] = []

function populateFiles () {
  myFiles.push(...props.post.imageNames)
}

</script>

<style lang="scss">

.imageEdit{
    cursor: pointer;
    &:hover{
        color: var(--main-light-color)
    }
}
.filepond--root .filepond--credits[style]{
    display: none;
}
</style>
