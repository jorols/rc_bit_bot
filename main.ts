radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        bitbot.move(BBMotor.Left, BBDirection.Forward, 60)
    } else if (receivedNumber == 1) {
        bitbot.move(BBMotor.Right, BBDirection.Forward, 60)
    } else {
        bitbot.move(BBMotor.Both, BBDirection.Forward, 60)
    }
})
radio.setGroup(1)
basic.forever(function () {
	
})
