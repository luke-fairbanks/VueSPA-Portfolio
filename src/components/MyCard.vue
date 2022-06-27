<template>
    <div class="intro-wrapper">
        <div class="intro-beginning">
            <p>
                This may be a little forward, but <span>here's my card:</span>
            </p>
        </div>
        <div class="intro-card">
            <div class="intro-card-inner">
                <div class="intro-card-front">
                    <div class="left-col">
                        <div class="card-photo"> </div>
                        <div class="card-info">
                            <div class="name">Luke Fairbanks</div>
                            <div class="title">Full Stack Developer</div>
                        </div>
                    </div>
                    <div class="middle-col">
                        <div class="graphic-wrapper">
                            <div class="graphic">
                            </div>
                        </div>
                        <div class="github-link-wrapper">
                            <a href="https://github.com/anuraghazra/github-readme-stats" @click.stop="" target="_blank"><i class="fab fa-github"></i>powered by github</a>
                        </div>
                        <ul>
                            <li>
                                <h3>
                                    Aspiring software developer
                                </h3>
                            </li>
                            <li>
                                <h3>
                                    Computer Science Student
                                </h3>
                            </li>
                            <li>
                                <h3>
                                    Entrepenuer
                                </h3>
                            </li>
                            <li>
                                <h3>
                                    Athlete
                                </h3>
                            </li>
                        </ul>

                    </div>
                    <div class="right-col">

                        <div class="icon" style="background-color: #4B8BBE;">
                            <i class="fab fa-python"></i>
                        </div>

                        <div class="icon">
                            <i class="fas fa-graduation-cap"></i>
                        </div>
                        <div class="icon" style="background-color: #95bf48 ;">
                            <i class="fab fa-shopify"></i>
                        </div>
                    </div>
                </div>
                <div class="intro-card-back">
                    <svg class="loader-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 105.77 102.26">
                        <defs><linearGradient id="linear-gradient" y1="51.13" x2="105.77" y2="51.13" gradientUnits="userSpaceOnUse"><stop offset="0.02" stop-color="#8a7bd0"/><stop offset="0.25" stop-color="#7b7de0"/><stop offset="0.42" stop-color="#7b7de0"/><stop offset="0.73" stop-color="#ff674d"/><stop offset="0.94" stop-color="#df7660"/><stop offset="1" stop-color="#d57a66"/></linearGradient></defs>
                        <g id="Layer_2" data-name="Layer 2">
                            <g id="Layer_1-2" data-name="Layer 1">
                                <path class="cls-1" id="loader-path-bottom" d="M70,51.17a72.56,72.56,0,0,0-50-8"/>
                                <path class="cls-1" id="loader-path-top" d="M78,37.17a89.05,89.05,0,0,0-65-9"/>
                                <path class="cls-2" id="loader-path-circle" d="M67,10.17c16.51,5.18,28.89,17.77,32,33,4.77,23.36-14.5,44.76-34,51a45.3,45.3,0,0,1-30-1c-16.66-6.67-29.77-24-29-43C7.27,19.86,43.36,1,53,7.17c12.73,8.12-17.19,61.58,0,75,8.86,6.91,25.86-.22,37-6"/>
                            </g>
                        </g>
                    </svg>
                    <div class="intro-overlay-loader" id="intro-overlay-loader"></div>
                </div>
            </div>
        </div>
        <div class="intro-text">
            <h1 style="margin-bottom: 0px;">Hello, my name is <span>Luke Fairbanks</span>. <br> Welcome to my portfolio.</h1>
        </div>

    </div>
</template>

<style scoped lang="scss">
.intro-wrapper{
    height: 75vh;
   width: 50%;
   max-width: 55vw;
   min-width: 750px;
   margin-inline: auto;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   margin: auto;
   right: 0; left: 0; top: 0; bottom: 0;
}

.intro-beginning{
   color: gray;
   transform: translateX(-55%);
}
.intro-beginning span{
   color: var(--main-light-color);
}

.intro-card{
   height: 50%;
   max-width: 55vw;
   min-width: 704px;
   min-height: 360px;
   background-color: transparent ;
   position: relative;
   color: var(--main-text-color);
   column-gap: 1em;
   padding: 1em;
}

.intro-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 1em;
    top: -16px;
    left: -16px;
    background-color: var(--main-bkg-dark);
    transform: rotateY(180deg);
}
.intro-card-inner.transition{
    transition: transform .8s ease;
}

