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
const questions = [
  new Question(levelOne),
  new Question(levelTwo),
  new Question(levelThree),
  new Question(levelFour),
  new Question(levelFive),
]

let nickname = ''
while (!nickname) {
  nickname = prompt('your nickname: ')
}

const singleGameInstance = new Game(questions, new Player(nickname))
const singleDisplayInstance = new Display()
class GameManager {
  constructor() {}

  startNewGame() {
    singleDisplayInstance.welcomeScreen(this.startGameButtonCallback, this.historyButtonCallback)
  }

  continueWithNextQuestion() {
    // this.#game.continueGame()
    // this.#display.continueScreen()
  }

  startGameButtonCallback() {
    //put nicknameScreen here
    singleDisplayInstance.questionScreen(singleGameInstance)
  }
  historyButtonCallback() {
    const history = new History()
    singleDisplayInstance.historyScreen(history)
  }

  questionScreenManager() {
    singleDisplayInstance.questionScreen(singleGameInstance)
  }

  retireWithPoints() {
    // const currentSession = this.#game.retireWithCurrentPoints()
    // this.#history.insertHistory(currentSession)
    // this.#history.saveToLocalStorage()
    // return user to the main screen (and reset the whole game) or refresh the page
  }

  // methods to manage both the ui and the logic
}

export default GameManager
