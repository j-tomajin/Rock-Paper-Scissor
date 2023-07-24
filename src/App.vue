<script>
  import { RouterView } from 'vue-router'
  import { useGameStore } from './store/GameStore';

  export default {
    setup() {
      const gameStore = useGameStore()

      const { getValue, setValue } = gameStore

      return { getValue, setValue }
    },
    created() {
      this.setValue()
    }
  }
</script>

<template>
  <main class="main">
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
  </main>
</template>

<style lang="scss" scoped>
  @use './assets/scss/utilities/' as *;
  .main {
    width: min(calc(100% - 32px), rem(1000));
    margin-inline: auto;
    padding: rem(32) 0;
  }
</style>