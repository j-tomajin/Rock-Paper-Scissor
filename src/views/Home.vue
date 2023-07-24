<script setup>
  import { RouterLink, useRouter } from 'vue-router'
  import { storeToRefs } from 'pinia'
  import { useGameStore } from '../store/GameStore'
  
  import rps from '../assets/images/logo.svg'
  import rpsls from '../assets/images/logo-bonus.svg'
  import lizard from '../assets/images/lizard.svg'

  const gameStore = useGameStore()
 
  const { gamemode } = storeToRefs(gameStore)
  const { setGameMode, highScoreSort } = gameStore
</script>

<template>
  <div class="main">
    <h1>Main Menu</h1>
    <div class="game">

      <!-- CLASSIC -->
      <router-link :to="{name: 'rock-paper-scissor'}" class="mode">
        <button class="btn" @click="setGameMode('classic')">
          <img :src="rps" alt="text='rock-paper-scissor'">
          <div class="text">
            <h2 class="head">CLASSIC</h2>
            <div class="icons">
              <i class="fa-solid fa-hand-back-fist"></i>
              <i class="fa-solid fa-hand"></i>
              <i class="fa-solid fa-hand-peace"></i>
            </div>
          </div>
        </button>
      </router-link>

      <!-- SPECIAL -->
      <router-link :to="{name: 'bonus'}" class="mode">
        <button class="btn" @click="setGameMode('special')">
          <img :src="rpsls" alt="text='rock-paper-scissor-lizard-spock'">
          <div class="text">
            <h2 class="head">SPECIAL</h2>
            <div class="icons">
              <i class="fa-solid fa-hand-back-fist"></i>
              <i class="fa-solid fa-hand"></i>
              <i class="fa-solid fa-hand-peace"></i>
              <img :src="lizard" alt="lizard" class="lizard">
              <i class="fa-solid fa-hand-spock spock"></i>
            </div>
          </div>
        </button>
      </router-link>
    </div>
    
    <div class="others">
      <!-- LEADERBOARD -->
      <router-link :to="{name: 'leaderboard'}">
        <button @click="highScoreSort(), setGameMode('all')">
          <h1>Leaderboard</h1>
        </button>
      </router-link>
  
      <!-- RULES -->
      <router-link to="/rules">
        <button>
          <h1>Rules</h1>
        </button>
      </router-link>
  
      <!-- OPTIONS -->
      <router-link to="/options">
        <button>
          <h1>Options</h1>
        </button>
      </router-link>
    </div>
      <!-- LEADERBOARD -->
  </div>
</template>

<style lang="scss" scoped>
  @use '../assets/scss/utilities/' as *;

  .main {
    max-width: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: rem(70);
    text-align: center;
  }

  .others {
    display: grid;
    grid-template-columns: 1fr;
    gap: rem(16);
    width: 50%;
    margin-inline: auto;

    button {
      width: 100%;
      background-color: transparent;
      color: var(--clr-neutral-w);

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .game {
    display: grid;
    grid-template-columns: 1;
    gap: rem(50);
  }

  .mode {
    
    button {
      width: 100%;
      height: rem(150);
      padding-inline: clampf(24, 375, 780, 48);
      background-color: transparent;
      outline: 1px solid var(--clr-neutral-header-outline);
      border-radius: rem(8);
      color: var(--clr-neutral-w);

      img {
        margin-block: auto;
      }
    }

    &:hover button {
      background-image: var(--clr-primary-rock);
    }
    &:hover:last-child button {
      background-image: var(--clr-primary-scissor);
    }
  }

  .btn {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .text {
    font-size: rem(24);
    line-height: 1;

    img {
      width: rem(24);
    }
    .icons {
      font-size: rem(24);
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: rem(10);

      .lizard {
        grid-column: 1 / 3;
      }
      .spock {
        grid-column: 3 / 4;
      }
    }
  }
</style>