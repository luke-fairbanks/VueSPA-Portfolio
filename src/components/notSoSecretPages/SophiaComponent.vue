<template>
    <!-- <keep-alive>
        <Teleport to=".link-wrapper">
            <div class="log-out-wrapper">
                <button @click="$emit('logOut')" id="logOut"><i class="fas fa-sign-out-alt"></i></button>
            </div>
        </Teleport>
    </keep-alive> -->
    <div class="hey-container">
        <span>Hey Sophs.<div class="hand-wave">👋</div></span>
        <span>(good job)</span>
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
.hey-container{
    display: flex;
    // justify-content: space-between;
    justify-content: center;
    padding-inline: 3em;
    padding-right: 4em;
    align-items: flex-start;
    margin-bottom: 1em;
    height: 50vh;
    flex-direction: column;
    span:first-of-type{
        // font-size: 1.1em;
        font-size: clamp(2em, 8vw, 7em);
        font-weight: bold;
        display: flex;
        align-items: center;
        text-shadow: 3px 3px var(--main-accent);
        .hand-wave {
            font-size: 1.3em;
            animation-name: wave-animation;  /* Refers to the name of your @keyframes element below */
            animation-duration: 2.5s;        /* Change to speed up or slow down */
            animation-iteration-count: infinite;  /* Never stop waving :) */
            transform-origin: 70% 70%;       /* Pivot around the bottom-left palm */
            display: inline-block;
            text-shadow: 3px 3px var(--main-contrast);

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
    span:last-of-type{
        font-size: clamp(.8em, 2vw, 1.5em);
    }
}
.log-out-wrapper{
    display: flex;
    justify-content: flex-start;
    // padding-inline: 4em;
    #logOut{
        font-size: clamp(.4em, 2vw, .7em);
        font-weight: bold;
        color: crimson;
        background-color: var(--main-light-color);
        border: none;
        padding: 0.5em;
        padding-inline: 1em;
        border-radius: 0.5em;
        cursor: pointer;
        transition: all 0.5s ease-in-out;
        position: relative;
        &:hover{
            color: var(--main-light-color);
            background-color: crimson;
        }
        &::before{
            content:'';
            display:block;
            width:0;
            height:0;
            position:absolute;

            border-top: clamp(8px, 3vw, 20px) solid transparent;
            border-bottom: clamp(8px, 3vw, 20px) solid transparent;
            border-right: clamp(8px, 3vw, 20px) solid var(--main-bkg-color);
            left:110%;

            top: 50%;
            transform: translateY(-50%);
        }
        &:after{
            content: 'special soph log out';
            position: absolute;
            top: 0;
            left: 110%;
            height: 100%;
            background-color: var(--main-bkg-color);
            width: max-content;
            transition: all 0.5s ease-in-out;
            color: var(--main-light-color);
            display: flex;
            align-items: center;
            padding-inline: 0.5em;
            border-radius: 0.5em;
            margin-left: 10px;
        }
    }
}
// center title horizontally
.title{
    text-align: center;
    font-size: clamp(1em, 3vw, 1.5em);
    font-weight: bold;
    color: var(--main-text-color);
    text-decoration: underline;
    text-underline-offset: 8px;
    text-decoration-thickness: 3px;
    text-decoration-color: var(--main-accent);
    margin-bottom: 8px;
}

</style>