.intro-card-inner.active {
  transform: rotateY(0deg);
}
.intro-card-front, .intro-card-back {
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
  background-color: var(--main-bkg-dark);
  top: 0;
  left: 0;
  border-radius: 15px;
}

.intro-card-front{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.intro-card-back{
    transform: rotateY(180deg);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    .loader-svg{
        height: 50%;
        width: 50%;
        z-index: 6;
        #loader-path-top{
            stroke-dashoffset: 68;
            stroke-dasharray: 68;
            &.active{
                animation: stroke1 forwards ease .5s;
                @keyframes stroke1 {
                    to{
                        stroke-dashoffset: -20;
                    }
                }
            }
        }

        #loader-path-bottom{
            stroke-dashoffset: 52;
            stroke-dasharray: 52;
            &.active{
                animation: stroke2 forwards ease .5s;
                @keyframes stroke2 {
                    to{
                        stroke-dashoffset: -15;
                    }
                }
            }
        }
        #loader-path-circle{
            stroke-dashoffset: 400;
            stroke-dasharray: 400;
            &.active{
                animation: stroke3 1.5s forwards ease;
                @keyframes stroke3 {
                    to{
                        stroke-dashoffset: 0;
                    }
                }
            }
        }
        .cls-1,.cls-2{fill:none;stroke-miterlimit:10;stroke-width:12px;}.cls-1{stroke:#7b7de0;}.cls-2{stroke:url(#linear-gradient);}
    }
    .intro-overlay-loader{
        position: absolute;
        height: 200vh;
        width: 100vw;
        background-color: var(--main-bkg-dark);
        z-index: 5;
        transition: 1s ease;
        &.hide{
            animation: away .6s ease forwards;
            @keyframes away {
                to{
                    height: 380px;
                    width: 700px;
                    z-index: -1;
                }
            }
            @media (max-width: 750px) {
            @keyframes away {
                to{
                    height: 700px;
                    width: 320px;
                    z-index: -1;
                }
            }
            }
        }
    }
}
.intro-card .intro-card-front .left-col{
   margin-top: auto;
   margin-bottom: auto;
   display: flex;
   align-items: center;
   flex-direction: column;
   row-gap: 1em;
}
.intro-card .left-col .card-info{
   text-align: center;
}

.intro-card .left-col .card-photo{
   height: 12em;
   width: 12em;

   border-radius: 100%;

   background-image: url(../assets/images/IMG_5619.png);
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
}

.intro-card .left-col .name{
   color: var(--main-light-color);
}
.card-info .title{
   color: gray;
}

