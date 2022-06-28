<template>
  <div>
    ------------------------------<br>
    | resume goes here |<br>
    ------------------------------
  </div>
</template>
<script lang="ts">
export default {
  created () {
    document.title = 'Resume | LF'
  }
}
</script>
<style scoped lang="scss">
div{
  position: absolute;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
}
</style>
