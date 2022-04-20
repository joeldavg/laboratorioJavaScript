class Game {
  // questions must be an array of random questions
  // [easy, medium, etc..]
  constructor(questions) {
    this.currentLevel = 0
    this.questions = questions
  }

  nextLevel() {
    this.currentLevel += 1
  }
}

export default Game
