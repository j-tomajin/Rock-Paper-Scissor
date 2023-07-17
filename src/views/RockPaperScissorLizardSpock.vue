<script setup>
  import { useRouter } from 'vue-router'
  import { useGameStore } from '../store/GameStore'
  import Header from '../components/Header.vue'

  // icons
  import rock from '../assets/images/icon-rock.svg'
  import paper from '../assets/images/icon-paper.svg'
  import scissor from '../assets/images/icon-scissors.svg'
  import lizard from '../assets/images/icon-lizard.svg'
  import spock from '../assets/images/icon-spock.svg'
  import pentagon from '../assets/images/bg-pentagon.svg'
  // close
  import close from '../assets/images/icon-close.svg'
  // rules
  import rpsRules from '../assets/images/image-rules-bonus.svg'

  const router = useRouter()

  const gameStore = useGameStore()

  const { specialGame } = gameStore
</script>

<template>
  <div>
    <Header />
    <!-- <button @click="router.back()" class="-gbtn back-btn">
      <i class="fa-solid fa-arrow-left"></i>
    </button> -->
    <!-- 
        ----- CHORE ------
        * IF THE USER IS CURRENTLY PLAYING IN EITHER MODE AND
        * DECIDES TO BACK TO MAIN MENU
        * THERE WILL BE POP UP ASKING THE USER IF THEY ARE SURE ABOUT THAT
        * IF YES, THEN THE SCORE/PLAYER/OPPONENT PICK WILL RESET
     -->
  </div>

  <!-- from rps component -->
  <div class="box">

  <!-- Rock Paper Scissor Buttons -->
    <div class="game">
      <button @click="router.back()" class="-gbtn back-btn">
        <i class="fa-solid fa-arrow-left"></i>
      </button>

      <img :src="pentagon" alt="pentagon background" class="pentagon">

      <!-- SCISSOR -->
      <router-link :to="{name: 'result'}" class="game-scissor sbtn-scissor-anim">
        <button class="btn scissor" @click="specialGame('scissor')">
          <div class="wrapper">
            <img :src="scissor" alt="">
          </div> 
        </button>
      </router-link>

       <!-- SPOCK -->
       <router-link :to="{name: 'result'}" class="game-spock sbtn-spock-anim">
        <button class="btn spock" @click="specialGame('spock')">
          <div class="wrapper">
            <img :src="spock" alt="">
          </div>
        </button>
      </router-link>

      <!-- PAPER -->
      <router-link :to="{name: 'result'}" class="game-paper sbtn-paper-anim">
        <button class="btn paper" @click="specialGame('paper')">
          <div class="wrapper">
            <img :src="paper" alt="">
          </div>
        </button>
      </router-link>
      
       <!-- LIZARD -->
       <router-link :to="{name: 'result'}" class="game-lizard sbtn-lizard-anim">
        <button class="btn lizard" @click="specialGame('lizard')">
          <div class="wrapper">
            <img :src="lizard" alt="">
          </div>
        </button>
      </router-link>

      <!-- ROCK -->
      <router-link :to="{name: 'result'}" class="game-rock sbtn-rock-anim">
        <button class="btn rock" @click="specialGame('rock')">
          <div class="wrapper">
            <img :src="rock" alt="">
          </div>
        </button>
      </router-link>
    </div>
    <button class="-gbtn rules-btn" @click="$refs.dialog.showModal()">
      Rules
    </button>
  </div>
  <dialog ref="dialog" class="dialog">
    <button @click="$refs.dialog.close()" class="close-btn">
      <img :src="close" alt="close-icon">
    </button>
    <img :src="rpsRules" alt="Rock Paper Scissors Rules">
  </dialog>
</template>

<style lang="scss" scoped>
  @use '../assets/scss/utilities/' as *;

  .dialog {
    border: none;
    background-color: var(--clr-background-rules);
    position: relative;
    padding: rem(100) rem(32);
    border-radius: rem(8);
  }
  .close-btn {
    position: absolute;
    top: rem(24);
    right: rem(24);
  }

  .rules-btn {
    margin-top: rem(50);
  }

  .back-btn {
    font-size: rem(16);
    padding-block: rem(6);
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

    &-scissor {
      grid-column: 1 / 3;
      margin-inline: auto;
      padding-top: 40px;
    }
    &-paper {
      padding-left: 0;
    }
    &-lizard {
      padding-left: 50%;
    }
    &-spock {
      padding-left: 50%;
    }

    .pentagon {
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

  .lizard {
    background-image: var(--clr-primary-lizard);
  }

  .spock {
    background-image: var(--clr-primary-spock);
  }
</style>