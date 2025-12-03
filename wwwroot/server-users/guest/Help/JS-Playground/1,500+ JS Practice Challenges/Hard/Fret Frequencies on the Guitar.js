/*

Fret Frequencies on the Guitar

Create a function that takes a number of a guitar string and the number of the fret and returns the corresponding frequency of the note.

Check the Resources Tab, for the correct frequencies per string.
The formula to calculate the frequency is: String Frequency * 2^(fret/12).
Round the frequency to the nearest hundreth.
For this challenge, we use "Standard Tuning".
So, one fret = a semitone = a half step. From D to D♯ for instance.

Examples
fretFreq(5, 12) ➞ 220

fretFreq(4, 6) ➞ 207.65

fretFreq(2, 23) ➞ 932.32

*/





//#############################################################
//#  SOLUTION 1 
//#############################################################


function fretFreq(gStr, fret) {
    const obj = {
        '1': 329.63,
        '2': 246.94,
        '3': 196,
        '4': 146.83,
        '5': 110,
        '6': 82.41
    }
    return +(obj[gStr] * (2 ** (fret / 12))).toFixed(2)
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function fretFreq(gStr, fret) {
    let arr = [329.63, 246.94, 196.00, 146.83, 110.00, 82.41];
    let result = (arr[gStr - 1] * Math.pow(2, (fret / 12)));
    if (result % 1 === 0) {
        return result;
    } else if (result % 1 !== 0 || result.toString().includes(00)) {
        return parseFloat(result.toFixed(2));
    } else {
        return parseInt(result.toFixed(0));
    }
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function fretFreq(gStr, fret) {
    const gtrFrq = [329.63, 246.94, 196.00, 146.83, 110.00, 82.41];
    let arr = gtrFrq.map((el, index) => {
        if (index === gStr - 1) {
            return el * (2 ** (fret / 12));
        }
    });
    return Number(arr.find(el => el !== undefined).toFixed(2));
}