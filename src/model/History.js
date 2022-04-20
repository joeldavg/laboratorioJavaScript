// saves the whole game instance
class History {
  constructor() {
    this.#historyArray = []
  }

  // inserts a Game instance into the array
  insertHistory(game) {
    this.historyArray.push(game)
  }
  getHistory() {
    return this.historyArray
  }

  readPreviousHistory() {
    // read from localStorage and insert into this.history
  }
}
export default History
