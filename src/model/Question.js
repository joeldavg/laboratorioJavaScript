//
class Question {
  constructor(questionsByLevel) {
    this.question = this.getRandomQuestion(questionsByLevel)
  }

  #getQuestions() {
    return this.question
  }

  getRandomQuestion(questionArray) {
    const random = this.#generateRandomNumber(questionArray.length)
    return questionArray[random]
  }

  #generateRandomNumber(n) {
    return Math.floor(Math.random() * n)
  }
}

export default Question
