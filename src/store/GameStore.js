import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGameStore = defineStore('gameStore', {
  state: () => {
    // states here
    return {
      gamemode: ref(''),
      score: ref(0),
      player: ref(''),
      opponent: ref(''),
      isWinner: ref(null)
    }
  },
  persist: true,
  getters: {
    // getters here
  },
  actions: {
    // actions here
    classicGame(pick) {
      this.player = pick

      this.classicGameOpponentPick()

      if(this.gamemode === 'classic') {
        if(this.player === 'paper'){
          if(this.opponent === 'scissor') {
            this.isWinner = false
            // game over
            // states reset
            this.score = 0
  
          } else if (this.opponent === 'rock') {
            this.isWinner = true
            this.score += 1
  
          } else if (this.opponent === 'paper') {
            // draw
            this.isWinner = ''
          }
        } else if (this.player === 'scissor') {
          if(this.opponent === 'scissor') {
            // draw
            this.isWinner = ''
            
          } else if (this.opponent === 'rock') {
            this.isWinner = false
  
            // game over
            // states reset
            this.score = 0
  
          } else if (this.opponent === 'paper') {
            this.isWinner = true
            this.score += 1
  
          }
        } else if(this.player === 'rock') {
          if(this.opponent === 'scissor') {
            this.isWinner = true
            this.score += 1
  
          } else if (this.opponent === 'rock') {
            // draw
            this.isWinner = ''
  
          } else if (this.opponent === 'paper') {
            this.isWinner = false
   
            // game over
            // states reset
            this.score = 0
          }
        } 
      }

      console.log(this.gamemode)
      console.log(this.player)
      console.log(this.opponent)
      console.log(this.isWinner)
    },
 
    classicGameOpponentPick() {
      const num = Math.floor(Math.random() * 3) + 1
      console.log(num)

      if(num === 1) {
        this.opponent = 'rock'
      } else if(num === 2) {
        this.opponent = 'paper'
      } else if(num === 3) {
        this.opponent = 'scissor'
      }
    }
  }
})