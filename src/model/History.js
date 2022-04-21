// saves the whole game instance
class History {
  #historyArray
  static #key = 'history'
  constructor() {
    this.#historyArray = this.readPreviousHistory()
  }

  // inserts a Game instance into the array
  insertHistory(game) {
    this.#historyArray.push(game)
  }
  getHistory() {
    return this.#historyArray
  }

  readPreviousHistory() {
    // read from localStorage and insert into this.history
    const key = localStorage.getItem(History.#key)
    console.log(History.#key)
    if (key) {
      const string = localStorage.getItem(key)
      const parsedArray = JSON.parse(string)
      return parsedArray
    }
    return []
  }
  saveToLocalStorage() {
    const historyArray = JSON.stringify(this.#historyArray)
    localStorage.setItem(History.#key, historyArray)
  }
}
export default History
