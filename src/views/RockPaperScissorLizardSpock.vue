<script>
  import { useRouter } from 'vue-router'
  import Header from '../components/Header.vue'

  export default {
    name: 'RockPaperScissorLizardSpock',
    components: { Header },
    setup() {
      const router = useRouter()
      return { router }
    }
  }
</script>

<template>
  <div>
    <Header />
    <button @click="router.back()" class="-gbtn">
      <i class="fa-solid fa-arrow-left"></i>
    </button>
    <h1>RockPaperScissorLizardSpock</h1>
  </div>
</template>

<style lang="scss" scoped>
  @use '../assets/scss/utilities/' as *;

  .-gbtn {
    font-size: rem(24);
  }
</style>