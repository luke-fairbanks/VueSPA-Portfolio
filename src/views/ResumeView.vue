<template>
  <div>
    <a class="page-link" href="https://github.com/luke-fairbanks" target="_blank">my github</a>
  </div>
</template>
<script lang="ts">
export default {
  created () {
    document.title = 'Resume | LF'
  },
  mounted () {
    document.querySelectorAll('a').forEach(elem => {
      elem.style.setProperty('--skew', '0deg')
      elem.onmouseenter =
    elem.onmouseleave = e => {
      const tolerance = 10

      const left = 0
      const right = elem.clientWidth

      let x = e.pageX - elem.offsetLeft
      let skew = 0

      if (x - tolerance < left) x = left
      if (x + tolerance > right) x = right

      if (x - tolerance < left) skew = -5
      else if (x + tolerance > right) skew = 5

      elem.style.setProperty('--x', `${x}px`)
      elem.style.setProperty('--skew', `${skew}deg`)
    }
    })
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
  z-index: 0;
  a {
    color: var(--main-light-color);
    font-size: 1.5em;
    position: relative;
    border-bottom: 2px solid var(--main-accent);
    text-decoration: none;
    &::after {
    --scale: 0;
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 10%;
    height: 90%;
    z-index: 0;
    opacity: .7;
    // background: linear-gradient(135deg, rgb(115, 250, 200), rgb(0, 190, 225));
    background: linear-gradient(45deg, var(--main-contrast), var(--main-accent));
    transform: scaleX(var(--scale)) skew(var(--skew));
    transform-origin: var(--x) 50%;
    transition: transform .3s cubic-bezier(.51, .92, .24, 1);
    }

    &:hover {
      opacity: 1;
    }

    &:hover::after {
      --scale: 1;
    }
  }
}
</style>
