input.onButtonPressed(Button.A, function () {
    radio.sendString("hello")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("what are you doing?")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString(":(")
})
radio.setGroup(1)
basic.forever(function () {
	
})
