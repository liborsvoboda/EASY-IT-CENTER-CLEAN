/*

Microwave Buttons


In microwave ovens, when buttons are pressed from 0-9, it will add that number to the microwave oven timer (starting from the left). All microwave ovens have the functionality where you can hit a "+30" button and it will add 30 seconds to the timer to cook your food. If you want to heat something for 5 mins, you can hit the "+30" button 10 times instead of thinking if there are fewer button presses that can give you the same result.

Create a function that takes an argument time and returns the shortest amount of button presses to set the given time on the microwave oven. The microwave oven timer always starts at 00:00.

Buttons
Buttons from "0-9"

// It will add that number to the microwave oven timer (starting from the left).
// If the number "5" is pressed followed by "0" twice, it will put 05:00 on the timer.
// If the number "3" is pressed followed by "0", it will put 00:30 on the timer.

Button "+30", which adds 30 seconds to the current timer.

// If the number "+30" is pressed twice, it will put 00:60 on the timer.

A "Start" button which you have to finally press to start the microwave oven.

// Remember to press this!
Examples
microwaveButtons("00:30") ➞ 2
// "+30" to put 30 seconds on the timer.
// "Start" button to start the oven.

microwaveButtons("00:70") ➞ 3
// "7" followed by "0" to put 70 seconds on the timer.
// "Start" button to start the oven.

microwaveButtons("00:00") ➞ 1
// "Start" button to start the oven.


Notes
Input may not always be what you expect (e.g. you can put in 00:70, which is valid).
No exception handling is required for this challenge.

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################



function microwaveButtons(time) {
    let num = time.replace(":", "");
    return Number(num) == 0 ? 1 :
        Number(num) / 30 > 10 ? 5 :
        Number(num) / 30 == 1 ? 2 :
        3;

}




//#############################################################
//#  SOLUTION 2  
//#############################################################



function microwaveButtons(time) {
    return time == "00:00" ? 1 :
        time == "00:30" ? 2 :
        time == "01:00" ? 3 :
        time.replace(/^[0]*/, "").length;
}




//#############################################################
//#  SOLUTION 3
//#############################################################



function microwaveButtons(time) {
    const buttons = ['', '00:00', '00:30', '01:00'].indexOf(time)
    return buttons === -1 ? time.replace(/^0+/, '').length : buttons;
}




//#############################################################
//#  SOLUTION 4
//#############################################################



function microwaveButtons(time) {
    var rtime = Number(time.split(":")[0]) * 60 + Number(time.split(":")[1])
    var tryIt = time.split(':').join('')
    while (tryIt[0] == '0') {
        tryIt = tryIt.substr(1)
    }
    if (rtime < 30 || rtime % 30 != 0) {
        return tryIt.length + 1
    }
    return rtime / 30 + 1 < tryIt.length + 1 ? rtime / 30 + 1 : tryIt.length + 1
}




//#############################################################
//#  SOLUTION 5
//#############################################################



function microwaveButtons(time) {
    let clock = time.split(":");
    let min = Number(clock[0]);
    let sec = Number(clock[1]);
    if (min === 0 && sec === 0) {
        return 1;
    } else if (min === 0 && sec > 0) {
        if (sec === 30 || sec < 10) {
            return 2;
        } else {
            return 3;
        }
    } else if (min === 1 && sec === 0) {
        return 3
    } else if (min < 10) {
        return 4
    } else {
        return 5
    }
}