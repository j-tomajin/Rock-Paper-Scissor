<script>
export default {
  name: 'Leaderboard',
}
</script>

<template>
  <h1 class="head">LEADERBOARD</h1>
  <router-link :to="{name: 'home'}">
    <button class="-gbtn">Back</button>
  </router-link>

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