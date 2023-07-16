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
  
  <div class="box">

    <!-- Rock Paper Scissor Buttons -->
    <div class="game">
      <button @click="router.back()" class="-gbtn">
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      <img :src="triangle" alt="triangle background" class="triangle">

      <!-- PAPER -->
      <router-link :to="{name: 'result'}" class="game-paper btn-paper-anim">
        <button class="btn paper" @click="classicGame('paper')">
          <div class="wrapper">
            <img :src="paper" alt="">
          </div>
        </button>
      </router-link>
      
      <!-- SCISSOR -->
      <router-link :to="{name: 'result'}" class="game-scissor btn-scissor-anim">
        <button class="btn scissor" @click="classicGame('scissor')">
          <div class="wrapper">
            <img :src="scissor" alt="">
          </div>
        </button>
      </router-link>
      
      <!-- ROCK -->
      <router-link :to="{name: 'result'}" class="game-rock btn-rock-anim">
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
    position: absolute;
    top: -10%;
    left: clampf(0, 550, 780, -50);
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

    width: min(100%, 500px);
    margin-inline: auto;
    display: grid;
    place-content: center;
    grid-template-columns: repeat(2, 1fr);

    &-paper {
      // padding-bottom: 50px;
      // margin-left: auto;
    }
    &-scissor {
      // margin-inline-start: auto;
      // padding-bottom: 50px;
    }
    &-rock {
      grid-column: 1 / 3;
      margin-inline: auto
    }

    .triangle {
      position: absolute;
      width: 80%;
      top: 10%;
      z-index: -1;
      left: 50%;
      translate: -50%;
    }
  }

  .btn {
    // position: absolute;

    width: clampf(130, 375, 780, 155);
    height: clampf(130, 375, 780, 155);
    border-radius: 50%;

    .wrapper {
      width: clampf(90, 375, 780, 115);
      height: clampf(90, 375, 780, 115);
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
  }
  .paper {
    background-image: var(--clr-primary-paper);
  }
  .scissor {
    background-image: var(--clr-primary-scissor);
  }
</style>