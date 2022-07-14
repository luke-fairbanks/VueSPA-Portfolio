<template>
    <header>
        <div class="flag-wrapper">
          <router-link to="/mission">
            <div class="us"></div> <div class="cr"></div>
          </router-link>
        </div>
            <div class="hamburger-wrapper">
                <div id="hamburger" class="hamburglar is-closed">

                    <div class="burger-icon">
                    <div class="burger-container">
                        <span class="burger-bun-top"></span>
                        <span class="burger-filling"></span>
                        <span class="burger-bun-bot"></span>
                    </div>
                    </div>
                    <div class="burger-ring">
                    <svg class="svg-ring">
                        <path class="path" fill="none" stroke="#fff" stroke-miterlimit="10" stroke-width="4" d="M 34 2 C 16.3 2 2 16.3 2 34 s 14.3 32 32 32 s 32 -14.3 32 -32 S 51.7 2 34 2" />
                    </svg>
                    </div>
                    <svg width="0" height="0">
                    <mask id="mask">
                    <path xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#ff0000" stroke-miterlimit="10" stroke-width="4" d="M 34 2 c 11.6 0 21.8 6.2 27.4 15.5 c 2.9 4.8 5 16.5 -9.4 16.5 h -4" />
                    </mask>
                    </svg>
                    <div class="path-burger">
                    <div class="animate-path">
                        <div class="path-rotation"></div>
                    </div>
                    </div>
                </div>
            </div>
    </header>
        <div class="menu-bg"></div>
        <div class="navigation-overlay-wrapper">
            <div class="link-wrapper">
                <div>
                  <router-link to="/mywork" class="link-item">
                      My Work
                  </router-link>
                </div>
                <div>
                  <router-link to="/accomplishments" class="link-item">
                        Accomplishments
                  </router-link>
                </div>
                <div>
                  <router-link to="/contact" class="link-item">
                      Contact
                  </router-link>
                </div>
                <div>
                  <router-link to="/resume" class="link-item">
                      Resume
                  </router-link>
                </div>
                <router-link to="/" class="link-item home-link">
                  <i class="fas fa-id-card"></i>
                </router-link>
            </div>
        </div>
</template>

<script lang="ts">
import $ from 'jquery'
export default {
  mounted () {
    const trigger = $('#hamburger')
    let isClosed = true
    $('#hamburger, .link-item').on('click', function () {
      burgerTime()
    })

    function burgerTime () {
      if (isClosed === true) {
        trigger.removeClass('is-closed')
        trigger.addClass('is-open')
        isClosed = false
        document.body.style.overflow = 'hidden'
        $('.menu-bg, .link-wrapper, .menu-burger').toggleClass('fs')
      } else {
        trigger.removeClass('is-open')
        trigger.addClass('is-closed')
        isClosed = true
        setTimeout(() => {
          document.body.style.removeProperty('overflow')
          $('.menu-bg, .link-wrapper, .menu-burger').toggleClass('fs')
        }, 100)
      }
    }
  }
}

</script>

<style lang="scss">

