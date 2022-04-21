import { levelOne } from './db/levelOne.js'
import { levelTwo } from './db/levelTwo.js'
import { levelThree } from './db/levelThree.js'
import { levelFour } from './db/levelFour.js'
import { levelFive } from './db/levelFive.js'
import { histories } from './db/histories.js'
import { players } from './db/players.js'
import Question from './model/Question.js'
import Game from './model/Game.js'
import Player from './model/Player.js'
import History from './model/History.js'
import Display from './model/Display.js'

function main() {
  const displayGame = new Display()
  const history = new History()
  history.insertHistory(1)
  history.insertHistory(2)
  history.insertHistory(3)
  history.getHistory()

  // const root = document.getElementById('root')
  // displayGame.welcomeScreen()

  // const one = new Question(levelOne)
  // const two = new Question(levelTwo)
  // const three = new Question(levelThree)
  // const four = new Question(levelFour)
  // const five = new Question(levelFive)
  // const questions = [one, two, three, four, five]
  // const player = new Player('david')
  // const game = new Game(questions, player)
  // const nick = game.getPlayer().getNickname()
  // const didWin = game.getPlayer().getWon()
  // console.log(didWin)
  // console.log(nick)
}

main()
