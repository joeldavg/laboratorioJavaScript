class Game {
  // questions must be an array of random questions
  // [easy, medium, etc..]
  constructor(questions, player) {
    // this currentLevel variable is very important
    // it will be use to keep count of both current question and userAnswers
    this.#currentLevel = 0
    this.#questions = questions
    this.#player = player
    this.#score = 0
  }

  #nextLevel() {
    this.currentLevel += 1
  }

  #increaseScore() {
    const INCREMENT = 100
    this.score += INCREMENT
  }

  // here we need to pass value from the input from the DOM
  // and push it to the user answers array
  validateAnswer(userInput) {
    this.#player.addAnswerChosen(userInput)
    const userAnswer = this.player.getCurrentAnswerByLevel(this.currentLevel)
    const validAnswer = this.questions[this.currentLevel].correctAnswer
    if (userAnswer === validAnswer) {
      // push user Answer
      this.player.addAnswerChosen(validAnswer)
      this.continueGame()
    } else {
      // we return the user to the main page or to the history page and reset the whole game
      // here the player lost the game
    }
  }

  continueGame() {
    this.#increaseScore()
    this.#nextLevel()
  }
}

export default Game
