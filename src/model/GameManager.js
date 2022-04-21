import { levelOne } from '../db/levelOne.js'
import { levelTwo } from '../db/levelTwo.js'
import { levelThree } from '../db/levelThree.js'
import { levelFour } from '../db/levelFour.js'
import { levelFive } from '../db/levelFive.js'

import Display from './Display.js'
import Game from './Game.js'
import History from './History.js'
import Player from './Player.js'
import Question from './Question.js'

// GameManger which deals with Game and Display classes
class GameManger {
  #game
  #display
  #history
  constructor() {
    this.#game = null
    this.#display = new Display()
    this.#history = new History()
  }

  startNewGame(nickname) {
    const questions = [
      new Question(levelOne),
      new Question(levelTwo),
      new Question(levelThree),
      new Question(levelFour),
      new Question(levelFive),
    ]
    this.#game = new Game(questions, new Player(nickname))
  }

  testShowGame() {
    console.log(this.#game)
  }

  // doesContinue() {
  //   const userResponse = confirm('Continue or retire')
  //   // this.game.continueOrRetire(userResponse)
  // }

  checkUserAnswer() {
    // use display to get the userAnswer
    const userAnswer = this.#display.userChosenAnswer()

    const isCorrect = this.#game.validateAnswer(userAnswer)
    if (isCorrect) {
    }
  }
  // methods to manage both the ui and the logic
}

export default GameManger
