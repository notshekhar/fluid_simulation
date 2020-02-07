function line(x, y, dx, dy){
    ctx.beginPath()
    ctx.lineCap = 'round'
    ctx.lineJoin = 'round'
    ctx.strokeStyle = 'yellow'
    ctx.moveTo(x, y)
    ctx.lineTo(dx, dy)
    ctx.stroke()
}