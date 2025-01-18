"use strict"
let board = document.getElementById("canvas")
board.width = window.innerWidth
board.height = window.innerHeight

const context = board.getContext("2d")

let frog = new Image()
frog.src = "./frog.png"

let frogY = board.height - 100
let frogVel = -20
let gravity = 0.6

const update = () => {
  requestAnimationFrame(update)

  if (frogY > board.height - 100) {
    frogVel = Math.random() * -32
  }
  context.clearRect(0, 0, board.width, board.height)
  frogVel += gravity
  frogY += frogVel
  context.drawImage(frog, 10, frogY, 100, 100)
}

update()
