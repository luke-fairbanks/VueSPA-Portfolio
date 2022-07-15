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
