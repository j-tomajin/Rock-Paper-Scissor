import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useGameStore = defineStore('gameStore', {
  state: () => {
    // states here
    return {
      gamemode: "",
      score: ref(0),
      player: ref(''),
      opponent: ref(''),
      isWinner: ref(null),
      // classic high score
      classicHighScore: ref([
        {
          username: 'Jeck',
          gamemode: 'classic',
          score: 10
        },
        {
          username: 'JPT',
          gamemode: 'classic',
          score: 9
        },
        {
          username: 'JTomajin',
          gamemode: 'classic',
          score: 8
        },
        {
          username: 'Jintoma',
          gamemode: 'classic',
          score: 7
        },
        {
          username: 'jeckjeckjeck',
          gamemode: 'classic',
          score: 6
        },
        {
          username: 'Is Handsome',
          gamemode: 'classic',
          score: 5
        },
        {
          username: 'ur mum',
          gamemode: 'classic',
          score: 4
        },
        {
          username: 'asdfghjkl',
          gamemode: 'classic',
          score: 3
        },
        {
          username: 'u nub',
          gamemode: 'classic',
          score: 2
        },
        {
          username: 'jkjk',
          gamemode: 'classic',
          score: 1
        },
      ]),
      isNewHighScoreClassic: true,

      // special high score
      specialHighScore: ref([
        {
          username: 'Jeck',
          gamemode: 'special',
          score: 10
        },
        {
          username: 'JPT',
          gamemode: 'special',
          score: 9
        },
        {
          username: 'JTomajin',
          gamemode: 'special',
          score: 8
        },
        {
          username: 'Jintoma',
          gamemode: 'special',
          score: 7
        },
        {
          username: 'jeckjeckjeck',
          gamemode: 'special',
          score: 6
        },
        {
          username: 'Is Handsome',
          gamemode: 'special',
          score: 5
        },
        {
          username: 'ur mum',
          gamemode: 'special',
          score: 4
        },
        {
          username: 'asdfghjkl',
          gamemode: 'special',
          score: 3
        },
        {
          username: 'u nub',
          gamemode: 'special',
          score: 2
        },
        {
          username: 'jkjk',
          gamemode: 'special',
          score: 1
        },
      ]),
    }
  },
  getters: {
    // getters here
  },
  actions: {
    // actions here
    setGameMode(pick) { 
      this.gamemode = pick
    },
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
    },

    highScoreSort() {
      if(this.gamemode === 'classic') {
        this.classicHighScore.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
  
        if(this.classicHighScore.length > 10) {
          this.classicHighScore = this.classicHighScore.splice(0, 10)
        }
      } else if(this.gamemode === 'special') {
        this.specialHighScore.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
  
        if(this.specialHighScore.length > 10) {
          this.specialHighScore = this.specialHighScore.splice(0, 10)
        }
      }

    }, 

    setHighScore(newScore) {
      if(this.gamemode === 'classic') {
        this.classicHighScore = [...this.classicHighScore, newScore]
        this.highScoreSort() 
      } else if(this.gamemode === 'special') {
        this.specialHighScore = [...this.specialHighScore, newScore]
        this.highScoreSort() 
      }
    },

    checkIfHighScore() {
      if(this.gamemode === 'classic') {
        let minHighScore = Math.min(...this.classicHighScore.map(score => score.score))
        console.log(minHighScore)
        
        if(this.score > minHighScore) {
          this.isNewHighScoreClassic = true
        } else {
          this.isNewHighScoreClassic = false
        }
      } else if(this.gamemode === 'special') {
        let minHighScore = Math.min(...this.specialHighScore.map(score => score.score))
        console.log(minHighScore)
        
        if(this.score > minHighScore) {
          this.isNewHighScoreClassic = true
        } else {
          this.isNewHighScoreClassic = false
        }
      }


    },
  }
})