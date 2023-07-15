<script setup>
  import rps from '../assets/images/logo.svg'
  import rpsls from '../assets/images/logo-bonus.svg'
  import { storeToRefs } from 'pinia'
  import { useGameStore } from '../store/GameStore';

  const gameStore = useGameStore()

  const { gamemode, score } = storeToRefs(gameStore)
</script>

<template>
  <header class="header">
    <img :src="[gamemode === 'classic' ? rps : rpsls]" alt="logo">

    <div class="score-field">
      <h3>SCORE</h3>
      <p class="score">{{ score }}</p>
    </div>
  </header>
</template>

<style lang="scss" scoped>
  @use '../assets/scss/utilities/' as *;

  .header {
    max-width: rem(600);
    margin: {
      inline: auto;
      bottom: rem(64);
    };
    border: 2px solid var(--clr-neutral-header-outline);
    border-radius: rem(12);
    padding: rem(16);
    display: flex;
    justify-content: space-between;
  }

  .score-field {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-inline: rem(32);
    background-color: #333;
    border-radius: rem(12);
    background-color: var(--clr-neutral-w);

    h3 {
      color: var(--clr-neutral-score);
      letter-spacing: 2px;
    }
    
    .score {
      font-size: clampf(48, 375, 780, 64);
      color: var(--clr-neutral-text);
    }
  }
</style>