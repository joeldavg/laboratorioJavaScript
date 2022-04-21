//
class Question {
  #question
  constructor(questionsByLevel) {
    this.#question = this.getRandomQuestion(questionsByLevel)
  }

  // {
  //   question: 'What were the first two blocks in "Minecraft"?',
  //   answers: ['Crafting Table and Cobblestone', 'Grass and Stone', 'Grass and Cobblestone', 'Cobblestone and Stone'],
  //   correctAnswer: 'Grass and Cobblestone',
  //   category: 'levelFive',
  // },
  getQuestion() {
    return this.#question
  }

  getQuestionTitle() {
    return this.#question.question
  }

  getCorrectAnswer() {
    return this.#question.correctAnswer
  }

  getAnswersArray() {
    return this.#question.answers
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
