<template>
<div class="form-wrapper">
    <form @submit.prevent="checkPass" id="form">
        <label for="password">What do I call you?</label>
        <div class="password-wrapper">
            <input type="password" name="password" placeholder="" required />
            <button type="submit" class="confetti-btn"><i class="fas fa-arrow-right"></i></button>
        </div>
    </form>
    <div class="clue">
        <p>Since before day one.</p>
    </div>
    <Teleport to="body">
        <div class="confetti-origin"></div>
    </Teleport>
</div>
</template>
<script setup lang="ts">
import { defineEmits, onMounted } from 'vue'
import party from 'party-js'

const emit = defineEmits(['loginSuccess'])

let checkCount = 0
function checkPass () {
  const form = document.getElementById('form') as HTMLFormElement
  const password = form.password.value
  const btn = document.querySelector('.confetti-btn') as HTMLElement
  if (password === 'sophs') {
    btn.style.color = '#00ff00'
    btn.innerHTML = '<i class="fas fa-check"></i>'
    party.confetti(document.querySelector('.confetti-origin') as HTMLElement, {
      count: party.variation.range(50, 60)
    })
    setTimeout(() => {
      emit('loginSuccess')
      btn.innerHTML = '<i class="fas fa-arrow-right"></i>'
      btn.removeAttribute('style')
    }, 500)
  } else {
    btn.style.color = 'crimson'
    btn.innerHTML = '<i class="fas fa-times"></i>'
    setTimeout(() => {
      btn.removeAttribute('style')
      btn.innerHTML = '<i class="fas fa-arrow-right"></i>'
    }, 1000)
    checkCount++
    if (checkCount === 1) {
      const hint = document.querySelector('.clue') as HTMLDivElement
      hint.style.visibility = 'visible'
    }
    if (checkCount === 15) {
      const hint = document.querySelector('.clue') as HTMLDivElement
      hint.innerHTML = '<p>Just email me at this point.</p>'
    }
  }
}
onMounted(() => {
  const confettiOrigin = document.querySelector('.confetti-origin') as HTMLElement
  const confettiBtn = document.querySelector('.confetti-btn') as HTMLElement
  // position confetti origin on top on the button
  const bodyRect = document.body.getBoundingClientRect()
  const elemRect = confettiBtn.getBoundingClientRect()
  const offsetTop = elemRect.top - bodyRect.top
  const offsetLeft = elemRect.left - bodyRect.left
  confettiOrigin.style.top = `${offsetTop}px`
  confettiOrigin.style.left = `${offsetLeft}px`
  window.addEventListener('resize', () => {
    const bodyRect = document.body.getBoundingClientRect()
    const elemRect = confettiBtn.getBoundingClientRect()
    confettiOrigin.style.top = `${elemRect.top - bodyRect.top}px`
    confettiOrigin.style.left = `${elemRect.left - bodyRect.left}px`
  })
})
</script>
<style scoped lang="scss">
// center form in the screen
.form-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    .password-wrapper{
        position: relative;
        display: flex;
        align-items: center;
        input[type='password']{
            border: none;
            border-bottom: 1px solid var(--main-light-color);
            background: transparent;
            padding: .5em;
            color: var(--main-light-color);
            border-radius: 2px;
            &:focus{
                outline: none;
                background-color: var(--main-bkg-dark);
            }
        }
        .confetti-btn{
            border: none;
            background: none;
            font-size: 1.5em;
            cursor: pointer;
            color: var(--main-accent);
            width: 30px;
        }
    }
    .clue {
        visibility: hidden;
        font-size: .9em;
        color: var(--main-light-color);
    }
}
.confetti-origin {
    position: absolute;
    height: 15px;
    width: 15px;
}
</style>
