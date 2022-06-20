<template>
    <div v-if="loggedIn" class="logged-in-wrapper">
        <button @click="logout"> <i class="fas fa-sign-out-alt"></i> </button>
        <PostModal :modal-active="false" :doc="props.doc"></PostModal>
    </div>
    <div class="overlay-image-wrapper">
      <div class="overlay-bkg"></div>
      <div class="overlay-exit">X</div>
      <div class="overlay-image"></div>
    </div>
    <div class="post-wrapper">
      <div v-for="(post,index) in posts" :key="index+posts.length" class="item-wrapper" :class="(index+1)%2==0 ? 'right' : 'left'">
        <div class="item" :id="post.title">
          <a v-if="post.link" :href="post.link" target="_blank">
          <h2 class="title">
            {{ post.title }}
          </h2>
          </a>
          <h2 v-else class="title">
            {{ post.title }}
          </h2>
          <div class="image-wrapper" v-if="post.imageNames.length != 0">
            <ImageCarousel v-if="post.imageNames.length>1" :images="post.imageNames" :dataIndex="index" v-bind:id="index"></ImageCarousel>
            <div v-else class="single-image">
              <div class="image" :id="'image'+index" :inner-h-t-m-l="picUrl(post.imageNames[0], `image${index}`, 0)"></div>
            </div>
          </div>
          <div class="description">
            <span class="year-mobile"> {{ post.year }}</span>
            {{ post.description }}
          </div>
          <div class="skill-wrapper">
            <div class="skill" v-for="(skill, index) in post.skills" :key="index">
              <p>{{ skill }}</p>
            </div>
          </div>
        </div>
        <div class="year-right" v-if="(index+1)%2==0">
          <span>{{ post.year }}</span>
        </div>
        <div class="year-left" v-if="(index+1)%2!=0">
          <span>{{ post.year }}</span>
        </div>
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
  a{
    text-decoration: none;
  }
  .right{
    margin-left: 50%;
    text-align: left;
    border-left: 2px dashed var(--main-accent);
    right: 2px;
    position: relative;
    z-index: 3;
    margin-top: -5px;
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
    margin-right: 50%;
    text-align: right;
    border-right: 2px dashed var(--main-accent);
    position: relative;
    // z-index: 3;
    margin-top: -5px;
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
        width: 100%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
        user-select: none;
        margin-inline: auto;
        border-radius: 2%;
    }
    }
  }
  .item-wrapper{
    .item{
      background-color: var(--main-bkg-color);
      padding: .8em;
      z-index: 4;
      position: relative;
      .title{
        margin-bottom: .5em;
        color: var(--main-contrast);
        margin-inline: 1.5em;
      }
      .description{
        margin-bottom: .5em;
        margin-inline: 2em;
        position: relative;
        z-index: 3;
        .year-mobile{
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
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    font-size: clamp(32px, 28vw, 28em);
    color: var(--main-accent);
    opacity: 70%;
    // z-index: -1;
    user-select: none;
    display: flex;
    align-items: center;
 }
 .year-left{
   right: -30vw;
 }
 .year-right{
   left: -30vw;
 }
}
@media (max-width: 500px) {
  .left{
    margin-right: 0 !important;
    border-right: none !important;
    text-align: center !important;
  }
  .right{
    margin-left: 0 !important;
    border-left: none !important;
    text-align: center !important;
  }
  .skill-wrapper{
    justify-content: center !important;
  }

 .post-wrapper {
    .year-left,
    .year-right{
      display: none;
    }
  }
  .post-wrapper .item-wrapper .item{
    background-color: transparent;
  }
}
.overlay-image-wrapper{
  position: fixed;
  width: 100%;
  height: 100vh;
  z-index: 9999999;
  top: 0;
  background-color: rgba(0, 0, 0, 0.418);
  // display: none;
  visibility: hidden;
  transition: visibility 0s ;
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
    width: 80vw;
    height: 45vw;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) scale(.7);
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
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
    filter: drop-shadow(0px 0px 10px var(--main-contrast))
  }
}
@media (min-width: 501px) {
  .description .year-mobile{
    display: none;
  }
}
</style>

<script setup lang="ts">
import { fetchData, picUrl, loadImages } from '../scripts/db'
import { DocumentData } from 'firebase/firestore'
import { defineProps, onMounted } from 'vue'
import { getAuth, signOut } from 'firebase/auth'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import router from '@/router'
import PostModal from './PostModal.vue'
import ImageCarousel from './ImageCarousel.vue'

// Define props
const props = defineProps<{
    doc: string
}>()

// Retrieve data
const snapshot = await fetchData(props.doc)
await loadImages()
const posts: DocumentData[] = []
snapshot.forEach((doc) => {
  posts.push(doc.data())
})

// Check if logged in
const auth = getAuth()
let loggedIn: boolean
if (auth.currentUser) {
  loggedIn = true
} else {
  loggedIn = false
}

// Log out user
function logout () {
  signOut(auth).then(() => {
    router.push('/')
  }).catch((error) => {
    alert('sign out unsuccessful')
    console.log(error)
  })
}

// Add the click event for overlay and styles for each image
onMounted(() => {
  const overlay = document.querySelector('.overlay-image-wrapper') as HTMLElement
  const overlayImage = document.querySelector('.overlay-image') as HTMLElement
  const images = document.querySelectorAll('.carousel-item, .image')
  images.forEach((image, index) => {
    image.addEventListener('click', function () {
      overlay.classList.add('visible')
      const randomAnimation = `animation${Math.floor(Math.random() * 4) + 1}`
      overlayImage.classList.add(randomAnimation)
      overlayImage.style.backgroundImage = image.style.backgroundImage
      document.querySelectorAll('.overlay-bkg, .overlay-exit').forEach((item) => {
        item.addEventListener('click', function () {
          overlay.classList.remove('visible')
          overlayImage.classList.remove(randomAnimation)
        })
      })
    })
  })
})
</script>
