<template>
    <div v-if="!store.state.sophia.isSophia">
        <sophia-login @login-success="logIn"></sophia-login>
    </div>
    <div v-if="store.state.sophia.isSophia">
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

<script setup lang="ts">
import store from '@/store'
</script>

<script lang="ts">
import FetchData from '@/components/FetchData.vue'
import SkeletonLoaderVue from '@/components/SkeletonLoader.vue'
import FooterMenuVue from '@/components/FooterMenu.vue'
import sophiaLogin from '@/components/notSoSecretPages/SophiaLogin.vue'
import sophiaComponent from '@/components/notSoSecretPages/SophiaComponent.vue'
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
    console.log(store.state.sophia.isSophia)
  },
  methods: {
    logOut () {
      store.commit('sophia/removeSophia')
      console.log(store.state.sophia.isSophia)
      console.log('logged out')
      this.$forceUpdate()
    },
    logIn () {
      store.commit('sophia/setSophia')
      console.log('logged in')
      this.$forceUpdate()
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
