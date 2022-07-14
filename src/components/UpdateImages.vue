<template>
  <div @click="toggleModal" class="imageEdit"><i class="fas fa-images"></i></div>
  <Teleport to="body">
    <transition name="modal-animation">
        <div v-show="modalActive" class="modal">
        <div class="modal-background" @click="toggleModal"></div>
        <transition name="modal-animation-inner">
            <div v-show="modalActive" class="modal-inner">
            <i @click="toggleModal" class="far fa-times-circle exit-modal-icon"></i>
            <form @submit.prevent="startUpdate" class="image-form" :id="'postForm'+postIndex" enctype="multipart/form-data" autocomplete="on">
                <div class="image-input-wrapper" v-for="image, index in post.imageNames" :key="index">
                    <div class="input-preview">
                        <img class="preview-image" :id="$props.postIndex+'preview-image'+index" :src="setSrc(index)" alt="">
                        <input type="file" name="photo" id="photoForm" @change="updateImage($event, index)" >
                    </div>
                    <div class="input-delete">
                        <i class="fas fa-trash-alt" @click="startDeleteImage(index)"></i>
                    </div>
                </div>
                <div class="button-wrapper">
                    <button @click.prevent="addImageInput"> <i class="fas fa-plus"></i> </button>
                    <input type="submit" value="Submit">
                </div>
            </form>
            </div>
        </transition>

        </div>
    </transition>
  </Teleport>
</template>

<!-- WHAT NEXT:
heres where i left off.
i was just creating the ability to add more file inputs
whenever i come back to this project, i should:
1. check out https://github.com/pqina/vue-filepond for a good file uploader
2. maybe restart? you really only need to store a beginning list of image names and urls, and then when the form is submitted,
    create an ending list and compare the two. if the ending list is different, then delete all the missing links.
Good luck Luke! (good to see you, by the way)
 -->

<script setup lang="ts">
import { ref, defineProps, defineEmits } from 'vue'
import { saveImages, updateData, deleteImage } from '@/scripts/db'
const emit = defineEmits(['refreshDom'])
const props = defineProps<{
  modalActive: boolean,
  doc: string,
  post: any,
  postIndex: number
}>()
const modalActive = ref(false)
const toggleModal = () => {
  modalActive.value = !modalActive.value
}

const startingImages = props.post.imageNames.map((image: any, index: any) => {
  let url = ''
  if (props.post.imageNames.length > 1) {
    url = document.getElementById(`${props.postIndex}image${index}`)?.style.backgroundImage.slice(5, -2) ?? ''
  }
  if (props.post.imageNames.length === 1) {
    url = document.getElementById(`image${props.postIndex}`)?.style.backgroundImage.slice(5, -2) ?? ''
  }
  return {
    image,
    url,
    index
  }
})
console.log(startingImages)

function startUpdate () {
  console.log('start update')
  const form = document.querySelector('.image-form') as HTMLFormElement
  const formData = new FormData(form)
  for (const [key, value] of formData.entries()) {
    const image = value.valueOf()
    console.log(image)
    if (image.size > 0) {
      console.log('image found')
    }
  }
  const imageData = Array.from(formData.getAll('photo')).map((image: any) => image.name).map((image: any, index: any) => {
    console.log(`${props.postIndex}image${index}`)
    const imageName = document.getElementById(`${props.postIndex}image${index}`)
    const url = imageName?.style.backgroundImage.slice(5, -2) ?? ''
    return {
      imageName,
      url
    }
  })
  console.log('imageData', imageData)
}
// function to add another image input field
const addImageInput = () => {
  const form = document.getElementById(`postForm${props.postIndex}`) as HTMLFormElement
  //   const imageInputWrapper = document.createElement('div')
  //   imageInputWrapper.classList.add('image-input-wrapper')
  const imageInputWrapper = document.querySelector(`#postForm${props.postIndex} > .image-input-wrapper`) as HTMLDivElement
  const newDiv = imageInputWrapper.cloneNode(true)
  const imageInput = document.createElement('input')
  imageInput.type = 'file'
  imageInput.name = 'photo'
  imageInput.id = `${props.postIndex}image${props.post.imageNames.length}`
  imageInput.accept = 'image/*'
  imageInput.required = true
  form.appendChild(newDiv)
}
function setSrc (index: number) {
  if (props.post.imageNames.length > 1) {
    return document.getElementById(`${props.postIndex}image${index}`)?.style.backgroundImage.slice(5, -2)
  }
  if (props.post.imageNames.length === 1) {
    return document.getElementById(`image${props.postIndex}`)?.style.backgroundImage.slice(5, -2)
  }
}
// runs every time there is a change in the input
function updateImage (e: any, index: number) {
  const file = e.target.files[0]
  const url = URL.createObjectURL(file)
  console.log('file', file, 'url', url)
  const image = document.getElementById(`${props.postIndex}preview-image${index}`) as HTMLImageElement
  console.log(image)
  image.src = url
}
// sends image name and url to db.ts to delete
function startDeleteImage (index: number) {
  const image = document.getElementById(`${props.postIndex}preview-image${index}`) as HTMLImageElement
  deleteImage(image.src, props.post.imageNames[index])
}
</script>

<style lang="scss" scoped>
.imageEdit{
    cursor: pointer;
    &:hover{
        color: var(--main-light-color)
    }
}
.modal-inner{
    .image-form{
        .image-input-wrapper{
            display: flex;
            align-items: center;
            padding: .5em;
            border: 2px dashed var(--main-accent);
            border-radius: 5px;
            justify-content: space-between;
            margin-top: 1em;
            &:last-of-type{
                margin-bottom: 1em;
            }
            .input-preview{
            display: flex;
            align-items: center;
            column-gap: .5em;
            flex-wrap: wrap;
                img{
                    width: 80px;
                    height: 80px;
                    object-fit: scale-down;
                }
            }
        }
        .button-wrapper{
            width: 100%;
            display: flex;
            justify-content: space-between;
            margin-top: 1em;
            input[type="submit"]{
                margin-inline: 0;
            }
            button{
                background: none;
                border: none;
                color: var(--main-accent);
                font-size: 2em;
                cursor: pointer;
            }
        }
    }
}
</style>
