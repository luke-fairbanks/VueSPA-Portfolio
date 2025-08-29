<template>
    <div v-if="loggedIn" class="logged-in-wrapper">
        <button @click="logout"> <i class="fas fa-sign-out-alt"></i> </button>
        <PostModal :modal-active="false" :doc="props.doc" @refresh-dom="domRefresh"></PostModal>
    </div>
    <div class="overlay-image-wrapper">
      <div class="overlay-bkg"></div>
      <div class="overlay-exit">X</div>
      <img class="overlay-image" />
    </div>
    <div class="post-wrapper">
      <div v-for="(post,index) in posts" :key="index+posts.length" class="item-wrapper" :class="(index+1)%2==0 ? 'right' : 'left'">
        <div class="item" :id="post.title">
          <div class="title-wrapper">
            <a v-if="post.link" :href="post.link" target="_blank">
            <h2 class="title title-link">
              {{ post.title }}
            </h2>
            </a>
            <h2 v-else class="title" style="cursor:default">
              {{ post.title }}
            </h2>
            <a v-if="$props.doc === 'my-work' && post.githubLink && posts.githubLink !== ''" :href="post.githubLink" target="_blank" class="github-link">
              <i class="fab fa-github"></i>
            </a>
          </div>
          <div class="image-wrapper" v-if="post.imageNames.length != 0">
            <ImageCarousel v-if="post.imageNames.length>1" :images="post.imageNames" :dataIndex="index" @image-press="displayOverlay" v-bind:id="index"></ImageCarousel>
            <div v-else class="single-image">
              <div class="image" :id="'image'+index" :inner-h-t-m-l="picUrl(post.imageNames[0], `image${index}`, 0)"></div>
            </div>
          </div>
          <div class="description">
            <span v-if="post.year !== 1740" class="year-mobile"> {{ post.year }}</span>
            {{ post.description }}
          </div>
          <div class="skill-wrapper">
            <div class="skill" v-for="(skill, index) in post.skills" :key="index">
              <p>{{ skill }}</p>
            </div>
          </div>
          <div v-if="loggedIn" class="edit-post-wrapper">
            <div>
              <UpdateModal :doc="$props.doc" :post="post" :modal-active="false" @refresh-dom="domRefresh"></UpdateModal>
            </div>
            <div>
              <UpdateImages :doc="$props.doc" :post="post" :modal-active="false" :postIndex="index" @refresh-dom="domRefresh"></UpdateImages>
            </div>
            <!-- <div>
              <UpdateImageModal :doc="$props.doc" :post="post" :modal-active="false" :postIndex="index" @refresh-dom="domRefresh"></UpdateImageModal>
            </div> -->
            <div class="trash" @click="deleteItem(post)"><i class="fas fa-dumpster-fire"></i></div>
          </div>
        </div>
        <div class="year-right" v-if="(index+1)%2==0 && post.year !== 1740">
          <span>{{ post.year }}</span>
        </div>
        <div class="year-left" v-if="(index+1)%2!=0 && post.year !== 1740">
          <span>{{ post.year }}</span>
        </div>
        <div class="year-fill-right" v-if="(index+1)%2==0 && post.year === 1740"></div>
        <div class="year-fill-left" v-if="(index+1)%2!=0 && post.year === 1740"></div>
      </div>
    </div>
</template>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Fredoka+One&display=swap');
.logged-in-wrapper{
  display: flex;
  justify-content: end;
  padding-inline: 2em;
  margin-inline: auto;
  column-gap: 1em;
  margin-bottom: 1em;
  max-width: 1200px;

  button{
    padding: .5em;
    font-size: 1.5em;
    color: var(--main-bkg-dark);
    border: none;
    background: rgb(255,27,0);
    background: linear-gradient(50deg, var(--main-light-color) 0%, var(--main-contrast) 100%);
    border-radius: 100%;
    cursor: pointer;
    height: 50px;
    width: 50px;
  }
}

