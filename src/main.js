import { levelOne } from './db/levelOne.js'
import Question from './model/Question.js'

function main() {
  const question = new Question(levelOne)

  console.log(question.getQuestions())
}

main()
