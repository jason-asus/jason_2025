"use strict"
let board = document.getElementById("canvas")
board.width = window.innerWidth
board.height = window.innerHeight

const context = board.getContext("2d")

let gravity = 0.6

/** frog */
const frog = {
  img: new Image(),
  x: 0 + 100,
  y: board.height - 100,
  width: 100,
  height: 100,
  velocity: -20,
}

frog.img.src = "./frog.png"

/** grasshopper */
const grasshopper = {
  img: new Image(),
  x: 100 + 100,
  y: board.height - 100,
  width: 100,
  height: 100,
  velocity: -20,
}
grasshopper.img.src = "./grasshopper.png"

// let grasshopper = new Image()

/** draw */
const update = () => {
  requestAnimationFrame(update)

  if (frog.y > board.height - 100) {
    frog.velocity = Math.random() * -32
  }
  if (grasshopper.y > board.height - 100) {
    grasshopper.velocity = Math.random() * -31.99
  }
  context.clearRect(0, 0, board.width, board.height)
  frog.velocity += gravity
  frog.y += frog.velocity

  grasshopper.velocity += gravity
  grasshopper.y += grasshopper.velocity

  context.drawImage(frog.img, frog.x, frog.y, frog.width, frog.height)
  context.drawImage(
    grasshopper.img,
    grasshopper.x,
    grasshopper.y,
    grasshopper.width,
    grasshopper.height
  )
}

update()
