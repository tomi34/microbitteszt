let xd = ""
bluetooth.onUartDataReceived(serial.delimiters(Delimiters.NewLine), function () {
    xd = bluetooth.uartReadUntil(serial.delimiters(Delimiters.NewLine))
    basic.showString(xd)
    if ("55" == xd) {
        control.reset()
    }
    if ("58" == xd) {
        csináljValamit()
    }
    if ("65" == xd) {
        csináljValamit3()
    }
})
function csináljValamit3 () {
    while (true) {
        pins.digitalWritePin(DigitalPin.P1, 1)
        basic.pause(200)
        pins.digitalWritePin(DigitalPin.P1, 0)
        basic.pause(500)
    }
}
input.onButtonPressed(Button.A, function () {
    bluetooth.uartWriteString("55")
})
function csináljValamit () {
    music.setVolume(255)
    while (true) {
        music.ringTone(988)
        basic.pause(2000)
        music.ringTone(784)
        basic.pause(2000)
    }
}
function csináljValamit2 () {
    basic.pause(100000)
    music.stopMelody(MelodyStopOptions.All)
}
input.onButtonPressed(Button.B, function () {
    bluetooth.uartWriteString("60")
})
basic.forever(function () {
    bluetooth.startUartService()
    bluetooth.uartWriteNumber(pins.analogReadPin(AnalogPin.P2) + 600)
    basic.pause(100)
    bluetooth.uartWriteNumber(pins.analogReadPin(AnalogPin.P1) + 100)
    basic.pause(100)
    bluetooth.uartWriteNumber(input.acceleration(Dimension.Strength) / 1000)
    basic.pause(500)
})
