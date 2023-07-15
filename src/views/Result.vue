<script setup>
  import { useGameStore } from '../store/GameStore';
  import { storeToRefs } from 'pinia'

  // icons 
  import rock from '../assets/images/icon-rock.svg'
  import paper from '../assets/images/icon-paper.svg'
  import scissor from '../assets/images/icon-scissors.svg'

  const gameStore = useGameStore()

  const { player, opponent, isWinner } = storeToRefs(gameStore)
</script>

<template>
  <div class="result">
    <div class="result-player">
      <img :src="rock" alt="hand-rock icon" v-if="player === 'rock'">
      <img :src="paper" alt="hand-paper icon" v-else-if="player === 'paper'">
      <img :src="scissor" alt="hand-scissor icon" v-else-if="player === 'scissor'">

      <h1>You Picked</h1>
    </div>

    <div class="result-opponent">
      <img :src="rock" alt="hand-rock icon" v-if="opponent === 'rock'">
      <img :src="paper" alt="hand-paper icon" v-else-if="opponent === 'paper'">
      <img :src="scissor" alt="hand-scissor icon" v-else-if="opponent === 'scissor'">
      <h1>Your Opponent Picked</h1>
    </div>

    <div class="result-text">
      <h1 v-if="isWinner === true">You Win</h1>
      <h1 v-else-if="isWinner === false">You lose</h1>
      <h1 v-else-if="isWinner === ''">Draw</h1>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '../assets/scss/utilities/' as *;

  .result {
    // temp
    text-align: center;
    outline: white 1px solid;

    img {
      margin-inline: auto;
    }
  }
</style>