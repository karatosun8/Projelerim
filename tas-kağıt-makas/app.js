//* ------ Selectors ------- */
const selectionArticle = document.querySelector(".selection")

//? Secilen elemanlarin tayicilari
const yourChoiceDiv = document.getElementById("your-choice")
const pcChoiceDiv = document.getElementById("pc-choice")

//? message
const messagePar = document.querySelector(".message")

//? Score
const scoreCardSection = document.querySelector(".score-card")
const pcScoreSpan = document.getElementById("pc-score")
const yourScoreSpan = document.getElementById("your-score")

//? Modal
const modalCardSection = document.querySelector(".modal-card")
const finalMessagePar = document.getElementById("final-message")
const playAgainBtn = document.getElementById("play-again")

//* ------- Variables ------- */
let userSelectImg = document.createElement("img")
let pcSelectImg = document.createElement("img")
let pcRandom
//? Colors
const YELLOW = "#ffc538"
const RED = "#fb778b"
const GREEN = "#5ab7ac"

//* ------- Event Listeners ------- */
selectionArticle.addEventListener("click", (e) => {
  // console.log(e.target.id)
  if (e.target.id) {
    userSelectImg.src = `./assets/${e.target.id}.png`
    userSelectImg.alt = e.target.id
    yourChoiceDiv.appendChild(userSelectImg)
    createPcSelection()
  }
})

//* ------- Functions ------- */

const createPcSelection = () => {
  const pcArr = ["rock", "paper", "scissor"]
  pcRandom = pcArr[Math.floor(Math.random() * 3)]
  pcRandom = "rock"
  pcSelectImg.src = `./assets/${pcRandom}.png`
  pcSelectImg.alt = pcRandom
  pcChoiceDiv.appendChild(pcSelectImg)
  calculateResult()
}

const calculateResult = () => {
  // console.log(userSelectImg.alt)
  // console.log(pcSelectImg.alt)

  //? Esitlik durumu
  if (userSelectImg.alt === pcRandom) {
    draw()
  } else {
    if (userSelectImg.alt === "rock") {
      pcRandom === "paper" ? youLost() : youWin()
    } else if (userSelectImg.alt === "scissor") {
      pcRandom === "rock" ? youLost() : youWin()
    } else if (userSelectImg.alt === "paper") {
      pcRandom === "scissor" ? youLost() : youWin()
    }
  }

  if (pcScoreSpan.textContent === "10" || yourScoreSpan.textContent === "10") {
    openModal()
  }
}

const draw = () => {
  messagePar.textContent = "Its a draw"
  scoreCardSection.style.color = YELLOW
  messagePar.style.backgroundColor = YELLOW
}

const youLost = () => {
  messagePar.textContent = "You Lost"
  scoreCardSection.style.color = RED
  messagePar.style.backgroundColor = RED
  pcScoreSpan.textContent++
}

const youWin = () => {
  messagePar.textContent = "You Win"
  scoreCardSection.style.color = GREEN
  messagePar.style.backgroundColor = GREEN
  yourScoreSpan.textContent++
}

const openModal = () => {
  modalCardSection.classList.add("show")

  if (yourScoreSpan.textContent === "10") {
    finalMessagePar.textContent = "💃 You Win🕺"
    document.querySelector(".modal").style.backgroundColor = GREEN
    playAgainBtn.style.color = GREEN
  }
}

//! İlkel Yontem
//? Resimler
// const rockImg = document.getElementById("rock")
// const paperImg = document.getElementById("paper")
// const scissorImg = document.getElementById("scissor")

// rockImg.addEventListener("click", () => {
//   image.src = "./assets/rock.png"
//   image.alt = "rock"
//   yourChoiceDiv.appendChild(image)

//   //? innerHTML
//   // yourChoiceDiv.innerHTML = `<img src="./assets/rock.png" alt="rock">`
// })

// paperImg.addEventListener("click", () => {
//   image.src = "./assets/paper.png"
//   image.alt = "paper"
//   yourChoiceDiv.appendChild(image)
// })

// scissorImg.addEventListener("click", () => {
//   image.src = "./assets/scissor.png"
//   image.alt = "scissor"
//   yourChoiceDiv.appendChild(image)
// })
