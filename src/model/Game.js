class Game {
  // questions must be an array of random questions
  // [easy, medium, etc..]
  #currentLevel
  #questions
  #player
  #score
  constructor(questions, player) {
    // this currentLevel variable is very important
    // it will be use to keep count of both current question and userAnswers
    this.#currentLevel = 0
    this.#questions = questions
    this.#player = player
    this.#score = 0
  }

  showScore() {
    return this.#score
  }

  getPlayer() {
    return this.#player
  }

  #nextLevel() {
    this.#currentLevel += 1
  }

  #increaseScore() {
    const INCREMENT = 100
    this.#score += INCREMENT
  }

  // here we need to pass value from the input from the DOM
  // and push it to the user answers array
  // could take a callback to be use when inside GameManager
  validateAnswer(userInput, correct, incorrect) {
    this.#player.addAnswerChosen(userInput)
    const userAnswer = this.#player.getCurrentAnswerByLevel(this.#currentLevel)
    const validAnswer = this.#questions[this.#currentLevel].correctAnswer
    if (!(userAnswer === validAnswer)) {
      incorrect()
    } else {
      correct()
    }
  }

  continueOrRetire(userInput) {
    if (userInput) {
      this.continueGame()
    } else {
      retireWithCurrentPoints()
    }
  }

  retireWithCurrentPoints() {}

  continueGame(boolean) {
    if (boolean) {
      this.#increaseScore()
      this.#nextLevel()
    }
  }
}

export default Game
