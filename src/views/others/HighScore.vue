<script>
  import { useGameStore } from '../../store/GameStore';

  export default {
    name: 'HighScore',
    setup() {
      const gameStore = useGameStore()

      const { resetGame } = gameStore
      return { resetGame }
    },
    mounted: function() {
      this.$refs.dialog.show()
    }
  }
</script>

<template>
  <div>
    <dialog ref="dialog">
      <p>This will ask a user their username and save their score to the leaderboard, but...</p>
      <p class="p">This feature is not implemented yet...</p>
      <router-link :to="{name: 'leaderboard'}">
        <button @click="resetGame(), $refs.dialog.close()" class="-gbtn">Main Menu</button>
      </router-link>
    </dialog>
  </div>

  <!-- 
    ----- CHORE -----
    * SETTING HIGH SCORE
    * IF THE NUMBER OF USERS IS MORE THAT 10, SLICE THE LEST HIGHEST SCORE AND ADD THE NEW ONE THAT IS HIGHER THAN THE LAST

   -->
</template>

<style lang="scss" scoped>
  @use '../../assets/scss/utilities/' as *;

  dialog {
    background-color: var(--clr-neutral-text);
    border: none;
    z-index: 1;
    border-radius: rem(8);
    width: rem(400);
    text-align: center;
    border: 1px solid var(--clr-neutral-w);
    color: var(--clr-neutral-w);
  }

  .p {
    margin-bottom: rem(32);
  }
</style>