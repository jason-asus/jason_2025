"use strict"
let board = document.getElementById("canvas")

board.width = window.innerWidth
board.height = window.innerHeight

const context = board.getContext("2d")

let frog = new Image()
frog.src = "./frog.png"

let frogY = board.height - 100
let frogVel = -30

// requestAnimationFrame update{}
const update = () => {
  requestAnimationFrame(update)

  if (frogY <= board.height - 100) {
    context.clearRect(0, 0, board.width, board.height)
    frogVel += 1
    frogY = frogY + frogVel
  }

  context.drawImage(frog, 10, frogY, 100, 100)

  // frogY = frogY + 1
}

update()
