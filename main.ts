let m = 0
let c = 0
let tempX = 0
let tempY = 0
function getLineEquation (x1: number, y1: number, x2: number, y2: number) {
    m = (y2 - y1) / (x2 - x1)
    c = y1 - m * x1
    tempX = x1
    led.plot(x1, y1)
    while (tempX != x2) {
        if (tempX < x2) {
            tempX += 1
        } else if (tempX > x2) {
            tempX += -1
        }
        tempY = m * tempX + c
        led.plot(tempX, tempY)
    }
}
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    getLineEquation(0, randint(0, 4), 4, randint(0, 4))
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    getLineEquation(randint(0, 4), 0, randint(0, 4), 4)
})
