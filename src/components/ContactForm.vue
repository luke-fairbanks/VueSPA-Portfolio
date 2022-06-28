<template>
    <div class="main-conatiner">
        <p class="contact-intro" > Send me a message! </p>
        <div class="envelope-container">
            <input id="flap" type="checkbox">
            <label class="flap" for="flap" />
            <div class="envelope-back"></div>
            <div class="card">
                <div class="form-wrapper">
                    <form id="email-form" action="javascript:sendEmail()">
                        <div class="email">
                            <label for="email-form">sender's email:</label>
                            <input id="email-form" name="reply_to" type="email" required oninvalid="this.setCustomValidity('Please Include Your Email')"
                            oninput="this.setCustomValidity('')">
                        </div>
                        <div class="message">
                            <label for="message"></label>
                            <textarea maxlength="300" rows="5" cols="60" id="message-form" placeholder="message" name="message" required oninvalid="this.setCustomValidity('Please Include A Message.')"
                            oninput="this.setCustomValidity('')"></textarea>
                        </div>
                        <div class="send">
                            <div class="signature-wrapper">
                                <label for="signature-form">x</label>
                                <input type="text" name="from_name" placeholder="your name" id="signature-form" required oninvalid="this.setCustomValidity('Please Include Your Name')"
                                oninput="this.setCustomValidity('')">
                            </div>
                            <button>send</button>
                        </div>
                    </form>
                </div>
            </div>
            <div class="card-front"></div>
        </div>
    </div>
</template>

<style lang="scss">
body.no-scroll {
  overflow-y: hidden;
  overflow-x: hidden;
  min-height: 850px;
}
.contact-intro{
  position: absolute;
  top: 110px;
  right: 50%;
  transform: translateX(50%);
}

input#flap {
  display: none;
}

main-conatiner{
  position: relative;
}
.envelope-container {
  position: absolute;
  bottom: -10%;
  bottom: -22vh;
  right: 50%;
  transform: translateX(50%);
  box-sizing: border-box;
  transition: right .7s cubic-bezier(0.63, -0.21, 0.38, 1.14);
}
.envelope-back {
  position: relative;
  width: 800px;
  height: 500px;
  background-color: #5759a1;
}

.card {
  position: absolute;
  width:750px;
  height: 750px;
  background-color: whitesmoke;
  top:10px;
  left:25px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  font-size:15px;
  transition: .4s cubic-bezier(0.65, 0.05, 0.36, 1);
  color: var(--main-bkg-dark);
  z-index:4;
  transform: translateY(-400px)
}

.form-wrapper{
  height: 70%;
  width: 100%;
  padding: 2em;
  display: flex;
  flex-direction: column;

}

.form-wrapper input[type="email"]{
  border: none;
  border-bottom: 2px solid var(--main-bkg-dark);
  border-radius: 1px;
  background-color: whitesmoke;
  margin-bottom: 1em;
  font-family: inherit;
  width: 200px;
}
input[type="email"]:focus,
.form-wrapper textarea:focus,
.form-wrapper .send input[id="signature-form"]:focus{
  outline: none;

}

.form-wrapper textarea{
  height: 27vh;
  width: 100%;
  resize: none;
  border: none;
  background-color: whitesmoke;
  box-shadow: inset 0px 0px 5px -3px black;
  padding: .5em;
  margin-bottom: .5em;
  box-sizing: border-box;
  font-family: inherit;
}

.form-wrapper textarea:focus{
  background-color: #e8e8f7;
}

.form-wrapper .send{
  display: flex;
  justify-content: space-between;
}
.form-wrapper .send input[id="signature-form"]{
  border: none;
  border-bottom: 2px solid black;
  background-color: whitesmoke;
  font-family: inherit;
}

.form-wrapper .send button{
  padding: 10px 30px;
  font-size: 14px;
  background: var(--main-bkg-color);
  border:0;
  color: var(--main-text-color);
  letter-spacing: 1px;
  position: relative;
  transition:all .4s cubic-bezier(0.645, 0.045, 0.355, 1);
  cursor: pointer;
  display: block;
  border-radius: 5px;
  font-weight: bolder;
}

.form-wrapper .send button::after,
.form-wrapper .send button::before{
  content: "";
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);
    opacity: 0;
  transition: all .4s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.form-wrapper .send button::after{
    width: 15px;
    height: 2px;
    background: var(--main-text-color);
    transform: translateX(-3px);
    margin-top: 0px;
}

.form-wrapper .send button::before{
    content: "";
    transform: rotate(-135deg) translateX(50%);
    width: 8px;
    height: 8px;
    background: transparent;
    border-left: 2px solid var(--main-text-color);
    border-bottom: 2px solid var(--main-text-color);
  margin-top: -1px;
}

.form-wrapper .send button:hover{
  padding: 10px 40px 10px 20px;
}

.form-wrapper .send button:hover::after,
.form-wrapper .send button:hover::before{
  opacity: 1;
  right: 15px;
}

.card-front {
  position: absolute;
  width:0;
  height:0;
  border-bottom: 312.5px solid #6061af;
  border-left: 400px solid transparent;
  border-right: 400px solid transparent;
  top:312.5px;
  left:0;
  z-index:7;
}

.card-front:before, .card-front:after {
  content:"";
  position: absolute;
  border-bottom: 312.5px solid transparent;
  border-top: 312.5px solid transparent;
  height:0;
  width:0;
}

.card-front:before {
  border-left: 402.5px solid transparent;
  border-right: 402.5px solid #7273cf;
  top:-312.5px;
  left:-404px;
}

