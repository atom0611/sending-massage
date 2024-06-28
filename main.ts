enum RadioMessage {
    message1 = 49434
}
radio.onReceivedNumber(function (receivedNumber) {
    ishave_massge = 1
    reciveL += 1
    if (reciveL == 1) {
        L1 = receivedNumber
    } else if (reciveL == 2) {
        L2 = receivedNumber
    } else if (reciveL == 3) {
        L3 = receivedNumber
    } else if (reciveL == 4) {
        L4 = receivedNumber
    } else if (reciveL == 5) {
        L5 = receivedNumber
    } else if (reciveL == 6) {
        reciveL = 0
        L1 = receivedNumber
    }
})
input.onButtonPressed(Button.A, function () {
    if (ishave_massge == 1) {
        canread = 1
        if (canread == 1) {
            ishave_massge = 0
            reading_massge = 1
            datalogger.log(datalogger.createCV("message recive", 1))
            radio.sendString("massage recive!!")
        }
    } else if (reading_massge == 1) {
        if (readL == 1) {
            readL = 5
        } else {
            readL += -1
        }
    } else {
        if (az == 1) {
            az = 26
        } else {
            az += -1
        }
    }
})
input.onButtonPressed(Button.AB, function () {
    if (reading_massge == 1) {
        reciveL = 0
        reading_massge = 0
        reading_massge = 0
    } else {
        if (letters <= 5) {
            letters += 1
            radio.sendNumber(az)
        } else {
            ismax = 1
        }
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "massage recive!!") {
        message_read = 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (reading_massge == 1) {
        if (readL == 5) {
            readL = 1
        } else {
            readL += 1
        }
    } else {
        if (az == 26) {
            az = 1
        } else {
            az += 1
        }
    }
})
let message_read = 0
let ismax = 0
let canread = 0
let reading_massge = 0
let L5 = 0
let L4 = 0
let L3 = 0
let L2 = 0
let L1 = 0
let reciveL = 0
let ishave_massge = 0
let az = 0
let letters = 0
let readL = 0
datalogger.includeTimestamp(FlashLogTimeStampFormat.Minutes)
datalogger.setColumnTitles("message recive")
readL = 0
radio.setGroup(1)
letters = 0
az = 1
basic.forever(function () {
    if (ismax == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(200)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(100)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(100)
        ismax = 0
    } else if (ishave_massge == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (message_read == 1) {
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        basic.pause(500)
        basic.showLeds(`
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
        basic.pause(500)
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
        message_read = 0
    } else if (reading_massge == 1) {
        if (readL == 1) {
            if (L1 == 1) {
                basic.showString("A")
            } else if (L1 == 2) {
                basic.showString("B")
            } else if (L1 == 3) {
                basic.showString("C")
            } else if (L1 == 4) {
                basic.showString("D")
            } else if (L1 == 5) {
                basic.showString("E")
            } else if (L1 == 6) {
                basic.showString("F")
            } else if (L1 == 7) {
                basic.showString("G")
            } else if (L1 == 8) {
                basic.showString("H")
            } else if (L1 == 9) {
                basic.showString("I")
            } else if (L1 == 10) {
                basic.showString("J")
            } else if (L1 == 11) {
                basic.showString("K")
            } else if (L1 == 12) {
                basic.showString("L")
            } else if (L1 == 13) {
                basic.showString("M")
            } else if (L1 == 14) {
                basic.showString("N")
            } else if (L1 == 15) {
                basic.showString("O")
            } else if (L1 == 16) {
                basic.showString("P")
            } else if (L1 == 17) {
                basic.showString("Q")
            } else if (L1 == 18) {
                basic.showString("R")
            } else if (L1 == 19) {
                basic.showString("S")
            } else if (L1 == 20) {
                basic.showString("T")
            } else if (L1 == 21) {
                basic.showString("U")
            } else if (L1 == 22) {
                basic.showString("V")
            } else if (L1 == 23) {
                basic.showString("W")
            } else if (L1 == 24) {
                basic.showString("X")
            } else if (L1 == 25) {
                basic.showString("Y")
            } else if (L1 == 26) {
                basic.showString("Z")
            }
        } else if (readL == 2) {
            if (L2 == 1) {
                basic.showString("A")
            } else if (L2 == 2) {
                basic.showString("B")
            } else if (L2 == 3) {
                basic.showString("C")
            } else if (L2 == 4) {
                basic.showString("D")
            } else if (L2 == 5) {
                basic.showString("E")
            } else if (L2 == 6) {
                basic.showString("F")
            } else if (L2 == 7) {
                basic.showString("G")
            } else if (L2 == 8) {
                basic.showString("H")
            } else if (L2 == 9) {
                basic.showString("I")
            } else if (L2 == 10) {
                basic.showString("J")
            } else if (L2 == 11) {
                basic.showString("K")
            } else if (L2 == 12) {
                basic.showString("L")
            } else if (L2 == 13) {
                basic.showString("M")
            } else if (L2 == 14) {
                basic.showString("N")
            } else if (L2 == 15) {
                basic.showString("O")
            } else if (L2 == 16) {
                basic.showString("P")
            } else if (L2 == 17) {
                basic.showString("Q")
            } else if (L2 == 18) {
                basic.showString("R")
            } else if (L2 == 19) {
                basic.showString("S")
            } else if (L2 == 20) {
                basic.showString("T")
            } else if (L2 == 21) {
                basic.showString("U")
            } else if (L2 == 22) {
                basic.showString("V")
            } else if (L2 == 23) {
                basic.showString("W")
            } else if (L2 == 24) {
                basic.showString("X")
            } else if (L2 == 25) {
                basic.showString("Y")
            } else if (L2 == 26) {
                basic.showString("Z")
            }
        } else if (readL == 3) {
            if (L3 == 1) {
                basic.showString("A")
            } else if (L3 == 2) {
                basic.showString("B")
            } else if (L3 == 3) {
                basic.showString("C")
            } else if (L3 == 4) {
                basic.showString("D")
            } else if (L3 == 5) {
                basic.showString("E")
            } else if (L3 == 6) {
                basic.showString("F")
            } else if (L3 == 7) {
                basic.showString("G")
            } else if (L3 == 8) {
                basic.showString("H")
            } else if (L3 == 9) {
                basic.showString("I")
            } else if (L3 == 10) {
                basic.showString("J")
            } else if (L3 == 11) {
                basic.showString("K")
            } else if (L3 == 12) {
                basic.showString("L")
            } else if (L3 == 13) {
                basic.showString("M")
            } else if (L3 == 14) {
                basic.showString("N")
            } else if (L3 == 15) {
                basic.showString("O")
            } else if (L3 == 16) {
                basic.showString("P")
            } else if (L3 == 17) {
                basic.showString("Q")
            } else if (L3 == 18) {
                basic.showString("R")
            } else if (L3 == 19) {
                basic.showString("S")
            } else if (L3 == 20) {
                basic.showString("T")
            } else if (L3 == 21) {
                basic.showString("U")
            } else if (L3 == 22) {
                basic.showString("V")
            } else if (L3 == 23) {
                basic.showString("W")
            } else if (L3 == 24) {
                basic.showString("X")
            } else if (L3 == 25) {
                basic.showString("Y")
            } else if (L3 == 26) {
                basic.showString("Z")
            }
        } else if (readL == 4) {
            if (L4 == 1) {
                basic.showString("A")
            } else if (L4 == 2) {
                basic.showString("B")
            } else if (L4 == 3) {
                basic.showString("C")
            } else if (L4 == 4) {
                basic.showString("D")
            } else if (L4 == 5) {
                basic.showString("E")
            } else if (L4 == 6) {
                basic.showString("F")
            } else if (L4 == 7) {
                basic.showString("G")
            } else if (L4 == 8) {
                basic.showString("H")
            } else if (L4 == 9) {
                basic.showString("I")
            } else if (L4 == 10) {
                basic.showString("J")
            } else if (L4 == 11) {
                basic.showString("K")
            } else if (L4 == 12) {
                basic.showString("L")
            } else if (L4 == 13) {
                basic.showString("M")
            } else if (L4 == 14) {
                basic.showString("N")
            } else if (L4 == 15) {
                basic.showString("O")
            } else if (L4 == 16) {
                basic.showString("P")
            } else if (L4 == 17) {
                basic.showString("Q")
            } else if (L4 == 18) {
                basic.showString("R")
            } else if (L4 == 19) {
                basic.showString("S")
            } else if (L4 == 20) {
                basic.showString("T")
            } else if (L4 == 21) {
                basic.showString("U")
            } else if (L4 == 22) {
                basic.showString("V")
            } else if (L4 == 23) {
                basic.showString("W")
            } else if (L4 == 24) {
                basic.showString("X")
            } else if (L4 == 25) {
                basic.showString("Y")
            } else if (L4 == 26) {
                basic.showString("Z")
            }
        } else if (readL == 5) {
            if (L5 == 1) {
                basic.showString("A")
            } else if (L5 == 2) {
                basic.showString("B")
            } else if (L5 == 3) {
                basic.showString("C")
            } else if (L5 == 4) {
                basic.showString("D")
            } else if (L5 == 5) {
                basic.showString("E")
            } else if (L5 == 6) {
                basic.showString("F")
            } else if (L5 == 7) {
                basic.showString("G")
            } else if (L5 == 8) {
                basic.showString("H")
            } else if (L5 == 9) {
                basic.showString("I")
            } else if (L5 == 10) {
                basic.showString("J")
            } else if (L5 == 11) {
                basic.showString("K")
            } else if (L5 == 12) {
                basic.showString("L")
            } else if (L5 == 13) {
                basic.showString("M")
            } else if (L5 == 14) {
                basic.showString("N")
            } else if (L5 == 15) {
                basic.showString("O")
            } else if (L5 == 16) {
                basic.showString("P")
            } else if (L5 == 17) {
                basic.showString("Q")
            } else if (L5 == 18) {
                basic.showString("R")
            } else if (L5 == 19) {
                basic.showString("S")
            } else if (L5 == 20) {
                basic.showString("T")
            } else if (L5 == 21) {
                basic.showString("U")
            } else if (L5 == 22) {
                basic.showString("V")
            } else if (L5 == 23) {
                basic.showString("W")
            } else if (L5 == 24) {
                basic.showString("X")
            } else if (L5 == 25) {
                basic.showString("Y")
            } else if (L5 == 26) {
                basic.showString("Z")
            }
        }
    } else {
        if (az == 1) {
            basic.showString("A")
        } else if (az == 2) {
            basic.showString("B")
        } else if (az == 3) {
            basic.showString("C")
        } else if (az == 4) {
            basic.showString("D")
        } else if (az == 5) {
            basic.showString("E")
        } else if (az == 6) {
            basic.showString("F")
        } else if (az == 7) {
            basic.showString("G")
        } else if (az == 8) {
            basic.showString("H")
        } else if (az == 9) {
            basic.showString("I")
        } else if (az == 10) {
            basic.showString("J")
        } else if (az == 11) {
            basic.showString("K")
        } else if (az == 12) {
            basic.showString("L")
        } else if (az == 13) {
            basic.showString("M")
        } else if (az == 14) {
            basic.showString("N")
        } else if (az == 15) {
            basic.showString("O")
        } else if (az == 16) {
            basic.showString("P")
        } else if (az == 17) {
            basic.showString("Q")
        } else if (az == 18) {
            basic.showString("R")
        } else if (az == 19) {
            basic.showString("S")
        } else if (az == 20) {
            basic.showString("T")
        } else if (az == 21) {
            basic.showString("U")
        } else if (az == 22) {
            basic.showString("V")
        } else if (az == 23) {
            basic.showString("W")
        } else if (az == 24) {
            basic.showString("X")
        } else if (az == 25) {
            basic.showString("Y")
        } else {
            if (az == 26) {
                basic.showString("Z")
            }
        }
    }
})
