// saves the whole game instance
class History {
  #historyArray
  static #key = 'history'
  constructor() {
    this.#historyArray = []
  }

  getHistory() {
    return this.#historyArray
  }

  pushToHistory(game) {
    this.#historyArray.push(game)
  }

  readPreviousHistory() {
    const localStoredObj = localStorage.getItem(History.#key)
    if (localStoredObj) {
      return JSON.parse(localStoredObj)
    }
    return []
  }

  saveToLocalStorage(game) {
    // console.log('game passed', game)
    const gameCopy = JSON.parse(JSON.stringify(game))
    const currentSave = this.readPreviousHistory()
    const newSave = currentSave.push(gameCopy)
    const historyArray = JSON.stringify(newSave)
    localStorage.setItem(History.#key, historyArray)
  }

  // emptyLocalStorage() {
  //   localStorage.clear()
  // }
}
export default History
