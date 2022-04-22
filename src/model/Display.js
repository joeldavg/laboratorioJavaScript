import History from './History.js'

class Display {
  constructor() {}
  // methods to manage the ui
  // they should generate the html markup
  // those methods take the game instance as an argument
  // from that it generates the markup

  // we could omit the creation of the user name until he reaches one ending.
  #generateInnerRoot() {
    const innerRoot = document.createElement('div')
    innerRoot.id = 'inner-root'
    return innerRoot
  }

  #generateCardTitle() {
    const cardTitle = document.createElement('h5')
    cardTitle.classList.add('card-title')
    return cardTitle
  }

  #generateCardText() {
    const cardText = document.createElement('p')
    cardText.classList.add('card-text')
    return cardText
  }

  #generateContinueButton() {
    const continueButton = document.createElement('button')
    continueButton.classList.add('btn', 'btn-success')
    return continueButton
  }

  #generateAnswerButton(buttonText) {
    const answerButton = document.createElement('button')
    answerButton.classList.add('list-group-item', 'list-group-item-action')
    answerButton.innerText = buttonText
    answerButton.value = buttonText
    return answerButton
  }

  #selectRootReference() {
    const root = document.querySelector('#root')
    return root
  }

  #generateTableHead(thText) {
    const th = document.createElement('th')
    th.innerText = thText
    return th
  }

  welcomeScreen(startButtonCallback, historyButtonCallback) {
    this.erase()
    const root = this.#selectRootReference()
    const innerRoot = this.#generateInnerRoot()

    const cardTitle = this.#generateCardTitle()
    cardTitle.innerText = 'WELCOME'

    const cardText = this.#generateCardText()
    cardText.innerText = this.#welcomeMessage()

    const divButton = document.createElement('div')
    divButton.classList.add('d-flex', 'justify-content-between')

    const gameHistoryButton = document.createElement('button')
    gameHistoryButton.classList.add('btn', 'btn-info')
    gameHistoryButton.innerText = 'GAME HISTORY'
    gameHistoryButton.addEventListener('click', historyButtonCallback)

    const startGameButton = this.#generateContinueButton()
    startGameButton.innerText = 'START GAME'
    // pass a callback from GameManager
    startGameButton.addEventListener('click', startButtonCallback)

    divButton.append(gameHistoryButton)
    divButton.append(startGameButton)
    innerRoot.append(cardTitle)
    innerRoot.append(cardText)
    innerRoot.append(divButton)
    root.append(innerRoot)
  }

  historyScreen(history) {
    this.erase()
    const histories = history.getHistory()
    console.log(histories)
    let file
    const root = this.#selectRootReference()
    const innerRoot = this.#generateInnerRoot()
    const h5 = this.#generateCardTitle()
    h5.innerText = 'HISTORIAL DE PARTIDAS'
    const table = document.createElement('table')
    table.classList.add('table')
    const tHead = document.createElement('thead')
    const tr = document.createElement('tr')
    const th1 = this.#generateTableHead('#')
    const th2 = this.#generateTableHead('Total Points')
    const th3 = this.#generateTableHead('Player Nick')
    const th4 = this.#generateTableHead('Max Round')
    const th5 = this.#generateTableHead('Won?')
    const tBody = document.createElement('tbody')
    tBody.id = 'tbody'

    for (let i = 0; i < histories.length; i++) {
      file += `<tr><td>${position}</td>
                      <td>${histories[i].showScore()}</td>
                      <td>${histories[i].getPlayer().getNickname()}</td>
                       <td>${histories[i].getCurrentLevel() + 1}</td>
                       <td>${histories[i].showScore()}</td></tr>`
    }

    const homeButton = document.createElement('button')
    homeButton.classList.add('btn', 'btn-info')
    homeButton.innerText = 'HOME '
    homeButton.addEventListener('click', () => location.reload())

    tr.appendChild(th1)
    tr.appendChild(th2)
    tr.appendChild(th3)
    tr.appendChild(th4)
    tr.appendChild(th5)
    tHead.appendChild(tr)
    table.appendChild(tHead)
    if (tBody.childNodes.length > 0) {
      table.appendChild(tBody)
    }
    tBody.innerHTML = file
    innerRoot.appendChild(h5)
    innerRoot.appendChild(table)
    innerRoot.appendChild(homeButton)
    root.appendChild(innerRoot)
  }

  #welcomeMessage() {
    const message = `Este juego consta de 5 niveles, a medida que vas avanzando la dificultad de las preguntas aumentan. Ganas el juego solo si logras reponder todas las preguntas.`
    return message
  }

  questionScreen(game) {
    this.erase()
    const history = new History()
    const root = this.#selectRootReference()
    const innerRoot = this.#generateInnerRoot()

    // currentLevel
    const currentQuestion = game.getCurrentQuestion()
    // const question = currentQuestion.getQuestion()
    const questionText = currentQuestion.getQuestionTitle()
    const answersArray = currentQuestion.getAnswersArray()

    const cardTitle = this.#generateCardTitle()
    cardTitle.innerText = `LEVEL ${game.getCurrentLevel() + 1}`

    const cardText = this.#generateCardText()
    cardText.classList.add('fw-bold')
    // console.log(question)
    cardText.innerText = questionText

    const divAnswerButton = document.createElement('div')
    divAnswerButton.classList.add('list-group')

    for (let answer of answersArray) {
      const answerButton = this.#generateAnswerButton(answer)
      answerButton.addEventListener('click', function () {
        const isCorrect = game.validateAnswer(this.value)
        const currentLevel = game.getCurrentLevel()
        if (isCorrect && currentLevel === 4) {
          console.log('winner chicken dinner')
          // cambiar atributo de player a true
          // save history
          // history.pushAndSaved(game)
          innerDisplay.winnerScreen()
        } else if (isCorrect) {
          game.continueGame()
          const didContinue = confirm('do you want to continue?')
          // innerDisplay.correctScreen(func1, func2)
          if (didContinue) {
            innerDisplay.questionScreen(game)
          } else {
            history.pushAndSaved(game)
            location.reload()
          }
        } else {
          history.pushAndSaved(game)
          innerDisplay.loserScreen(() => location.reload())
        }
      })

      divAnswerButton.append(answerButton)
    }
    innerRoot.append(cardTitle)
    innerRoot.append(cardText)
    innerRoot.append(divAnswerButton)
    root.append(innerRoot)
  }

  // ----------------------------

  // -------------------
  winnerScreen() {
    this.erase()
    const root = this.#selectRootReference()
    const innerRoot = this.#generateInnerRoot()

    const cardTitle = document.createElement('h6')
    cardTitle.classList.add('card-title')
    cardTitle.classList.add('alert', 'alert-success')
    cardTitle.innerText = `CONGRATULATIONS YOU WON THE GAME`

    const cardText = this.#generateCardText()
    cardText.classList.add('fw-bold')
    cardText.innerText = 'You have sucessfully answers all questions'

    const homeButton = document.createElement('button')
    homeButton.classList.add('btn', 'btn-info')
    homeButton.innerText = 'HOME '
    homeButton.addEventListener('click', () => location.reload())

    innerRoot.append(cardTitle)
    innerRoot.append(cardText)
    innerRoot.append(homeButton)
    root.append(innerRoot)
  }

  loserScreen(callback) {
    this.erase()
    const root = this.#selectRootReference()
    const innerRoot = this.#generateInnerRoot()

    const cardTitle = this.#generateCardTitle()
    cardTitle.classList.add('alert', 'alert-danger')
    cardTitle.innerText = 'INCORRECT ANSWER'

    const cardText = this.#generateCardText()
    cardText.classList.add('fw-bold')
    cardText.innerText = 'Thanks for playing! You can try again.'

    const finishButton = document.createElement('button')
    finishButton.classList.add('btn', 'btn-danger')
    finishButton.innerText = 'FINISH'
    finishButton.addEventListener('click', callback)

    innerRoot.append(cardTitle)
    innerRoot.append(cardText)
    innerRoot.append(finishButton)
    root.append(innerRoot)
  }

  nickNameScreen() {
    this.erase()
    const root = this.#selectRootReference()
    const innerRoot = this.#generateInnerRoot()

    const cardText = this.#generateCardText()
    cardText.classList.add('fw-bold')
    cardText.innerText = 'Enter your Nickname:'

    const divInput = document.createElement('div')
    divInput.classList.add('form-floating', 'mb-3', 'd-inline-flex')

    const nicknameInput = document.createElement('input')
    nicknameInput.classList.add('form-control')
    nicknameInput.setAttribute('type', 'Text')
    nicknameInput.setAttribute('placeholder', 'nickname')
    nicknameInput.id = 'nickname'

    const nicknameLabel = document.createElement('label')
    nicknameLabel.setAttribute('for', 'floatingInput')
    nicknameLabel.innerText = 'Nickname'

    const continueButton = this.#generateContinueButton()
    continueButton.innerText = 'CONTINUE'

    divInput.append(nicknameInput)
    divInput.append(nicknameLabel)
    innerRoot.append(cardText)
    innerRoot.append(divInput)
    const br = document.createElement('span')
    br.innerHTML = '<br/>'
    innerRoot.append(br)
    innerRoot.append(continueButton)
    root.append(innerRoot)
  }

  erase() {
    const innerRoot = document.querySelector('#inner-root')
    if (innerRoot) {
      innerRoot.remove()
    }
  }
}
export default Display

const innerDisplay = new Display()
