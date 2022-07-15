<template>
    <div class="container">
        <span>Hey Soph<div class="hand-wave">👋</div></span>
        <button @click="$emit('logOut')" id="logOut"><i class="fas fa-sign-out-alt"></i></button>
    </div>
    <div class="title">Here are some of my favorite memories</div>
</template>
<script setup lang="ts">
import { defineEmits, onMounted } from 'vue'
import store from '@/store'
document.getElementById('logOut')?.addEventListener('click', () => {
  store.commit('sophia/removeSophia')
  console.log('logged out')
})
defineEmits(['logOut'])

onMounted(() => {
  document.querySelector('.hand-wave')?.classList.add('animate')
})
</script>
<style scoped lang="scss">
// center logout in the screen
.container{
    display: flex;
    justify-content: space-between;
    padding-inline: 3em;
    padding-right: 4em;
    align-items: center;
    margin-bottom: 1em;
    span{
        font-size: 1.1em;
        font-weight: bold;
        display: flex;
        align-items: center;
        .hand-wave {
            font-size: 1.3em;
            animation-name: wave-animation;  /* Refers to the name of your @keyframes element below */
            animation-duration: 2.5s;        /* Change to speed up or slow down */
            animation-iteration-count: infinite;  /* Never stop waving :) */
            transform-origin: 70% 70%;       /* Pivot around the bottom-left palm */
            display: inline-block;

            @keyframes wave-animation {
                0% { transform: rotate( 0.0deg) }
                10% { transform: rotate(14.0deg) }  /* The following five values can be played with to make the waving more or less extreme */
                20% { transform: rotate(-8.0deg) }
                30% { transform: rotate(14.0deg) }
                40% { transform: rotate(-4.0deg) }
                50% { transform: rotate(10.0deg) }
                60% { transform: rotate( 0.0deg) }  /* Reset for the last half to pause */
                100% { transform: rotate( 0.0deg) }
            }
        }
    }
    #logOut{
        font-size: 1em;
        font-weight: bold;
        color: crimson;
        background-color: var(--main-light-color);
        border: none;
        padding: 0.5em;
        padding-inline: 1em;
        border-radius: 0.5em;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
        &:hover{
            color: var(--main-light-color);
            background-color: crimson;
        }
    }
}
// center title horizontally
.title{
    text-align: center;
    font-size: 1.25em;
    font-weight: bold;
    color: var(--main-text-color);
    text-decoration: underline;
    text-underline-offset: 8px;
    text-decoration-color: var(--main-accent);
    margin-bottom: 3px;
}

</style>
