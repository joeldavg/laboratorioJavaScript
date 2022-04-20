class Player {
  constructor(nickname) {
    // this.id = id // create a func that generates a random id
    this.#nickname = nickname
    this.#won = false
    this.#answers = []
  }

  // move this to a generic Class (auxiliary class)
  generateId() {}

  getWon() {
    return this.#won
  }

  setWon(status) {
    this.#won = status
  }

  addAnswerChosen(answer) {
    this.answerChosen.push(answer)
  }

  getCurrentAnswerByLevel(level) {
    return this.#answers[level]
  }

  // validatePlayer() {}
}

export default Player
