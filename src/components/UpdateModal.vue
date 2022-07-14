<template>
  <div @click="toggleModal" class="edit"><i class="fas fa-edit"></i></div>
  <Teleport to="body">
    <transition name="modal-animation">
        <div v-show="modalActive" class="modal">
        <div class="modal-background" @click="toggleModal"></div>
        <transition name="modal-animation-inner">
            <div v-show="modalActive" class="modal-inner">
            <i @click="toggleModal" class="far fa-times-circle exit-modal-icon"></i>
            <form @submit.prevent="startUpdate" id="postForm" enctype="multipart/form-data" autocomplete="on">
                <label for="title">Title</label>
                <input type="text" name="title" id="title" v-model="title" />
                <label for="titleLink" placeholder='url'>Link</label>
                <input type="url" name="titleLink" id="titleLink" v-model="titleLink" />
                <div v-if="$props.doc === 'my-work'" style="display:flex; flex-direction:column">
                  <label for="githubLink" placeholder="github link">Repo</label>
                  <input type="url" name="githubLink" id="githubLink" v-model="githubLink" />
                </div>
                <label for="description">Description</label>
                <textarea rows="10" name="description" v-model.trim="description"/>
                <div class="year-skill-wrapper">
                <div>
                    <label for="date">Date</label>
                    <input type="date" name="date" :value="formatDate(date)" @input="updateDate($event)">
                  </div>
                <div>
                    <label for="skills">Skills (Comma seperated list)</label>
                    <textarea name="skills" id="skills" cols="30" rows="5" v-model="skillList"></textarea>
                </div>
                </div>
                <!-- <input type="file" name="photo" id="photoForm" multiple> -->
                <input type="submit" value="Update">
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

function formatDate (d: { getTime: () => number; getTimezoneOffset: () => number; }) {
  return d && new Date(d.getTime() - (d.getTimezoneOffset() * 60 * 1000)).toISOString().split('T')[0]
}
function updateDate (e: any) {
  document.getElementById('date')?.setAttribute('value', formatDate(new Date(e.target.value)))
  date = new Date(e.target.value)
}

const fullDate = new Date(props.post.date.toDate())
const title = ref(props.post.title)
const description = ref(props.post.description)
let date = new Date(props.post.date.toDate()) // eslint-disable-line
const skillList = ref(props.post.skills as string + ' ')
const titleLink = ref(props.post.link)
const githubLink = ref(props.post.githubLink)
const form = document.getElementById('postForm') as HTMLFormElement

// TODO: figure out a solution for editing uploaded photos.
// I'm thinking just creating a whole new modal for editing photos

function startUpdate () {
  // const imageInput = document.getElementById('photoForm') as HTMLInputElement
  // const data = imageInput.files
  //   let imageNames: string[] = []
  let skills: string[] = []
  //   if (data) {
  //     imageNames = saveImages(data, props.doc)
  //   }
  if (skillList.value) {
    skills = skillList.value.split(',').map((x: string) => x.trim())
  }
  updateData(props.doc, title.value, titleLink.value, description.value, date.getFullYear(), date, skills, props.post.docId, githubLink.value).then(() => {
    modalActive.value = !modalActive.value
    emit('refreshDom')
  })
}
</script>

<style lang="scss">
.edit{
    cursor: pointer;
    &:hover{
    color: rgb(135, 196, 135);
    }
}
.modal-animation-enter-active,
.modal-animation-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-animation-enter-from,
.modal-animation-leave-to {
  opacity: 0;
}
.modal-animation-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}
.modal-animation-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}
.modal-animation-inner-enter-from {
  opacity: 0;
  transform: scale(0);
}
.modal-animation-inner-leave-to {
  transform: scale(0.8);
}
.modal {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(99, 99, 99, 0.7);
  z-index: 9999;
  .modal-background{
    width: 100%;
    height: 100%;
    position: absolute;
  }
  .modal-inner {
    position: relative;
    max-width: 640px;
    min-width: 336px;
    width: 80%;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    background-color: var(--main-bkg-color);
    padding: 36px 16px;
    .exit-modal-icon {
      position: absolute;
      top: 15px;
      right: 15px;
      font-size: 20px;
      cursor: pointer;
      &:hover {
        color: var(--main-accent);
      }
    }
    .close {
      padding: 20px 30px;
      border: none;
      font-size: 16px;
      background-color: var(--main-accent);
      color: #fff;
      cursor: pointer;
      border-radius: 15px;
      &:hover{
        background-color: crimson;
      }
    }
  }
  form{
    display: flex;
    flex-direction: column;
    margin-bottom: 1em;
    textarea{
      resize: none;
    }
    .year-skill-wrapper{
      width: 100%;
      display: flex;
      margin-top: .5em;
      justify-content: space-between;
      input[type="number"]{
        height: 15px;
      }
      div{
        display: flex;
        flex-direction: column;
      }
    }
    input[type="submit"]{
      margin-inline: auto;
      color: green;
      background-color: var(--main-light-color);
      border: none;
      padding: 10px 20px;
      cursor: pointer;
      border-radius: 10px;
    }
  }
}
@media (max-height: 700px){
  .modal .modal-inner {
    padding: 24px 16px ;
  }
}

</style>
