<template>
  <app-header />
  <router-view />
</template>

<script lang="ts">
import AppHeader from '@/components/AppHeader.vue'

export default {
  components: {
    AppHeader
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans&display=swap');
:root{
    --main-bkg-color: #25283D;
    --main-bkg-dark: #202124;
    --main-accent: #7B7DE0;
    --main-contrast: #FF674D;
    --main-contrast-compliment: #D57A66;
    --main-light-color: #F1ECCE;
    --main-text-color: whitesmoke;
}

@media (hover: hover){
  @media not all and (min-resolution: 0.001dpcm) {
    ::-webkit-scrollbar-track{
      background: transparent !important;
    }
    ::-webkit-scrollbar-thumb{
      background: #7b7de085 !important;
      box-shadow: none !important;
    }

  }
  /*scrollbar styles*/
  ::-webkit-scrollbar {
      width: 10px;
      // box-shadow: inset -1px -1px 4px black;
    }
  ::-webkit-scrollbar-track{
    position: absolute;
    background: linear-gradient(0deg, var(--main-contrast) 0%, var(--main-accent) 100%);
  }
  /* Handle */
  ::-webkit-scrollbar-thumb {
    // background: var(--main-accent);
    border-radius: 3px;
    background: transparent;
    box-shadow: 0px 0px 0px 10000000vh var(--main-bkg-color);

  }
  // ::-webkit-scrollbar-thumb:hover {
  //   background: #6465b4;
  // }
}
html, body{
    margin: 0;
    box-sizing: border-box;
    background-color: var(--main-bkg-color);
    line-height: 1.75;
    // font-family: 'Josefin Sans', sans-serif;
    font-family: 'Figtree', sans-serif;
    color: var(--main-text-color);
    position: relative;
    height: 100vh;
    overflow: visible;
    scroll-behavior: smooth;
    // scroll-padding-top: 7rem;
    // overflow-x: hidden;
    // scrollbar-gutter: stable both-edges;
}
header{
    padding: 2em;
    padding-inline: 3em;
    display: flex;
    justify-content: space-between;
}

header .flag-wrapper a{
    text-decoration: none;
    color: white;
    font-size: 40px;
}

#app.overflow-x-hidden{
    overflow-x: hidden;
}

@media (hover:hover){
  html,body{
    overflow-y: overlay;
    overflow-x: hidden;
  }
}
</style>
