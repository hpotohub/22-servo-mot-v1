input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    basic.showString("G1")
    MotorDriver.MotorRun(Motor.B, Dir.forward, 12)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(2)
    basic.showString("X")
    MotorDriver.MotorStop(Motor.A)
    MotorDriver.MotorStop(Motor.B)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    basic.showString("D2")
    MotorDriver.MotorRun(Motor.A, Dir.forward, 12)
})
radio.setGroup(97)
let Recu = 0
