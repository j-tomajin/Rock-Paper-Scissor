<script setup>
  import { useRouter, RouterLink, RouterView } from 'vue-router'
  import { useGameStore } from '../store/GameStore'
  import { storeToRefs } from 'pinia';

  // components
  import Header from '../components/Header.vue'

  // icons
  import rock from '../assets/images/icon-rock.svg'
  import paper from '../assets/images/icon-paper.svg'
  import scissor from '../assets/images/icon-scissors.svg'
  import triangle from '../assets/images/bg-triangle.svg'
  
  const gameStore = useGameStore()

  const { classicGame } = gameStore

  const router = useRouter()
</script>

<template>
  <Header />
  
  <RouterView />
  <div class="box">
    <button @click="router.back()" class="-gbtn">
      <i class="fa-solid fa-arrow-left"></i>
    </button>

    <!-- Rock Paper Scissor Buttons -->
    <div class="game">
      <img :src="triangle" alt="triangle background" class="triangle">

      <!-- PAPER -->
      <router-link to="/rock-paper-scissor/result">
        <button class="btn paper" @click="classicGame('paper')">
          <div class="wrapper">
            <img :src="paper" alt="">
          </div>
        </button>
      </router-link>
      
      <!-- SCISSOR -->
      <router-link to="/rock-paper-scissor/result">
        <button class="btn scissor" @click="classicGame('scissor')">
          <div class="wrapper">
            <img :src="scissor" alt="">
          </div>
        </button>
      </router-link>
      
      <!-- ROCK -->
      <router-link to="/rock-paper-scissor/result">
        <button class="btn rock" @click="classicGame('rock')">
          <div class="wrapper">
            <img :src="rock" alt="">
          </div>
        </button>
      </router-link>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '../assets/scss/utilities/' as *;

  .-gbtn {
    font-size: rem(24);
    margin-right: auto;
  }
  
  .box {
    max-width: rem(800);
    margin-inline: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
  }

  .game {
    position: relative;
    padding-block: rem(100);
    width: min(100%, rem(300));

    .triangle {
      width: 100%;
      margin: auto;
    }
  }

  .btn {
    position: absolute;

    width: clampf(100, 375, 780, 115);
    height: clampf(100, 375, 780, 115);
    border-radius: 50%;

    .wrapper {
      width: clampf(75, 375, 780, 90);
      height: clampf(75, 375, 780, 90);
      border-radius: 50%;
      background-color: var(--clr-neutral-w);
      margin-inline: auto;

      display: flex;
      align-items: center;
      justify-content: center;
    }
    img {
      width: 50%;
    }
  }

  .rock {
    background-image: var(--clr-primary-rock);
    // top: 50%;
    top: 55%;
    left: 50%;
    translate: -50%;
  }
  .paper {
    background-image: var(--clr-primary-paper);
    top: 15%;
  }
  .scissor {
    background-image: var(--clr-primary-scissor);
    top: 15%;
    right: 0;
  }
</style>