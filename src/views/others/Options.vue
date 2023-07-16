<script>
  import { useRouter } from 'vue-router'
  export default {
    name: 'Options',
    setup() {
      const router = useRouter()
      return { router }
    }
  }
</script>

<template>
  <h1 class="head">OPTIONS</h1>
  <div>
    <h1>This features is not implemented yet...</h1>
  </div>

  <button @click="router.back()">Back</button>
</template>

<style lang="scss" scoped>
  @use '../../assets/scss/utilities/' as *;

  .head {
    width: 100%;
    border: 1px solid var(--clr-neutral-w);
    padding-block: rem(12);
    border-radius: rem(8);
  }
  h1 {
    text-align: center;
  }
</style>