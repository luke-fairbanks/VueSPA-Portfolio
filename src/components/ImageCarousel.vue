<template>
<div :class="'carousel-wrapper'+$props.dataIndex" class="carousel-wrapper" :style="cssProps">

    <div class="image-nav-wrapper">
        <span class="arrow left"> <i v-on:click="plusSlides(-1)" class="fas fa-chevron-left"></i> </span>
        <div class="carousel-item fade-up slide" :class="'slide'+$props.dataIndex" v-for="(image, index) in $props.images" :id="$props.dataIndex+'image'+index" :inner-h-t-m-l="picUrl(image, `${$props.dataIndex}image${index}`, index)" :key="index"></div>
        <span class="arrow right"> <i v-on:click="plusSlides(1)" class="fas fa-chevron-right"></i> </span>
    </div>
    <div class="dot-wrapper">
        <span v-for="(image, index) in $props.images" :class="'dot'+$props.dataIndex" class="dot" v-on:click="currentSlide(index+1)" :key="index"></span>
    </div>
</div>
</template>
<script lang="ts" setup>
import { picUrl } from '@/scripts/db'
</script>

<script lang="ts">
import { defineComponent, mergeProps } from 'vue'
// let slideIndex = 1

export default defineComponent({
  props: {
    images: Array,
    dataIndex: Number
  },
  data: () => {
    const data = {
      slideIndex: 1
    }
    return data
  },
  methods: {
    plusSlides (n: number) {
      this.showSlides(this.slideIndex += n)
    },
    currentSlide (n: number) {
      this.showSlides(this.slideIndex = n)
    },
    showSlides (n: number) {
      let i
      const slides = document.getElementsByClassName('slide' + this.dataIndex) as HTMLCollectionOf<HTMLElement> //eslint-disable-line
      const dots = document.getElementsByClassName('dot' + this.dataIndex)

      if (n > slides.length) { this.slideIndex = 1 }
      if (n < 1) { this.slideIndex = slides.length }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none'
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '')
      }
      slides[this.slideIndex - 1].style.display = 'block'
      dots[this.slideIndex - 1].className += ' active'
    }
  },
  mounted () {
    this.showSlides(this.slideIndex)
  },
  computed: {
    cssProps () {
      return {
        '--data-index': this.dataIndex
      }
    }
  }
})

</script>
<style lang="scss" scoped>
  .carousel-wrapper{
    // width: 506px;
    // height: 299px;
    display: flex;
    flex-direction: column;

    .image-nav-wrapper{
        height: 350px;
        width: 100%;
        column-gap: .5em;
        display: flex;
        align-items: center;
        .carousel-item{
            height: 100%;
            width: 100%;
            background-position: center;
            background-size: cover;
            background-repeat: no-repeat;
            user-select: none;
            margin-inline: auto;
            border-radius: 2%;
            background-color: var(--main-bkg-dark);
        }
    }
    .dot-wrapper{
        display: flex;
        justify-content: center;
        flex-direction: row;
        margin: 1em;
        padding-inline: .5em;
        column-gap: 0.25em;
        position: relative;
        z-index: 5;
          .dot{
            bottom: 0;
            cursor: pointer;
            height: 15px;
            width: -webkit-fill-available;
            margin: 0 2px;
            background-color: rgba($color: #fff, $alpha: .5);
            border-radius: 3px;
            display: inline-block;
            transition: background-color 0.6s ease;
            &:hover{
                background-color: white;
            }
        }

    }
}
.slide{
    display: none;
}

.active{
    background-color: var(--main-contrast) !important;
    // background: linear-gradient(30deg, var(--main-contrast), var(--main-light-color)) !important;
    cursor: default !important;
}

.arrow{
    color: darkgray;
    display: inline-block;
    top: 1;
    bottom: 0;
    cursor: pointer;
    transition: color 0.6s ease;
    font-size: 1.5em;
}

.arrow:hover{
    color: var(--main-contrast);

}

.svg-inline--fa {
 vertical-align: -.02em;
}

.fade-up{
    -webkit-animation-name: fade;
    -webkit-animation-duration: 1s;
    animation-name: fade;
    animation-duration: 1s;
}

@-webkit-keyframes fade {
    from{opacity: .4;}
    to{opacity: 1;}
}

@keyframes fade {
    from{opacity: .4;}
    to{opacity: 1;}
}
</style>
