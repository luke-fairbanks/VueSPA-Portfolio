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
                <!-- <?xml version="1.0" encoding="UTF-8"?> -->
                <svg id="Layer_2" class="loader-svg" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 105.89 105.67">
                    <defs>
                        <linearGradient id="linear-gradient" x1="43.02" y1="73.31" x2="79.21" y2="37.12" gradientTransform="matrix(1, 0, 0, 1, 0, 0)" gradientUnits="userSpaceOnUse"><stop offset=".02" stop-color="#8a7bd0"/><stop offset=".24" stop-color="#7b7de0"/><stop offset=".28" stop-color="#837bd6"/><stop offset=".34" stop-color="#9977bd"/><stop offset=".42" stop-color="#be7294"/><stop offset=".52" stop-color="#f0695c"/><stop offset=".53" stop-color="#f66957"/><stop offset=".72" stop-color="#ff674d"/><stop offset=".8" stop-color="#fb876c"/><stop offset=".96" stop-color="#f2d9bc"/><stop offset="1" stop-color="#f1ecce"/></linearGradient>
                        <linearGradient id="linear-gradient-2" x1="42.77" y1="62.06" x2="76.68" y2="28.15" xlink:href="#linear-gradient"/>
                        <linearGradient id="linear-gradient-3" x1="15.08" y1="89.81" x2="89.59" y2="15.3" xlink:href="#linear-gradient"/>
                    </defs>
                    <g id="Layer_1-2">
                        <path class="cls-2" id="loader-path-bottom" d="M93.41,74.92c1.08-3.97,2.06-10.34-1-16-3.59-6.64-11.24-8.5-25-12-3.67-.93-11.07-2.64-21.5-3.5-10.19-.84-18.78-.52-25,0"/>
                        <path class="cls-1" id="loader-path-top" d="M95.41,71.92c.06-6.97-1.49-12.33-3-16-7.84-19-28.29-25.5-33-27-6.57-2.09-11.98-2.52-18-3-10.76-.86-19.76,.02-26,1"/>
                        <path class="cls-3" id="loader-path-circle" d="M69.41,10.92c3.84,1.17,13.36,4.62,21,14,1.18,1.45,7.29,9.15,9,20,3.27,20.7-10.5,46.21-33,53-15.52,4.68-29.3-1.32-33-3-3.84-1.74-14.01-6.51-21-18-7.83-12.86-6.51-25.65-6-30,.6-5.09,2.29-17.82,13-28C29.08,9.73,46.33,2.37,52.41,7.92c11.16,10.17-26.16,53.74-13,71,7.04,9.24,26.26,7.94,51,1"/>
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
   max-width: 55vw;
   min-width: 704px;
   height: 360px;
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
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    border-radius: 15px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    padding: 1em;
    top: -16px;
    left: -16px;
    background-color: var(--main-bkg-dark);
    transform: rotateY(179.9deg);
}
.intro-card-inner.transition{
    transition: transform .8s ease;
}

.intro-card-inner.active {
  -webkit-transform: rotateY(0deg);
  transform: rotateY(0deg);
}
.intro-card-front, .intro-card-back {
  width: 100%;
  height: 100%;
  -webkit-backface-visibility: hidden; /* Safari */
  visibility: visible;
  backface-visibility: hidden;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  background-color: var(--main-bkg-dark);
  top: 0;
  left: 0;
  border-radius: 15px;
}

