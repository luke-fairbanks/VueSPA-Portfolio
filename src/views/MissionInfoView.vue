<template>
<div class="main">
    <h3>
        I am currently serving a mission for the <a target="_blank" href="https://www.churchofjesuschrist.org/comeuntochrist">Church of Jesus Christ of Latter Day Saints</a> in the <span>Costa Rica San José East Mission</span>.
    </h3>
    <span class="message">If your name is SGL, press <router-link to="/sophia" class="link">here</router-link></span>
</div>
</template>

<style lang="scss" scoped>
// center main in the screen

.main{
   // center the main content in the screen
    position: relative;
    h3{
        max-width: 500px;
        text-align: center;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        span{
                color: var(--main-contrast);
                text-shadow: var(--main-light-color) .5px .5px;
                margin-bottom: 0px;
        }
        a{
            color: var(--main-accent);
            text-decoration-color: lighten(#7B7DE0, 10%);
            text-decoration-thickness: 2px;
        }
    }
   // pin message to bottom of screen
    .message{
        position: fixed;
        bottom: 10px;
        left: 0;
        right: 0;
        margin: auto;
        text-align: center;
        color: var(--main-light-color);
        margin-bottom: 0px;
        font-size: 1em;
        .link{
            color: var(--main-accent);
            text-decoration-color: lighten(#7B7DE0, 10%);
            text-decoration-thickness: 2px;
            transition: .3s ease;
            &:hover{
              text-underline-offset: 2px;
            }
        }
    }
}

</style>

<script lang="ts">
export default {
  created () {
    document.title = 'My Mission | LF'
  }
}
</script>
