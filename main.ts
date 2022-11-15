let y2 = 0
let x2 = 0
// down to up right to left
basic.forever(function () {
    y2 = 4
    x2 = 4
    for (let index = 0; index < 5; index++) {
        for (let index = 0; index < 5; index++) {
            led.plot(x2, y2)
            y2 += -1
            basic.pause(100)
            led.unplot(x2, y2 + 1)
        }
        x2 += -1
        y2 = 4
    }
})
basic.forever(function () {
	
})