.intro-card-front{
    -webkit-transform: rotateY(0deg);
    transform: rotateY(0deg);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.intro-card-back{
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    .loader-svg{
        height: 60%;
        width: 60%;
        z-index: 6;
        filter: drop-shadow(2px 2px 10px rgba(0, 0, 0, 0.7));
        $path-top-length: 104.8;
        $path-bottom-length: 91.8;
        $path-circle-length: 405.8;
        &.enlarge{
            transform: scale(1.5);
        }
        #loader-path-top{
            stroke-dashoffset: $path-top-length;
            stroke-dasharray: $path-top-length;
            &.active{
                animation: stroke1 forwards cubic-bezier(0.77, 0.12, 0.43, 0.9) .7s;
                @keyframes stroke1 {
                    50%{
                        stroke-dashoffset: 0;
                    }
                    51%{
                        stroke-dashoffset: calc($path-top-length * 2);
                    }
                    100%{
                        stroke-dashoffset: 140;
                    }
                }
            }
        }

        #loader-path-bottom{
            stroke-dashoffset: $path-bottom-length;
            stroke-dasharray: $path-bottom-length;
            &.active{
                animation: stroke2 forwards cubic-bezier(0.77, 0.12, 0.43, 0.9) .7s;
                @keyframes stroke2 {
                    50%{
                        stroke-dashoffset: 0;
                    }
                    51%{
                        stroke-dashoffset: calc($path-bottom-length * 2);
                    }
                    100%{
                        stroke-dashoffset: 115;
                    }
                }
            }
        }
        #loader-path-circle{
            stroke-dashoffset: $path-circle-length;
            stroke-dasharray: $path-circle-length;
            &.active{
                animation: stroke3 1.5s forwards cubic-bezier(0.4, 0, 0.2, 1);
                @keyframes stroke3 {
                    to{
                        stroke-dashoffset: 0;
                    }
                }
            }
        }
        .cls-1{
            stroke:url(#linear-gradient-2);
        }
        .cls-1,.cls-2{
            stroke-width:11px;
        }
        .cls-1,.cls-2,.cls-3{
            fill:none;stroke-linecap:round;
        }
        .cls-1,.cls-3{
            stroke-miterlimit:10;
        }.cls-2{
            stroke:url(#linear-gradient);stroke-linejoin:round;
        }
        .cls-3{
            stroke:url(#linear-gradient-3);stroke-width:12px;
        }
    }
    .intro-overlay-loader{
        position: absolute;
        height: 200vh;
        width: 100vw;
        background-color: var(--main-bkg-dark);
        z-index: 5;
        transition: 1s ease;
        backface-visibility: hidden;
        border-radius: 15px;
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

   background-image: url(../assets/images/card-pic.webp);
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
        height: auto;
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
import { scrollIntoView, polyfill } from 'seamless-scroll-polyfill'

onMounted(() => {
  function playIntro () {
    document.body.style.overflow = 'auto'
    // scroll to center svg

    polyfill()
    scrollIntoView(document.querySelector('.loader-svg') as Element, {
      behavior: 'auto',
      block: 'center',
      inline: 'center'
    })
    // document.querySelector('.loader-svg')?.scrollIntoView({
    //   block: 'center',
    //   inline: 'center'
    // })
    // hide scrollbar and hamburger menu
    document.querySelector('.hamburglar')?.classList.add('hide')
    document.body.style.overflow = 'hidden'
    // put but transition on inner card
    document.querySelector('.intro-card-inner')?.classList.add('transition')
    // define our elements
    const topPath = document.querySelector('#loader-path-top')
    const bottomPath = document.querySelector('#loader-path-bottom')
    const circlePath = document.querySelector('#loader-path-circle')
    const introOverlay = document.querySelector('#intro-overlay-loader') as HTMLElement
    const loaderSVG = document.querySelector('.loader-svg') as HTMLElement
    // begin animation, setting each one active after the one before has finished
    loaderSVG?.classList.add('enlarge')
    circlePath?.classList.add('active')
    circlePath?.addEventListener('animationend', () => {
      topPath?.classList.add('active')
      bottomPath?.classList.add('active')
      topPath?.addEventListener('animationend', () => {
        introOverlay?.classList.add('hide')
        loaderSVG.style.transition = 'transform .6s ease-in-out'
        loaderSVG?.classList.remove('enlarge')
        introOverlay?.addEventListener('animationend', () => {
          introOverlay.style.display = 'none'
          // end of animation, restore styles and toggle state
          document.querySelector('.hamburglar')?.classList.remove('hide')
          document.body.style.removeProperty('overflow')
          setTimeout(() => {
            document.querySelector('.intro-card-inner')?.classList.toggle('active')
          }, 300)
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
