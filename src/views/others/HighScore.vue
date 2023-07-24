<script>
  import { useGameStore } from '../../store/GameStore';
  import { storeToRefs } from 'pinia'
  import { ref } from 'vue'
  import { RouterLink, useRouter } from 'vue-router'

  export default {
    name: 'HighScore',
    setup() { 
      const gameStore = useGameStore()

      const { gamemode, score, isNewHighScoreClassic } = storeToRefs(gameStore)
      const { resetGame, setHighScore, setGameMode, setValue } = gameStore

      return { 
        resetGame, gamemode, score, setHighScore, isNewHighScoreClassic, setGameMode, setValue
      }
    },
    mounted: function() {
      this.$refs.dialog.showModal()
    },
    data() {
      return { username: ref('') }
    },
    methods: {
      submitNewHighScore() {
        if(this.username === '') {
          this.username = 'Anonymous'
        }

        if(this.score === 0) return

        const score = {
          username: this.username,
          gamemode: this.gamemode,
          score: this.score
        }

        this.setHighScore(score) 
      }
    }
  }
</script>

<template>
  <div>
    <dialog ref="dialog">

      <!-- FORM -->
      <form class="form">
        <fieldset>
          <legend class="sr-only">Setting a high-score</legend>

          <div class="form-field" v-if="isNewHighScoreClassic">
            <label for="name">Username</label>
            <input type="text" id="name" v-model="username">
          </div>

          <h1 v-if="!isNewHighScoreClassic">Better luck next time</h1>
      
          <div class="mode">
            <p>Mode: </p>
            <h1 class="gamemode">{{ gamemode }}</h1>
          </div>
          
          <div class="score">
            <h3>{{ score }}</h3>
          </div>

          <router-link :to="{name: 'leaderboard'}">
            <button @click="$refs.dialog.close(), submitNewHighScore(), setGameMode(gamemode), setValue()" class="-gbtn">Continue</button>
          </router-link>
        </fieldset>
      </form>
    </dialog>
  </div>
  
</template>

<style lang="scss" scoped>
  @use '../../assets/scss/utilities/' as *;

  dialog {
    background-color: var(--clr-background-main);
    box-shadow: 0 0 0 10px var(--clr-background-main);
    border: none;
    z-index: 1;
    border-radius: rem(4);
    width: rem(400);
    border: 3px solid var(--clr-neutral-w);
    color: var(--clr-neutral-w);
  }

  .danger {
    color: red;
  }

  .form {
    fieldset {
      border: none;
      margin: 0;
      padding: 0;
    }
  }

  .gamemode {
    text-transform: uppercase;
  }

  .-gbtn {
    width: 100%;
  }
</style>