@keyframes fade-in{
  from{
    opacity: .4;
    transform: translateY(10px);
  }
  to{
    opacity: 1;
    transform: translateY(0px);
  }
}
.post-wrapper{
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
  margin-inline: auto;
  animation: fade-in .5s;
  .item-wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: center;
  }
  a{
    text-decoration: none;
    position: relative;
  }
  .title-wrapper{
    display: flex;
    align-items: center;
    column-gap: .35em;
    .github-link{
      display: flex;
      align-items: center;
      margin-top: 5px;
      cursor: pointer;
      filter: drop-shadow(1px 1px 0px var(--main-contrast));
      i{
        font-size: 1.5em;
        color: var(--main-light-color);
      }
    }
    .title-link:hover::after,
    .github-link:hover::after{
      opacity: .8;
      transform: scale(1);
    }
    .title-link::after,
    .github-link::after{
      // tooltip on hover
      content: "visit project";
      position: absolute;
      top: 5px;
      width: max-content;
      padding-inline: .2em;
      background: var(--main-bkg-dark);
      opacity: 0;
      transition: .2s ease;
      border-radius: 3px;
      font-size: 17px;
      font-weight: 100;
      color: var(--main-light-color);
      transform: scale(.8);
      &:hover{
        opacity: .8;
      }
    }
    .github-link::after{
      content: "view code";
      right: 0;
      top: -3px;
    }

  }
  .right{
    // margin-left: 50%;
    text-align: left;
    position: relative;
    z-index: 3;
    margin-top: -5px;
    // display: flex;
    // flex-direction: row-reverse;
    .item{
      grid-column: 2;
      &::before{
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        // border-left: 2px dashed var(--main-accent);
        border-left: 2px solid var(--main-accent);
        z-index: -1;
      }
      .title-wrapper{
        .title{
          margin-left: 1.5em;
        }
        .title-link::after{
          left: -100px;

        }
        .github-link::after{
          left: 30px
        }
      }
    }
    .item:target{
      border: 3px solid var(--main-light-color);
      border-left: none;
      border-radius: 0px 5px 5px 0px;
      filter: contrast(90%);
    }
    .title{
      filter: drop-shadow(1px 1px 0px var(--main-light-color))
    }
    .skill-wrapper{
      font-family: 'Play', sans-serif;
      justify-content: start;
    }
    .skill{
      cursor: default;
      box-shadow: 2px 2px 2px black;
      transition: .4s;
      animation: box-shadow-grow-right .3s forwards;
      user-select: none;
      &:hover{
        transform: translateY(-2px);
      }
      &:active{
        transform: translate(0);
        animation: box-shadow-shrink-right .1s forwards;
      }
      @keyframes box-shadow-shrink-right {
        0%{
          box-shadow: 2px 2px 2px black;
        }
        50%{
          box-shadow: 0px 0px 0px black;
        }
        51%{
          box-shadow: inset 0px 0px 0px black;
        }
        100%{
          box-shadow: inset 2px 2px 2px black;
        }
      }
      @keyframes box-shadow-grow-right {
        0%{
          box-shadow: inset 2px 2px 2px black;
        }
        50%{
          box-shadow: inset 0px 0px 0px black;
        }
        51%{
          box-shadow: 0px 0px 0px black;
        }
        100%{
          box-shadow: 2px 2px 2px black;
        }
      }
      p{
        //filter: drop-shadow(1.5px 1px 0px lighten(#7B7DE0, 20%));

      }
    }

  }
  .left{
    // margin-right: 50%;
    text-align: right;
    position: relative;
    margin-top: -5px;
    // display: flex;
    // flex-direction: row;
    .item{
      grid-column: 1;
      &::before{
        content: "";
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        // border-right: 2px dashed var(--main-accent);
        border-right: 2px solid var(--main-accent);
        z-index: -1;
      }
      .title-wrapper{
        flex-direction: row-reverse;
        .title{
          margin-right: 1.5em;
        }
        .title-link:after{
          right: -100px;
        }
        .github-link::after{
          right: 30px
        }
      }
    }
    .item:target{
      border: 3px solid var(--main-light-color);
      border-right: none;
      border-radius: 5px 0px 0px 5px;
      filter: contrast(90%);
    }
    .title{
      filter: drop-shadow(-1px 1px 0px var(--main-light-color))
    }
    .skill-wrapper{
      justify-content: end;
    }
    .skill{
      cursor: default;
      box-shadow: -2px 2px 2px black;
      transition: .4s;
      animation: box-shadow-grow-left .1s forwards;
      user-select: none;
      &:hover{
        transform: translateY(-2px);
      }
      &:active{
        transform: translate(0);
        animation: box-shadow-shrink-left .1s forwards;
      }
      @keyframes box-shadow-shrink-left {
        0%{
          box-shadow: -2px 2px 2px black;
        }
        50%{
          box-shadow: 0px 0px 0px black;
        }
        51%{
          box-shadow: inset 0px 0px 0px black;
        }
        100%{
          box-shadow: inset -2px 2px 2px black;
        }
      }
      @keyframes box-shadow-grow-left {
        0%{
          box-shadow: inset -2px 2px 2px black;
        }
        50%{
          box-shadow: inset 0px 0px 0px black;
        }
        51%{
          box-shadow: 0px 0px 0px black;
        }
        100%{
          box-shadow: -2px 2px 2px black;
        }
      }
      p{
        //filter: drop-shadow(1.5px 1px 0px lighten(#7B7DE0, 20%));

      }
    }
  }
  .image-wrapper{
    margin-inline: 0.5em;
    position: relative;
    z-index: 5;
    .single-image{
      height: 299px;
      width: 100%;
      .image{
        height: 100%;
        width: 94%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        user-select: none;
        margin-inline: auto;
        border-radius: 2%;
        background-color: var(--main-bkg-dark);
    }
    }
  }
  .item-wrapper{
    .item{
      // background-color: var(--main-bkg-color);
      background-color: rgba(37, 40, 61, 0.207);
      backdrop-filter: blur(20px);
      padding: .8em;
      z-index: 4;
      position: relative;
      width: -webkit-fill-available;
      .edit-post-wrapper{
        font-size: 2em;
        display: flex;
        column-gap: .5em;
        justify-content: center;
        .trash{
          cursor: pointer;
          &:hover{
            color: crimson;
          }
        }
      }
      .title{
        // font-family: 'Montserrat', sans-serif;
        margin-bottom: .5em;
        color: var(--main-contrast);
        position: relative;
      }
      .description{
        margin-bottom: .5em;
        margin-inline: 2em;
        position: relative;
        z-index: 3;
        .year-mobile{
          font-family: 'Montserrat', sans-serif;

          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          margin: auto;
          height: fit-content;
          font-size: clamp(32px, 28vw, 28em);
          color: var(--main-accent);
          opacity: 40%;
          z-index: -1;
          user-select: none;
        }
      }
      .skill-wrapper{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        row-gap: .5em;
        column-gap: .5em;
        font-family: 'Fredoka One', cursive;
        font-weight: lighter;
        margin-inline: 2em;
        position: relative;
        z-index: 3;
        .skill{
          padding: .25em .5em;
          background-color: var(--main-bkg-dark);
          color: var(--main-accent);
          border-radius: 15px;
          font-size: 15px;
          text-align: center;
          p{
            margin: 0;
            padding: 0;
          }
        }
      }
    }
  }
  .year-left,
  .year-right{
    // position: absolute;
    // top: 0;
    // bottom: 0;
    font-family: 'Montserrat', sans-serif;
    margin: auto;
    font-size: clamp(32px, 25vw, 23em);
    color: var(--main-accent);
    opacity: 70%;
    // z-index: -1;
    user-select: none;
    display: flex;
    align-items: center;
    width: 50%;
    display: flex;
    justify-content: center;
    span{
      position: absolute;
    }
 }
 .year-right{
   right: 0;
   grid-column: 1;
   grid-row: 1;
 }
 .year-fill-right,
 .year-fill-left{
  width: 50%;
 }
  .year-fill-right{
    padding-right: 26px;
  }
  .year-fill-left{
    padding-left: 25px;
  }
}
@media (max-width: 500px) {
  .left{
    margin-right: 0 !important;
    border-right: none !important;
    text-align: center !important;
    .item::before{
      border-right: none !important;
    }
  }
  .right{
    margin-left: 0 !important;
    border-left: none !important;
    text-align: center !important;
    .item::before{
      border-left: none !important;
    }
  }
  .skill-wrapper{
    justify-content: center !important;
  }

 .post-wrapper {
    .year-left,
    .year-right{
      display: none;
    }
    .year-fill-right,
    .year-fill-left{
      display: none;
    }
    .title-wrapper{
      justify-content: center;
      flex-direction: row-reverse !important;
      .title{
          margin-right: 0 !important;
          margin-left: 0 !important;
        }
      .title-link::after{
        right: -100px !important;
        left: auto !important;
      }
      .github-link{
        display: none;
      }
      .github-link::after{
        left: -88px !important;
      }
    }
  }
  .post-wrapper .item-wrapper{
    grid-template-columns: 1fr;
  }
  .post-wrapper .item-wrapper .item{
    background-color: transparent;
    width: 100%;
  }
  .overlay-image-wrapper .overlay-image{
    height: auto !important;
    width: 80vw;
  }
}
.overlay-image-wrapper{
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 9999999;
  top: 0;
  background-color: rgba(0, 0, 0, 0.418);
  backdrop-filter: blur(10px);
  // display: none;
  visibility: hidden;
  transition: visibility 0s ;
  display: flex;
  align-items: center;
  &.visible{
    // display: block;.
    visibility: visible;
  }
  .overlay-image{
      &.animation1{
        transform: translate(-50%, -50%) scale(1);
        opacity: 1;
      }
      &.animation2{
        opacity: 1;
        animation: 2s swipe-left-down forwards;
        @keyframes swipe-left-down {
          0%{
            transform: translate(80vw, -50%);
          }
          49%{
            transform: translate(-180vw, -50%);
          }
          50%{
            transform: translate(-50%, 80vh);
          }
          100%{
            transform: translate(-50%, -50%);
          }
        }
      }
      &.animation3{
        animation: .7s spiral-up forwards;
        @keyframes spiral-up {
          0%{
            transform: translate(-50%, -50%) scale(.5);
            opacity: .2;
          }
          100%{
            transform: translate(-50%, -50%) scale(1) rotate(360deg);
            opacity: 1;
          }
        }
      }
      &.animation4{
        //Would be cool to have it look like its pushing out of the original picture
        opacity: 1;
        animation: diaganol-flip 2s cubic-bezier(1, 0.09, 0.6, 1.65) forwards;
        @keyframes diaganol-flip {
          from{
            transform: translate(-50%, -50%) rotateY(90deg) rotateX(90deg);
          }
          to{
            transform: translate(-50%, -50%) rotateY(0deg) rotateX(0deg);
          }
        }
      }
    }
  .overlay-bkg{
    height: 100%;
    width: 100%;
    z-index: 2;
  }
  .overlay-image{
    // width: 80vw;
    height: 45vw;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(.7);
    z-index: 3;
    opacity: .5;
    transition: visibility 0s, transform .3s, opacity .3s ease;
  }
  .overlay-exit{
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-66px, 30px);
    font-size: 3em;
    font-weight: bolder;
    cursor: pointer;
    user-select: none;
    filter: drop-shadow(0px 0px 10px var(--main-contrast));
    z-index: 4;
  }
}
@media (min-width: 501px) {
  .description .year-mobile{
    display: none;
  }
}
</style>

