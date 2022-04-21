// GameManger which deals with Game and Display classes
class GameManger {
  constructor(game, display, history) {
    // game instance
    this.#game = game
    // display instance
    this.#display = display
    // history instance
    this.#history - history
  }

  doesContinue() {
    const userResponse = confirm('Continue or retire')
    // this.game.continueOrRetire(userResponse)
  }
  // methods to manage both the ui and the logic
}
