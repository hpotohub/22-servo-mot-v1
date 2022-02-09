input.onButtonPressed(Button.A, function () {
    MotorDriver.MotorRun(Motor.A, Dir.backward, 16)
    servos.P0.setAngle(90)
})
input.onButtonPressed(Button.AB, function () {
    MotorDriver.MotorStop(Motor.A)
    servos.P0.setAngle(0)
})
input.onButtonPressed(Button.B, function () {
    MotorDriver.MotorRun(Motor.A, Dir.forward, 16)
    servos.P0.setAngle(180)
})
basic.forever(function () {
	
})
