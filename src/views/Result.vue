<script setup>
  import { useGameStore } from '../store/GameStore';
  import { storeToRefs } from 'pinia'
  import { useRouter, RouterLink } from 'vue-router'

  import Button from '../components/Button.vue';
  import Header from '../components/Header.vue'

  // icons 
  import rock from '../assets/images/icon-rock.svg'
  import paper from '../assets/images/icon-paper.svg'
  import scissor from '../assets/images/icon-scissors.svg'

  const gameStore = useGameStore()

  const { player, opponent, isWinner } = storeToRefs(gameStore)

  const router = useRouter()
</script>

<template>
  <Header />
  <section class="result">

    <div class="result-player">

      <div class="picked rock flex" v-if="player === 'rock'">
        <div class="wrapper flex">
          <img :src="rock" alt="hand-rock icon">
        </div>
      </div>

      <div class="picked paper flex" v-else-if="player === 'paper'">
        <div class="wrapper flex">
          <img :src="paper" alt="hand-paper icon">
        </div>
      </div>

      <div class="picked scissor flex" v-else-if="player === 'scissor'">
        <div class="wrapper flex">
          <img :src="scissor" alt="hand-scissor icon">
        </div>
      </div>

      <h1 class="picked-text">You Picked</h1>
    </div>

    <div class="result-opponent">
      
      <div class="image">
        <div class="circle"><i class="fa-solid fa-circle"></i></div>
        <div class="picked rock flex anim" v-if="opponent === 'rock'">
          <div class="wrapper flex">
            <img :src="rock" alt="hand-rock icon">
          </div>
        </div>
        
        <div class="picked paper flex anim" v-else-if="opponent === 'paper'">
          <div class="wrapper flex">
            <img :src="paper" alt="hand-paper icon">
          </div>
        </div>
        
        <div class="picked scissor flex anim" v-else-if="opponent === 'scissor'">
          <div class="wrapper flex">
            <img :src="scissor" alt="hand-scissor icon">
          </div>
        </div>
      </div>
      <h1 class="picked-text">Your Opponent Picked</h1>
    </div>

    <div class="result-text">
      <div class="text-anim">
        <h1 v-if="isWinner === true">You Win</h1>
        <h1 v-else-if="isWinner === false">
          Game Over
        </h1>
        <h1 v-else-if="isWinner === ''">Draw</h1>
  
        
        <Button 
          v-if="isWinner === true || isWinner === ''"
          msg="Play Again" 
          bg_color="var(--clr-neutral-w)"
          @btn-click="router.back()"
          class="btn"
        />
        <router-link :to="{name: 'home'}" v-else-if="isWinner === false">
          <Button 
            msg="Main Menu"
            bg_color="var(--clr-neutral-w)"
            class="btn"
          />
        </router-link>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  @use '../assets/scss/utilities/' as *;

  .image {
    position: relative;
  }
  .circle {
    z-index: 0;
    font-size: rem(128);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    
    i {
      color: var(--clr-neutral-text);
    }
  }

  h1 {
    font-weight: 700;
    text-transform: uppercase;
  }

  .result-text {
    h1 {
      font-size: rem(48);
      margin-bottom: rem(16);
    }
  }

  .btn {
    padding: rem(12) 0;
    width: 50%;
    border-radius: rem(6);
    text-transform: uppercase;
    color: var(--clr-neutral-text);
  }

  .result {
    // temp
    // outline: white 1px solid;

    display: grid;
    grid-template-columns: repeat(2, 1fr);
    place-items: center;
    text-align: center;

    &-player {
      grid-column: 1 / 2;
    }

    &-opponent {
      grid-column: 2 / 3;
      position: relative;
    }

    &-text {
      grid-column: 1 / 3;
      overflow: hidden;
      height: 120px;
      width: 100%;
      padding-top: rem(10);
    }
  }

  .flex {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-inline: auto;
  }
  
  .picked {
    width: clampf(150, 375, 780, 175);
    height: clampf(150, 375, 780, 175);
    border-radius: 50%;

    .wrapper {
      width: clampf(115, 375, 780, 140);
      height: clampf(115, 375, 780, 140);
      border-radius: 50%;
      background-color: var(--clr-neutral-w);
    }
    img {
      width: 50%;
    }

    &-text {
      font-size: clampf(16, 375, 780, 32);
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