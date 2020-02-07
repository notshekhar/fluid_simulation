const canvas = document.querySelector("canvas")
const ctx = canvas.getContext("2d")
const resolution = 126
const {w, h} = {w: canvas.width, h: canvas.height}
const {cell_width, cell_height} = {cell_width: w/resolution, cell_height: h/resolution}
let fluid = new Fluid(2, 2, w, h, cell_width, cell_height)

function draw() {
    ctx.fillRect(0, 0, w, h)
    fluid.show()
    fluid.move()
}

setInterval(() => draw(), 21)
