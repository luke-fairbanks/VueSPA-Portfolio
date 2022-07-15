<template>
    <div v-if="!$store.getters['sophia/isSophia']">
        <sophia-login @login-success="logIn"></sophia-login>
    </div>
    <div v-if="$store.getters['sophia/isSophia']">
        <sophia-component @log-out="logOut"></sophia-component>
        <Suspense>
            <template #fallback>
                <SkeletonLoaderVue></SkeletonLoaderVue>
            </template>
            <FetchData doc="sophia"></FetchData>
        </Suspense>
        <div class="closing-text">
          <span style=" ">Thank you for everything sophs.<br>I am looking forward to the future with you.</span>

        </div>
        <FooterMenuVue></FooterMenuVue>
    </div>
</template>

<script lang="ts">
import FetchData from '@/components/FetchData.vue'
import SkeletonLoaderVue from '@/components/SkeletonLoader.vue'
import FooterMenuVue from '@/components/FooterMenu.vue'
import sophiaLogin from '@/components/notSoSecretPages/SophiaLogin.vue'
import sophiaComponent from '@/components/notSoSecretPages/SophiaComponent.vue'
import store from '@/store'
export default {
  components: {
    FetchData,
    SkeletonLoaderVue,
    FooterMenuVue,
    sophiaLogin,
    sophiaComponent
  },
  created () {
    document.title = 'Sophia'
    console.log(store.getters['sophia/isSophia'])
  },
  methods: {
    logOut () {
      store.commit('sophia/removeSophia')
      console.log(store.getters['sophia/isSophia'])
      console.log('logged out')
    },
    logIn () {
      store.commit('sophia/setSophia')
      console.log('logged in')
      // create a div that will go at the top right of the screen
      const div = document.createElement('div')
      div.classList.add('logout-tooltip')
      div.innerHTML = 'you can log out here <i class="fas fa-level-up-alt"></i>'
      document.body.appendChild(div)
      setTimeout(() => {
        div.remove()
      }, 10000)
    }
  },
  mounted () {
    document.querySelector('#app')?.classList.add('overflow-x-hidden')
  },
  unmounted () {
    document.querySelector('#app')?.classList.remove('overflow-x-hidden')
  }
}

</script>
<style lang="scss">
.closing-text{
  text-align:center;
  width: fit-content;
  margin-inline: auto;
  padding: 2em;
  margin-block: 1em;
  border: 2px solid var(--main-accent);
  border-radius: 5px;

}
.logout-tooltip{
  position: absolute;
  top: 7em;
  right: 5em;
  i{
    animation: toUp 1s ease-out infinite;
    -webkit-animation: toUp 1s ease-out infinite;
    -moz-animation: toUp 1s ease-out infinite;
    @keyframes toUp {
      0% {
        transform: translateY(0);
      }
      50% {
        transform: translateY(-8px);
      }
      100% {
        transform: translateY(0);
      }
    }
  }
}
</style>