.intro-card .middle-col{
   display: flex;
   flex-direction: column;
}
.intro-card .middle-col .graphic-wrapper {
   /* background: #151618; */
   width: 23em;
   height: 50%;
   min-height: 170px;
   display: flex;
   align-items: center;
}
.intro-card .middle-col .graphic-wrapper .graphic{
   width: 100%;
   height: 100%;
   min-height: 140px;
   border-radius: 5px;
//    background-image: url(https://awesome-github-stats.azurewebsites.net/user-stats/luke-fairbanks?cardType=github&theme=blueberry);
   background-image: url(https://github-readme-stats.vercel.app/api/top-langs/?username=luke-fairbanks&hide=html&layout=compact&hide_border=true&title_color=7B7DE0&text_color=f5f5f5&bg_color=151618&langs_count=6 );
   /* background-image: url(https://github-readme-stats.vercel.app/api/top-langs/?username=luke-fairbanks&hide=html&layout=compact&hide_border=true&theme=blueberry ); */

   background-size: cover;
   background-repeat: no-repeat;
   background-position: center;
   background-size: 100%;

   box-shadow: inset 0px 0px 2px 0px black;
}
.intro-card .middle-col .github-link-wrapper{
   font-size: 12px;
   margin-right: 5px;
   display: flex;
   justify-content: flex-end;

}
.intro-card .middle-col .github-link-wrapper a{
   text-decoration: none;
   color: gray;
   display: flex;
   align-items: center;

}
.intro-card .middle-col .github-link-wrapper a i{
   font-size: 15px;
   margin: .2em;
}
.intro-card .middle-col ul{
   list-style: circle;
   margin-top: .2em;
   margin-bottom: .2em;
}
.intro-card .middle-col ul h3{
   margin-top: .4em;
   margin-bottom: .4em;
}

.intro-card .right-col{
   display: flex;
   flex-direction: column;
   row-gap: 1em;
   justify-content: space-evenly;
   margin-inline: 1em;

}
.intro-card .right-col .icon{
   font-size: 64px;
   width: 80px;
   height: 80px;
   background-color: var(--main-contrast-compliment);
   border-radius: 50%;
   display: flex;
   align-items: center;
   justify-content: center;
   filter: drop-shadow(1px 2px 1px black);
}
// .intro-card .right-col .icon i{
//    /* filter: drop-shadow(1px 1px 1px black); */
// }
.intro-text{
   text-align: center;
   color: var(--main-accent);
}
.intro-text span{
   color: var(--main-contrast);
   text-shadow: var(--main-light-color) .5px .5px;
   margin-bottom: 0px;
}
.intro-text p{
   color: gray;
   margin-top: 5px;
   font-size: 15px;
}

.about-wrapper{
   position: relative;
   display: flex;
   justify-content: center;
}

.about-wrapper .svg-wrapper{
   position: absolute;
   top:0;
   right:0;
   width:100%;
   height:auto;
}

.about-wrapper .svg-wrapper svg{
    height: 3000px;
}

@media screen and (max-width: 750px) {
    header{
        padding-bottom: 0;
    }
    body{
        overflow:auto;
        overflow-x: hidden;
    }
    .intro-wrapper{
        height: auto;
        max-width: max-content;
        min-width: 0;
        width: 100%;
    }
    .intro-wrapper div:nth-of-type(1){
        justify-content: start;
    }
    .intro-beginning{
        transform: translate(0);
        p{
            width: 70%;
            margin-left: 10vw;
        }
    }
    .intro-card-front{
        flex-direction: column;
    }
    .intro-card{
        flex-direction: column;
        min-width: 0;
        width: 80%;
        max-width: fit-content;
        .right-col{
            flex-direction: row;
            column-gap: 1em;
        }
    }
    .intro-text{
        font-size: .7em;
        margin-top: 2em;
        margin-bottom: 2em;
    }
    .intro-card .middle-col .graphic-wrapper{
        width: auto;
    }
}
@media screen and (max-width: 450px) {
    .intro-card .middle-col .graphic-wrapper .graphic{
        width: 80vw;
    }

}
</style>

<script setup lang="ts">
import store from '@/store'
import { onMounted } from 'vue'

onMounted(() => {
  function playIntro () {
    document.querySelector('.hamburglar')?.classList.add('hide')
    document.body.style.overflow = 'hidden'
    document.querySelector('.loader-svg')?.scrollIntoView({
      block: 'center',
      inline: 'center'
    })
    document.querySelector('.intro-card-inner')?.classList.add('transition')
    const topPath = document.querySelector('#loader-path-top')
    const bottomPath = document.querySelector('#loader-path-bottom')
    const circlePath = document.querySelector('#loader-path-circle')
    const introOverlay = document.querySelector('#intro-overlay-loader')
    circlePath?.classList.add('active')
    circlePath?.addEventListener('animationend', () => {
      topPath?.classList.add('active')
      bottomPath?.classList.add('active')
      topPath?.addEventListener('animationend', () => {
        introOverlay?.classList.add('hide')
        introOverlay?.addEventListener('animationend', () => {
          document.querySelector('.hamburglar')?.classList.remove('hide')
          document.body.style.removeProperty('overflow')
          document.querySelector('.intro-card-inner')?.classList.toggle('active')
          store.commit('setActivated')
          document.querySelector('.intro-card')?.addEventListener('click', () => {
            document.querySelector('.intro-card-inner')?.classList.toggle('active')
          })
        })
      })
    })
  }
  if (store.state.cardAnimaionActivated === false) {
    setTimeout(playIntro, 500)
  } else {
    document.querySelector('.intro-card-inner')?.classList.toggle('active')
    document.querySelector('.intro-card-inner')?.classList.add('transition')
    const introOverlay = document.querySelector('#intro-overlay-loader') as HTMLElement
    introOverlay.style.display = 'none'
    document.querySelectorAll('#loader-path-top, #loader-path-bottom, #loader-path-circle').forEach((item) => {
      item.classList.add('active')
    })
    document.querySelector('.intro-card')?.addEventListener('click', () => {
      document.querySelector('.intro-card-inner')?.classList.toggle('active')
    })
  }
})
</script>
