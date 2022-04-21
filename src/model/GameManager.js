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

// GameManager which deals with Game and Display classes
class GameManager {
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
    this.#display.welcomeScreen(this.startGameButtonCallback, this.historyButtonCallback)
  }

  continueWithNextQuestion() {
    this.#game.continueGame()
    this.#display.continueScreen()
  }

  startGameButtonCallback() {
    console.log('game manager start game')
  }

  historyButtonCallback() {
    console.log('game manager history')
    // this.#display.historyScreen(this.#history)
    const nHistory = new History()
    const nDisplay = new Display()
    nDisplay.historyScreen(nHistory)
  }

  retireWithPoints() {
    // const currentSession = this.#game.retireWithCurrentPoints()
    // this.#history.insertHistory(currentSession)
    // this.#history.saveToLocalStorage()
    // return user to the main screen (and reset the whole game) or refresh the page
  }

  checkUserAnswer() {
    // use display to get the userAnswer
    // const userAnswer = this.#display.getUserAnswer()
    // const isCorrect = this.#game.validateAnswer(userAnswer)
    // if (isCorrect) {
    // }
  }
  // methods to manage both the ui and the logic
}

export default GameManager
