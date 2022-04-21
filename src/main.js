import { histories } from './db/histories.js'
import { players } from './db/players.js'
import Question from './model/Question.js'
import Game from './model/Game.js'
import Player from './model/Player.js'
import History from './model/History.js'
import Display from './model/Display.js'
import GameManger from './model/GameManager.js'

function main() {
  // take this out to a file
  const mainGame = new Game()
  const gameManager = new GameManger()
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