.card-front:after {
  border-right: 402.5px solid transparent;
  border-left: 402.5px solid #7273cf;
  top:-312.5px;
  left:-400px;
}

.flap {
  position: absolute;
  width:0;
  height:0;
  border-top: 343.75px solid #8d8ffc;
  border-left: 400px solid transparent;
  border-right: 400px solid transparent;
  top:0;
  left:0;
  transition: .6s;
  transform-origin: top;
  z-index:4;
  transform: rotateX(180deg);
}

.flap.close {
  transform: rotateX(0deg);

}

/* #flap:checked ~ .card-front {
  z-index:7;
} */

.card.close {
  transform: translateY(0px);
}

.envelope-container.slide{
  right: -50%;
  /* transform: translateX(200%); */
}

.envelope-container.send-right{
  right: 150%;
}

@media (max-width: 800px) {
  .envelope-container.slide{
    right: -100%;
    /* transform: translateX(200%); */
  }

  .envelope-container.send-right{
    right: 200%;
  }
}

@media screen and (max-width: 700px) {
  body.no-scroll{
    min-height: 100vh;
  }
  .contact-intro{
    top: 12vh;
  }
  .envelope-back {
  width: calc(800px / 2.05);
  height: calc(500px / 2);
  }
  .card {
  width: calc(750px / 2);
  height: calc(750px / 1.25);
  top:50px;
  left:12.5px;
  }
  .card-front{
    border-bottom: calc(312.5px / 2) solid #6061af;
    border-left: calc(400px / 2) solid transparent;
    border-right: calc(400px / 2) solid transparent;
    top: calc(312.5px / 2);
  }
  .card-front:before, .card-front:after {
    border-bottom: calc(312.5px / 2) solid transparent;
    border-top: calc(312.5px / 2) solid transparent;
  }
  .card-front:before {
    border-left: calc(402.5px / 2.1) solid transparent;
    border-right: calc(402.5px / 2) solid #7273cf;
    top:calc(-312.5px / 2);
    left:calc(-404px / 2);
  }
  .card-front:after {
    border-right: calc(402.5px / 2) solid transparent;
    border-left: calc(402.5px / 2) solid #7273cf;
    top: calc(-312.5px / 2);
    left: calc(-400px / 2);
  }
  .flap {
    border-top: calc(343.75px / 2) solid #8d8ffc;
    border-left: calc(400px / 2.07) solid transparent;
    border-right: calc(400px / 2) solid transparent;
  }
}
</style>

<script lang="ts">
import { doc } from '@firebase/firestore'
import emailjs from 'emailjs-com'
import $ from 'jquery'
export default {
  data: () => {
    return {
      name: '',
      email: '',
      message: ''
    }
  },
  methods: {
    // sendEmail(e: { target: string | HTMLFormElement; }){
    //     emailjs.sendForm('service_fg7iw5d', 'template_vpcrtor', e.target, '7OjaYnu6LRvIPrAVl')
    //     .then(function() {
    //         setTimeout(function(){
    //             slideFromLeft()
    //             $(".contact-intro").text("Success!")
    //         }, 1000)
    //     }, function(error) {
    //         console.log('FAILED...', error);
    //         $(".contact-intro").text("There was an error!")
    //         slideBackFromRight()
    //     });
    // }
  },
  beforeUnmount () {
    document.body.classList.remove('no-scroll')
  },
  mounted () {
    document.body.classList.add('no-scroll')
    document.getElementById('email-form')?.addEventListener('submit', function (event) {
      event.preventDefault()
      $('.contact-intro').text('Sending...')
      slideRight()

      emailjs.sendForm('service_fg7iw5d', 'template_vpcrtor', '#email-form')
        .then(function () {
          setTimeout(function () {
            slideFromLeft()
            $('.contact-intro').text('Success!')
          }, 1000)
        }, function (error) {
          console.log('FAILED...', error)
          $('.contact-intro').text('There was an error!')
          slideBackFromRight()
        })
    })
    function slideRight () {
      // send form down
      document.querySelector('.card')?.classList.add('close')
      // change form z-index
      setTimeout(function () {
        $('.card').css('z-index', 1)
        // close envelope
        $('.flap').addClass('close')
        setTimeout(function () {
          // push envelope to the side.
          $('.envelope-container').addClass('slide')
          // $(".envelope-container").on('transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd',
        }, 500)
      }, 500)
    }

    function slideFromLeft () {
      const emailForm = document.getElementById('email-form') as HTMLFormElement | null
      emailForm?.reset()
      $('.envelope-container').css('display', 'none')
      $('.envelope-container').addClass('send-right')
      setTimeout(function () {
        $('.envelope-container').css('display', 'block')
        $('.envelope-container').removeClass('slide')
        setTimeout(function () {
          $('.envelope-container').removeClass('send-right')
          $('.envelope-container').removeAttr('style')
          setTimeout(function () {
            $('.flap').removeClass('close')
            $('.card').css('z-index', 7)
            setTimeout(function () {
              $('.card').removeClass('close')
            }, 500)
          }, 500)
        }, 500)
      }, 500)
    }

    function slideBackFromRight () {
      // push envelope to the side.
      $('.envelope-container').removeClass('slide')
      // change form z-index
      setTimeout(function () {
        // open envelope
        $('.flap').removeClass('close')

        $('.card').css('z-index', 7)

        setTimeout(function () {
          // send form up
          document.querySelector('.card')?.classList.remove('close')
        }, 500)
      }, 500)
    }
  }
}
</script>
