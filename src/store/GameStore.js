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

      if(this.player === 'paper'){
        if(this.opponent === 'scissor') {
          this.isWinner = false
          // game over

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
        }
      } 
    },

    specialGame(pick) {
      this.player = pick
      
      this.specialGameOpponentPick()

      if(this.player == 'scissor') {
        if(this.opponent === 'paper' || this.opponent === 'lizard') {
          // winner
          this.isWinner = true
          this.score += 1
        } else if(this.opponent === 'spock' || this.opponent === 'rock') {
          // lose
          this.isWinner = false
        } else if(this.opponent === 'scissor') {
          // draw
          this.isWinner = ''
        }
      } else if(this.player === 'spock') {
        if(this.opponent === 'scissor' || this.opponent === 'rock') {
          // winner
          this.isWinner = true
          this.score += 1
        } else if(this.opponent === 'lizard' || this.opponent === 'paper') {
          // lose
          this.isWinner = false
        } else if(this.opponent === 'spock') {
          // draw
          this.isWinner = ''
        }
      } else if(this.player === 'paper') {
        if(this.opponent === 'spock' || this.opponent === 'rock') {
          // winner
          this.isWinner = true
          this.score += 1
        } else if(this.opponent === 'lizard' || this.opponent === 'scissor') {
          // lose
          this.isWinner = false
        } else if(this.opponent === 'paper') {
          this.isWinner = ''
        }
      } else if(this.player === 'lizard') {
        if(this.opponent === 'spock' || this.opponent === 'paper') {
          // winner
          this.isWinner = true
          this.score += 1
        } else if(this.opponent === 'scissor' || this.opponent === 'rock') {
          // lose
          this.isWinner = false
        } else if(this.opponent === 'lizard') {
          // draw
          this.isWinner = ''
        }
      } if(this.player === 'rock') {
        if(this.opponent === 'lizard' || this.opponent === 'scissor') {
          // winner
          this.isWinner = true
          this.score += 1
        } else if(this.opponent === 'spock' || this.opponent === 'paper') {
          // lose
          this.isWinner = false
        } else if(this.opponent === 'rock') {
          // draw
          this.isWinner = ''
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
    },

    specialGameOpponentPick() {
      const num = Math.floor(Math.random() * 5) + 1
      console.log(num)

      if(num === 1) {
        this.opponent = 'scissor'
      } else if(num === 2) {
        this.opponent = 'spock'
      } else if(num === 3) {
        this.opponent = 'paper'
      } else if(num === 4) {
        this.opponent = 'lizard'
      } else if(num === 5) {
        this.opponent = 'rock'
      }
    },

    resetGame() {
      this.player = ''
      this.opponent = ''
      this.score = 0
      this.gamemode = ''
      this.isWinner = null
    }
  }
})