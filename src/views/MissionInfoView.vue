<template>
<div class="main">
    <h3>
        I am currently serving a mission for the <a target="_blank" href="https://www.churchofjesuschrist.org/comeuntochrist">Church of Jesus Christ of Latter Day Saints</a> in the <span>Costa Rica San José East Mission</span>.
    </h3>
</div>
</template>

<style lang="scss" scoped>
.main{
    height: 75vh;
   width: 50%;
   max-width: 500px;
   margin-inline: auto;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   position: absolute;
   margin: auto;
   right: 0; left: 0; top: 0; bottom: 0;
   h3{
       text-align: center;

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
}

</style>

<script lang="ts">
export default {
  created () {
    document.title = 'My Mission | LF'
  }
}
</script>