<script setup lang="ts">
import { fetchData, picUrl, loadImages, deletePost } from '../scripts/db'
import { DocumentData } from 'firebase/firestore'
import { defineProps, onBeforeMount, onMounted, ref } from 'vue'
import { getAuth, signOut } from 'firebase/auth'
import { gsap, snap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import router from '@/router'
import PostModal from './PostModal.vue'
import ImageCarousel from './ImageCarousel.vue'
import UpdateModal from './UpdateModal.vue'
import UpdateImages from './UpdateImages.vue'
import store from '@/store'
import UpdateImageModal from './UpdateImageModal.vue'

// Define props
const props = defineProps<{
    doc: string
}>()

// Load images before page is mounted
onBeforeMount(async () => {
  await loadImages()
})

// Check if logged in
const auth = await getAuth()
const loggedIn = store.state.loggedIn

// let loggedIn: boolean
// if (auth.currentUser) {
//   loggedIn = true
// } else {
//   loggedIn = false
// }

// Log out user
function logout () {
  signOut(auth).then(() => {
    router.push('/')
  }).catch((error) => {
    alert('sign out unsuccessful')
    console.log(error)
  })
}

gsap.registerPlugin(ScrollTrigger)

// Retrieve data
let snapshot = await fetchData(props.doc)
// const posts: DocumentData[] = []
const posts = ref<DocumentData>([])
snapshot.forEach((doc) => {
  posts.value.push(doc.data())
})

// Function for refreshing DOM
async function domRefresh () {
  snapshot = await fetchData(props.doc)
  posts.value.length = 0
  snapshot.forEach((doc) => {
    posts.value.push(doc.data())
  })
}

function deleteItem (post: any) {
  if (confirm(`Are you sure you want to delete ${post.title}?`)) {
    deletePost(post.docId, post.imageNames, props.doc)
      .then(async () => {
        domRefresh()
      })
  }
}

// function for showing overlay image

function displayOverlay (image: Element) {
  const overlay = document.querySelector('.overlay-image-wrapper') as HTMLElement
  const overlayImage = document.querySelector('.overlay-image') as HTMLElement
  overlay.classList.add('visible')
  // Possibility to randomize animations, just uncomment the following line
  // I removed this feature because I thought it was too much motion and a little buggy on safari
  // const randomAnimation = `animation${Math.floor(Math.random() * 4) + 1}`
  const randomAnimation = 'animation1'
  overlayImage.classList.add(randomAnimation)
  overlayImage.src = image.style.backgroundImage.slice(5, -2)
  setTimeout(() => {
    document.querySelectorAll('.overlay-bkg, .overlay-exit').forEach((item) => {
      item.addEventListener('click', function () {
        overlay.classList.remove('visible')
        overlayImage.classList.remove(randomAnimation)
      })
    })
    // listen for escape key to close overlay
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') {
        overlay.classList.remove('visible')
        overlayImage.classList.remove(randomAnimation)
      }
    })
  }, 500)
}

onMounted(() => {
  // Add the click event for overlay and styles for each image
  const images = document.querySelectorAll('.image, .carousel-item')

  // for each image, add click listener and open image larger.
  images.forEach((image, index) => {
    image.addEventListener('click', function () {
      displayOverlay(image)
    })
  })

  document.body.style.overflowX = 'hidden'
  // get year instances and iterate over them
  const yearsLeft = document.querySelectorAll('.year-left')
  yearsLeft.forEach((year) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: year,
        start: 'top 70%',
        end: '+=500',
        scrub: 1
      }
    })
    tl.from(year, { xPercent: -80, opacity: 0.4 })
      .to(year, { xPercent: 0, opacity: 0.8 })
  })
  const yearsRight = document.querySelectorAll('.year-right')
  yearsRight.forEach((year) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: year,
        start: 'top 70%',
        end: '+=500',
        scrub: 1
      }
    })
    tl.from(year, { xPercent: 80, opacity: 0.4 })
      .to(year, { xPercent: 0, opacity: 0.8 })
  })
})
</script>
