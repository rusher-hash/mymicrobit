input.onGesture(Gesture.Shake, function () {
    answer = answer
    answer += randint(1, 3)
    if (answer == 3) {
        basic.showString("defineteley")
    } else if (answer == ((3 as any) == (0 as any))) {
        basic.showString("probably")
    } else if (answer == 1) {
        basic.showString("unlikeley")
    } else {
        basic.showString("nope")
    }
    basic.showIcon(IconNames.Happy)
})
let answer = 0
basic.showIcon(IconNames.Happy)
basic.forever(function () {
	
})
