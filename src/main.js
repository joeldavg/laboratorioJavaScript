import { histories } from './db/histories.js'
import { players } from './db/players.js'
import Question from './model/Question.js'
import Game from './model/Game.js'
import Player from './model/Player.js'
import History from './model/History.js'
import Display from './model/Display.js'
import GameManger from './model/GameManager.js'
import { levelOne } from './db/levelOne.js'
import { levelTwo } from './db/levelTwo.js'
import { levelThree } from './db/levelThree.js'
import { levelFour } from './db/levelFour.js'
import { levelFive } from './db/levelFive.js'

function main() {
  // take this out to a file
  const gameManager = new GameManger()
  const questions = [
    new Question(levelOne),
    new Question(levelTwo),
    new Question(levelThree),
    new Question(levelFour),
    new Question(levelFive),
  ]
  const test1 = new Game(questions, new Player('test1'))
  const test2 = new Game(questions, new Player('test2'))
  // const test1 = new Game([], new Player("test1"))
  const history = new History()
  const history2 = new History()

  // const dataFromGame = history.extractImportantData(test1)
  // console.log(dataFromGame)
  // history.saveToLocalStorage(test1)
  // history2.saveToLocalStorage(test2)
  // history.pushToHistory(test1)
  // history.pushToHistory(test2)
  // console.log(history.getHistory())
  // history.saveToLocalStorage(test1)
  // console.log(history.getHistory())
  gameManager.startNewGame('david')
}

main()

// const player = new Player('david')
// const player2 = new Player('juan')
// const game = new Game(questions, player)
// const game2 = new Game(questions, player2)
// const displayGame = new Display()
// const history = new History()
// history.insertHistory(game)
// history.insertHistory(game2)
// history.saveToLocalStorage()
// // console.log(history.getHistory())
// // displayGame.questionScreen(game)
// displayGame.historyScreen(history)
