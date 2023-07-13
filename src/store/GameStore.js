import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGameStore = defineStore('gameStore', {
  state: () => {
    // states here
    return {
      gamemode: ref(''),
      score: ref(0),
    }
  },
  getters: {
    // getters here
  },
  actions: {
    // actions here
  }
})