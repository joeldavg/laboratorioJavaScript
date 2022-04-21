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

  // could take a callback to be use when inside GameManager
  validateAnswer(userInput) {
    this.#player.addAnswerChosen(userInput)
    const userAnswer = this.#player.getCurrentAnswerByLevel(this.#currentLevel)
    const validAnswer = this.#questions[this.#currentLevel].correctAnswer
    return userAnswer === validAnswer
  }

  // add this as an event listener to the retire button
  retireWithCurrentPoints() {
    const currentGameInstance = this
    return currentGameInstance
  }

  // add this as an event listener to the continue button
  continueGame() {
    this.#increaseScore()
    this.#nextLevel()
  }

  // setters
  #nextLevel() {
    this.#currentLevel += 1
  }

  #increaseScore() {
    const INCREMENT = 100
    this.#score += INCREMENT
  }

  // getters
  getCurrentLevel() {
    return this.#currentLevel
  }
  showScore() {
    return this.#score
  }

  getCurrentQuestion() {
    return this.#questions[this.#currentLevel]
  }

  getQuestions() {
    return this.#questions
  }

  getPlayer() {
    return this.#player
  }
}

export default Game
