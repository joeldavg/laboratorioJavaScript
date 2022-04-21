import Game from './Game'

class Round {
  #game
  #display
  #history
  constructor() {
    this.#game = new Game()
    this.#display = new Display()
    this.#history = new History()
  }
}
