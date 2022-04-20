import { levelOne } from './db/levelOne.js'
import { levelTwo } from './db/levelTwo.js'
import { levelThree } from './db/levelThree.js'
import { levelFour } from './db/levelFour.js'
import { levelFive } from './db/levelFive.js'
import Question from './model/Question.js'
import Game from './model/Game.js'
function main() {
  const one = new Question(levelOne)
  const two = new Question(levelTwo)
  const three = new Question(levelThree)
  const four = new Question(levelFour)
  const five = new Question(levelFive)
  const questions = [one, two, three, four, five]
  const game = new Game(questions)
  console.log(game.questions[game.currentLevel])
  game.nextLevel()
  console.log(game.questions[game.currentLevel])
  game.nextLevel()
  console.log(game.questions[game.currentLevel])
}

main()
