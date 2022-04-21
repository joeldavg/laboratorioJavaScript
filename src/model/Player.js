class Player {
  #nickname
  #won
  #answers
  constructor(nickname) {
    // this.id = id // create a func that generates a random id
    this.#nickname = nickname
    this.#won = false
    this.#answers = []
  }

  // move this to a generic Class (auxiliary class)
  generateId() {}

  getNickname() {
    return this.#nickname
  }

  getWon() {
    return this.#won
  }

  setPlayerVictory() {
    this.#won = true
  }

  addAnswerChosen(answer) {
    this.answerChosen.push(answer)
  }

  getCurrentAnswerByLevel(level) {
    return this.#answers[level]
  }
}

export default Player