.hamburglar {
    transform: scale(1);
    position: relative;
    display: block;
    width: 68px;
    height: 68px;
    background: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
       -moz-user-select: none;
        -ms-user-select: none;
            user-select: none;
    z-index: 101;
  }
  .hamburglar.hide{
    z-index: 0;
  }

  .path-burger {
    position: absolute;
    top: 0;
    left: 0;
    height: 68px;
    width: 68px;
    -webkit-mask-box-image: url(https://raygun.io/upload/mask.svg);
    cursor: pointer;
  }

  .animate-path {
    position: absolute;
    top: 0;
    left: 0;
    width: 68px;
    height: 68px;
  }

  .path-rotation {
    height: 34px;
    width: 34px;
    margin: 34px 34px 0 0;
    transform: rotate(0deg);
    transform-origin: 100% 0;
  }
  .path-rotation:before {
    content: "";
    display: block;
    width: 30px;
    height: 34px;
    margin: 0 4px 0 0;
    background: #fff;
  }

  @-webkit-keyframes rotate-out {
    0% {
      transform: rotate(0deg);
    }
    40% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes rotate-out {
    0% {
      transform: rotate(0deg);
    }
    40% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes rotate-in {
    0% {
      transform: rotate(360deg);
    }
    40% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  @keyframes rotate-in {
    0% {
      transform: rotate(360deg);
    }
    40% {
      transform: rotate(180deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .hamburglar.is-open .path {
    -webkit-animation: dash-in 0.6s linear normal;
            animation: dash-in 0.6s linear normal;
    -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
  }
  .hamburglar.is-open .animate-path {
    -webkit-animation: rotate-in 0.6s linear normal;
            animation: rotate-in 0.6s linear normal;
    -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
  }

  .hamburglar.is-closed .path {
    -webkit-animation: dash-out 0.6s linear normal;
            animation: dash-out 0.6s linear normal;
    -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
  }
  .hamburglar.is-closed .animate-path {
    -webkit-animation: rotate-out 0.6s linear normal;
            animation: rotate-out 0.6s linear normal;
    -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
  }

  .path {
    stroke-dasharray: 240;
    stroke-dashoffset: 240;
    stroke-linejoin: round;
  }

  @-webkit-keyframes dash-in {
    0% {
      stroke-dashoffset: 240;
    }
    40% {
      stroke-dashoffset: 240;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }

  @keyframes dash-in {
    0% {
      stroke-dashoffset: 240;
    }
    40% {
      stroke-dashoffset: 240;
    }
    100% {
      stroke-dashoffset: 0;
    }
  }
  @-webkit-keyframes dash-out {
    0% {
      stroke-dashoffset: 0;
    }
    40% {
      stroke-dashoffset: 240;
    }
    100% {
      stroke-dashoffset: 240;
    }
  }
  @keyframes dash-out {
    0% {
      stroke-dashoffset: 0;
    }
    40% {
      stroke-dashoffset: 240;
    }
    100% {
      stroke-dashoffset: 240;
    }
  }
  .burger-icon {
    position: absolute;
    padding: 20px 16px;
    /*height: 68px;
    width: 68px; */
  }

  .burger-container {
    position: relative;
    height: 28px;
    width: 36px;
  }

  .burger-bun-top,
  .burger-bun-bot,
  .burger-filling {
    position: absolute;
    display: block;
    height: 4px;
    width: 36px;
    border-radius: 2px;
    background: #fff;
  }

  .burger-bun-top {
    top: 0;
    transform-origin: 34px 2px;
  }

  .burger-bun-bot {
    bottom: 0;
    transform-origin: 34px 2px;
  }

  .burger-filling {
    top: 12px;
  }

  .burger-ring {
    position: absolute;
    top: 0;
    left: 0;
    width: 68px;
    height: 68px;
  }

  .svg-ring {
    width: 68px;
    height: 68px;
  }

  .hamburglar.is-open .burger-bun-top {
    -webkit-animation: bun-top-out 0.6s linear normal;
            animation: bun-top-out 0.6s linear normal;
    -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
  }
  .hamburglar.is-open .burger-bun-bot {
    -webkit-animation: bun-bot-out 0.6s linear normal;
            animation: bun-bot-out 0.6s linear normal;
    -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
  }

  .hamburglar.is-closed .burger-bun-top {
    -webkit-animation: bun-top-in 0.6s linear normal;
            animation: bun-top-in 0.6s linear normal;
    -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
  }
  .hamburglar.is-closed .burger-bun-bot {
    -webkit-animation: bun-bot-in 0.6s linear normal;
            animation: bun-bot-in 0.6s linear normal;
    -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
  }

  @-webkit-keyframes bun-top-out {
    0% {
      left: 0;
      top: 0;
      transform: rotate(0deg);
    }
    20% {
      left: 0;
      top: 0;
      transform: rotate(15deg);
    }
    80% {
      left: -5px;
      top: 0;
      transform: rotate(-60deg);
    }
    100% {
      left: -5px;
      top: 1px;
      transform: rotate(-45deg);
    }
  }

  @keyframes bun-top-out {
    0% {
      left: 0;
      top: 0;
      transform: rotate(0deg);
    }
    20% {
      left: 0;
      top: 0;
      transform: rotate(15deg);
    }
    80% {
      left: -5px;
      top: 0;
      transform: rotate(-60deg);
    }
    100% {
      left: -5px;
      top: 1px;
      transform: rotate(-45deg);
    }
  }
  @-webkit-keyframes bun-bot-out {
    0% {
      left: 0;
      transform: rotate(0deg);
    }
    20% {
      left: 0;
      transform: rotate(-15deg);
    }
    80% {
      left: -5px;
      transform: rotate(60deg);
    }
    100% {
      left: -5px;
      transform: rotate(45deg);
    }
  }
  @keyframes bun-bot-out {
    0% {
      left: 0;
      transform: rotate(0deg);
    }
    20% {
      left: 0;
      transform: rotate(-15deg);
    }
    80% {
      left: -5px;
      transform: rotate(60deg);
    }
    100% {
      left: -5px;
      transform: rotate(45deg);
    }
  }
  @-webkit-keyframes bun-top-in {
    0% {
      left: -5px;
      bot: 0;
      transform: rotate(-45deg);
    }
    20% {
      left: -5px;
      bot: 0;
      transform: rotate(-60deg);
    }
    80% {
      left: 0;
      bot: 0;
      transform: rotate(15deg);
    }
    100% {
      left: 0;
      bot: 1px;
      transform: rotate(0deg);
    }
  }
  @keyframes bun-top-in {
    0% {
      left: -5px;
      bot: 0;
      transform: rotate(-45deg);
    }
    20% {
      left: -5px;
      bot: 0;
      transform: rotate(-60deg);
    }
    80% {
      left: 0;
      bot: 0;
      transform: rotate(15deg);
    }
    100% {
      left: 0;
      bot: 1px;
      transform: rotate(0deg);
    }
  }
  @-webkit-keyframes bun-bot-in {
    0% {
      left: -5px;
      transform: rotate(45deg);
    }
    20% {
      left: -5px;
      bot: 0;
      transform: rotate(60deg);
    }
    80% {
      left: 0;
      bot: 0;
      transform: rotate(-15deg);
    }
    100% {
      left: 0;
      transform: rotate(0deg);
    }
  }
  @keyframes bun-bot-in {
    0% {
      left: -5px;
      transform: rotate(45deg);
    }
    20% {
      left: -5px;
      bot: 0;
      transform: rotate(60deg);
    }
    80% {
      left: 0;
      bot: 0;
      transform: rotate(-15deg);
    }
    100% {
      left: 0;
      transform: rotate(0deg);
    }
  }
  .hamburglar.is-open .burger-filling {
    -webkit-animation: burger-fill-out 0.6s linear normal;
            animation: burger-fill-out 0.6s linear normal;
    -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
  }

  .hamburglar.is-closed .burger-filling {
    -webkit-animation: burger-fill-in 0.6s linear normal;
            animation: burger-fill-in 0.6s linear normal;
    -webkit-animation-fill-mode: forwards;
            animation-fill-mode: forwards;
  }

  @-webkit-keyframes burger-fill-in {
    0% {
      width: 0;
      left: 36px;
    }
    40% {
      width: 0;
      left: 40px;
    }
    80% {
      width: 36px;
      left: -6px;
    }
    100% {
      width: 36px;
      left: 0px;
    }
  }

  @keyframes burger-fill-in {
    0% {
      width: 0;
      left: 36px;
    }
    40% {
      width: 0;
      left: 40px;
    }
    80% {
      width: 36px;
      left: -6px;
    }
    100% {
      width: 36px;
      left: 0px;
    }
  }
  @-webkit-keyframes burger-fill-out {
    0% {
      width: 36px;
      left: 0px;
    }
    20% {
      width: 42px;
      left: -6px;
    }
    40% {
      width: 0;
      left: 40px;
    }
    100% {
      width: 0;
      left: 36px;
    }
  }
  @keyframes burger-fill-out {
    0% {
      width: 36px;
      left: 0px;
    }
    20% {
      width: 42px;
      left: -6px;
    }
    40% {
      width: 0;
      left: 40px;
    }
    100% {
      width: 0;
      left: 36px;
    }
  }

  .menu-bg {
    position: fixed;
    width: 0px;
    height: 0px;
    font-size: 30px;
    text-align: center;
    border-radius: 100%;
    right: 25px;
    top: 25px;
    z-index: 100;
    background: var(--main-bkg-dark);
    pointer-events: none;
    transition: 0.3s;
    right: 50px;
    top: 50px;
    transform: translate3d(50%, -50%, 0);
    transform-origin: center center;

  }
  .menu-bg.fs {
    transform: translate3d(50%, -50%, 0);
    width: 300vw;
    min-width: 400px;
    height: 300vw;
    min-height: 3000px;
  }

  .navigation-overlay-wrapper{
      display: flex;
      justify-content: center;
  }
  .flag-wrapper{
    display: flex;
    align-items: center;
    z-index: 10;
    a{
      display: flex;
      flex-direction: row;
      column-gap: .2em;
      .us,
      .cr{
        width: 50px;
        height: 35px;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
      }
      .us{
        background-image: url('../assets/images/united-states.png');
      }
      .cr{
        background-image: url('../assets/images/costa-rica.png');
      }
    }
  }
  .link-wrapper {
    width: 80%;
    max-width: 1200px;
    z-index: 101;
    margin-top: 0;
    position: absolute;
    font-weight: bold;
    font-size: 40px;
    letter-spacing: 5px;
    opacity: 0;
    transition: 0.4s;
    transform: translateY(-200%);
    pointer-events: none;
    flex-direction: column;
    justify-content: space-between;
    height: 80vh;
  }
  .link-wrapper div {
    transition: 1s;
    opacity: 0;
    margin-top: 0px;
  }
  .link-wrapper.fs {
    transform: translateY(0);
    pointer-events: auto;
    opacity: 1;
  }
  .link-wrapper.fs div {
    opacity: 1;
    // margin-top: 50px;
  }
.link-wrapper div {
    position: relative;
}

.link-wrapper div a{
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    color: var(--main-accent);
    font-size: 85px;
    filter: drop-shadow(2px 2px 0px black);
    font-weight: 900;
    position: relative;
}
.link-wrapper div a::before{
    content: "";
    width: 0%;
    height: 30px;
    background-color: var(--main-light-color);
    opacity: 70%;
    top: 50%;
    position: absolute;
    transition: .4s;
    transform: skew(350deg);
}
.link-wrapper div a.router-link-active::before{
  background-color: var(--main-bkg-color);
  width: 100%;
}
.link-wrapper div a:hover::before{
    width: 100%;
}
.link-wrapper div:nth-of-type(1){
    margin-top: 0px;
}
.link-wrapper div:nth-of-type(1),
.link-wrapper div:nth-of-type(3){
    text-align:start;
}

.link-wrapper div:nth-of-type(2),
.link-wrapper div:nth-of-type(4){
    text-align: end;
}

.link-wrapper .home-link{
  position: absolute;
  top: 20px;
  right:0px;
  font-size: 2em;
  color: var(--main-accent);
}
.link-wrapper .home-link.router-link-active i{
  filter: drop-shadow(4px 2px 0px var(--main-contrast-compliment));
}

@media (max-width:1000px) {
.link-wrapper{
  div{
    .link-item{
      font-size: 7vw;
      letter-spacing: 1px;
    }
  }
  div:nth-of-type(2),
  div:nth-of-type(4){
    text-align: start;
  }
  .home-link{
    font-size: 12vw;
    top: 8px;
  }
  div a::before {
    top: 40%;
  }
}
.link-wrapper.fs div {
    margin-top: 10px;
}
}
@media (max-width: 400px){
  .link-wrapper div a::before {
    height: 15px;
    top: 25%;
  }
}
</style>
