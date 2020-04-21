const squares = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let currentTime = timeLeft.textContent

let score = document.querySelector('#score')

let result = 0
let hitPosition = null
function randomSquare() {
  squares.forEach((square) => {
    square.classList.remove('mole')
  })
  const randomSquareElement = squares[Math.floor(Math.random() * 9)]
  randomSquareElement.classList.add('mole')
  hitPosition = randomSquareElement.id
}

squares.forEach((square) => {
  square.addEventListener('mouseup', () => {
    if (square.id === hitPosition) {
      console.log('hit')
      result += 1
      score.textContent = result
    }
  })
})

function moveMole() {
  let timerId = null
  timerId = setInterval(randomSquare, 1000);
}

moveMole()

function countDown() {
  currentTime--
  timeLeft.textContent = currentTime
  if (currentTime === 0) {
    clearInterval(timer)
    squares.forEach((square) => {
      square.classList.remove('mole')
    })
    alert("Congratulations your score is " + result)
  }
}

const timer = setInterval(countDown, 1000)