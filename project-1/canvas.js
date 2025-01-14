const board = document.getElementById("b")
board.width = 800
board.height = 800
let jumpingY1 = 800 - 120
let jumpingY2 = 800 - 120
let jumpingY3 = 800 - 120
let balloonX = 0
let jumpingV1 = 7
let jumpingV2 = 2
let jumpingV3 = 5

const ctx = board.getContext("2d")

balloon = new Image()
balloon.src = "./balloon.png"

jumping1 = new Image()
jumping1.src = "./jumping.jpg"

jumping2 = new Image()
jumping2.src = "./ship.png"

jumping3 = new Image()
jumping3.src = "./balloon.png"

let jumpers = [jumping1, jumping2, jumping3]

function update() {
  requestAnimationFrame(update)
  ctx.clearRect(0, 0, board.width, board.height)

  ctx.drawImage(balloon, balloonX, 10, 100, 100)

  let jumpingYs = [jumpingY1, jumpingY2, jumpingY3]

  jumpers.forEach((e, index) => {
    ctx.drawImage(e, 120 * index, jumpingYs[index], 120, 100)
  })

  balloonX++
  jumpingV1 -= 0.05
  jumpingV2 -= 0.05
  jumpingV3 -= 0.05

  jumpingY1 -= jumpingV1
  jumpingY2 -= jumpingV2
  jumpingY3 -= jumpingV3
}

update()
