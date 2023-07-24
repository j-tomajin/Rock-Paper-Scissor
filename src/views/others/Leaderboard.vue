<script setup>
  import { useGameStore } from '../../store/GameStore';
  import { storeToRefs } from 'pinia';
  import { ref, onMounted } from 'vue'
  import { useRouter, useRoute, RouterLink } from 'vue-router'
  
  const gameStore = useGameStore()

  const { gamemode, classicHighScore, specialHighScore, overallHighScore } = storeToRefs(gameStore)
  const { resetGame, getValue } = gameStore

  let mode = ref('all')

  onMounted(() => { 
    mode.value = route.query.mode || ''
    getValue()
  })
  
  const route = useRoute()
  const router = useRouter()

  const handleChange = () => {
    router.push({query: {mode: gamemode.value}})
  }
  
</script>

<template>
  <h1 class="head">LEADERBOARD</h1>
  <div class="btns">
    <router-link :to="{name: 'home'}">
      <button class="-gbtn" @click="resetGame()">Back</button>
    </router-link>
  
    <select v-model="gamemode" class="select -gbtn" id="select" @change="handleChange">
      <option value="all">All</option>
      <option value="classic">Classic</option>
      <option value="special">Special</option>
    </select>
  </div>

  <div class="high-score">
    <!-- TEXT -->
    <div class="text grid">
      <h1>Username</h1>
      <h1>Game Mode</h1>
      <h1>Score</h1>
    </div>

    <!-- OVERALL HIGH SCORES -->
    <div v-if="gamemode === 'all'">
      <div class="scores grid" v-for="(oscore, index) in overallHighScore" :key="index" >
        <div class="username">
          <p>{{ oscore.username }}</p>
        </div> 

        <div class="gamemode">
          <p>{{ oscore.gamemode }}</p>
        </div> 

        <div class="score">
          <p>{{ oscore.score }}</p>
        </div> 
      </div>
    </div>

    <!-- CLASSIC HIGH SCORES -->
    <div v-else-if="gamemode === 'classic'">
      <div class="scores grid" v-for="(hscore, i) in classicHighScore" :key="i" >
        <div class="username">
          <p>{{ hscore.username }}</p>
        </div>

        <div class="gamemode">
          <p>{{ hscore.gamemode }}</p>
        </div>

        <div class="score">
          <p>{{ hscore.score }}</p>
        </div>
      </div>
    </div>

    <!-- SPECIAL HIGH SCORES -->
    <div v-else-if="gamemode === 'special'">
      <div class="scores grid" v-for="(hscore, ii) in specialHighScore" :key="ii" >
      <div class="username">
        <p>{{ hscore.username }}</p>
      </div>

      <div class="gamemode">
        <p>{{ hscore.gamemode }}</p>
      </div>

      <div class="score">
          <p>{{ hscore.score }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '../../assets/scss/utilities/' as *;

  .select {
    padding: rem(10);
    
    &:hover {
      border: none;
    }

    & option {
      background-color: var(--clr-background-main);
    }
  }

  .text {
    margin-bottom: rem(16);
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    text-align: center;
  }

  .gamemode {
    text-transform: uppercase;
  }

  .scores:not(:last-child) {
    margin-bottom: rem(12);
  }

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

  .btns {
    display: flex;    
    align-items: center;
    justify-content: space-between;
  }
</style>