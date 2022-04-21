// saves the whole game instance
class History {
  #historyArray
  static #key = 'history'
  constructor() {
    this.#historyArray = this.readPreviousHistory() || []
  }

  // inserts a Game instance into the array
  insertHistory(game) {
    this.#historyArray.push(game)
  }
  getHistory() {
    return this.#historyArray
  }

  pushAndSaved(game) {
    this.insertHistory(game)
    this.saveToLocalStorage(game)
  }

  readPreviousHistory() {
    const localStoredObj = localStorage.getItem(History.#key)
    if (localStoredObj) {
      const stringObj = JSON.stringify(localStoredObj)
      const parsedObj = JSON.parse(stringObj)
      const arraySaved = parsedObj.saved
      return arraySaved
    }
    return []
  }

  // take parameter and clone the game
  saveToLocalStorage(game) {
    const gameCopy = JSON.parse(JSON.stringify(game))
    const jsonLike = { saved: this.#historyArray }
    const historyArray = JSON.stringify(jsonLike)
    localStorage.setItem(History.#key, historyArray)
  }

  emptyLocalStorage() {
    localStorage.clear()
  }
}
export default History
