<script>
import { useRouter } from 'vue-router'
export default {
  name: 'Rules',
  setup() {
    const router = useRouter()
    return { router }
  }
}
</script>

<template>
  <h1 class="head">RULES</h1>
  <button @click="router.back()" class="-gbtn">Back</button>

  <div>
    <h1>This feature is not implemented yet...</h1>
  </div>
</template>

<style lang="scss" scoped>
  @use '../../assets/scss/utilities/' as *;

  .head {
    width: 100%;
    border: 1px solid var(--clr-neutral-w);
    padding-block: rem(12);
    border-radius: rem(8);
  }

  button {
    margin-top: rem(16);
  }

  h1 {
    text-align: center;
  }
</style>