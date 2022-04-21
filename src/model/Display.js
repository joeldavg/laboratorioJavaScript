// select div from DOM

class Display {
  //
  constructor() {
    //
    // this.root = div from DOM
  }
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

  #selectRootReference() {
    const root = document.querySelector('#root')
    return root
  }

  welcomeScreen() {
    this.erase()
    const root = this.#selectRootReference()
    const innerRoot = this.#generateInnerRoot()

    const h5 = document.createElement('h5')
    h5.classList.add('card-title')
    h5.innerText = 'WELCOME'

    const p = document.createElement('p')
    p.classList.add('card-text')
    p.innerText = this.#welcomeMessage()

    const divBtn = document.createElement('div')
    divBtn.classList.add('d-flex', 'justify-content-between')

    const btn1 = document.createElement('button')
    btn1.classList.add('btn', 'btn-info')
    btn1.innerText = 'GAME HISTORY'

    const btn2 = document.createElement('button')
    btn2.classList.add('btn', 'btn-success')
    btn2.innerHTML = 'START GAME'

    divBtn.append(btn1)
    divBtn.append(btn2)
    innerRoot.append(h5)
    innerRoot.append(p)
    innerRoot.append(divBtn)
    root.append(innerRoot)
  }

  historyScreen(history) {
    // history [ game ]
    this.erase()
    const root = this.#selectRootReference()
    const innerRoot = this.#generateInnerRoot()
    const h5 = document.createElement('h5')
    h5.classList.add('card-title')
    h5.innerText = 'HISTORIAL DE PARTIDAS'
    const table = document.createElement('table')
    table.classList.add('table')
    const tHead = document.createElement('thead')
    const tr = document.createElement('tr')
    const th1 = document.createElement('th')
    th1.innerHTML = '#'
    const th2 = document.createElement('th')
    th2.innerHTML = 'Total Points'
    const th3 = document.createElement('th')
    th3.innerHTML = 'Player Nick'
    const th4 = document.createElement('th')
    th4.innerHTML = 'Max Round'
    const th5 = document.createElement('th')
    th5.innerHTML = 'Won?'
    const tBody = document.createElement('tbody')
    tr.appendChild(th1)
    tr.appendChild(th2)
    tr.appendChild(th3)
    tr.appendChild(th4)
    tr.appendChild(th5)
    tHead.appendChild(tr)
    table.appendChild(tHead)
    table.appendChild(tBody)
    innerRoot.appendChild(h5)
    innerRoot.appendChild(table)
    root.appendChild(innerRoot)
  }

  #welcomeMessage() {
    const message = `Este juego consta de 5 niveles, a medida que vas avanzando la dificultad de las preguntas aumentan. Ganas el juego solo si logras reponder todas las preguntas.`
    return message
  }

  questionScreen(game) {
    // const currentQuestion = game.getCurrrentQuestion()
  }

  winnerScreen() {}

  loserScreen() {}

  continueScreen() {}

  erase() {
    const innerRoot = document.querySelector('#inner-root')
    console.log(innerRoot)
    if (innerRoot) {
      innerRoot.remove()
    }
  }
}
export default Display
