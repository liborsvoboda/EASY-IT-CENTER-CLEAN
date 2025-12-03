/*  

Guitar Tuner

Create a function that takes guitar strings as an array of frequencies (numbers) and returns the display of a tuner as an array. You can find the frequencies of the strings on the Wikipedia page (check the Resources tab).

The guitar strings are played 1st to 6th, High E to Low E.
If the guitar string matches, return "OK" for that guitar string.
If it's too low, return ">•" for 1 or 2 percent off (the arrow means, tune up).
Return ">>•" if it's way off. For more than 3 percent.
If it's too high, return "•<" for 1 or 2 percent, and "•<<" for more, (tune down).
Check the rounded percentages.
If 0 is given, the guitar string isn't played, return " - ".
Examples
tune([0, 246.94, 0, 0, 0, 80]) ➞ [" - ", "OK", " - ", " - ", " - ", ">>•"]

tune([329, 246, 195, 146, 111, 82]) ➞ ["OK", "OK", ">•", ">•", "•<", "OK" ]

tune([329.63, 246.94, 196, 146.83, 110, 82.41]) ➞ ["OK", "OK", "OK", "OK", "OK", "OK"]


Notes
Items in the array will always be numbers.

*/




//#############################################################
//#                        MY SOLUTION    1                   #
//#############################################################


function tune(arr) {
    var frq = [329.63, 246.94, 196.00, 146.83, 110.00, 82.41];
    return arr.map(function(x, i) {
        if (x == 0) return ' - ';
        var p = Math.round(x / frq[i] * 100) - 100;
        if (p >= 3) return '•<<';
        if (p >= 1) return '•<';
        if (p <= -3) return '>>•';
        if (p <= -1) return '>•';
        return 'OK';
    });
}




//#############################################################
//#                        MY SOLUTION    2                   #
//#############################################################


function tune(arr) {
    const tuned = [329.63, 246.94, 196, 146.83, 110, 82.41];
    const percDiff = (v, t) => Math.round((v - t) / t * 100);
    const tuneDir = v => v === -100 ? ' - ' : v < -2 ? '>>•' : v < 0 ? '>•' : v > 2 ? '•<<' : v > 0 ? '•<' : 'OK';
    return arr.map((v, i) => tuneDir(percDiff(v, tuned[i])));
}




//#############################################################
//#                        MY SOLUTION    3                   #
//#############################################################


const tune = S => [329.63, 246.94, 196, 146.83, 110, 82.41]
    .map((f, i) => S[i] ? (p = Math.round(100 * (S[i] - f) / f),
        p < -2 ? '>>•' : p > 2 ? '•<<' : p <= -1 ? '>•' : p >= 1 ? '•<' : 'OK'
    ) : ' - ')




//#############################################################
//#                        MY SOLUTION    4                   #
//#############################################################


function tune(arr) {
    let correctFreqs = [329.63, 246.94, 196, 146.83, 110, 82.41];
    let output = [];
    let x;
    output = arr.map((a, i) =>
        a === 0 ?
        ' - ' : Math.round(100 * (arr[i] / correctFreqs[i] - 1), 1) >= 3 ?
        '•<<' : Math.round(100 * (arr[i] / correctFreqs[i] - 1), 1) >= 2 ?
        '•<' : Math.round(100 * (arr[i] / correctFreqs[i] - 1), 1) >= 1 ?
        '•<' : Math.round(100 * (arr[i] / correctFreqs[i] - 1), 1) > 0 ?
        'OK' : Math.round(100 * (arr[i] / correctFreqs[i] - 1), 1) === 0 ?
        'OK' : Math.round(100 * (arr[i] / correctFreqs[i] - 1), 1) > -1 ?
        'OK' : Math.round(100 * (arr[i] / correctFreqs[i] - 1), 1) > -2 ?
        '>•' : Math.round(100 * (arr[i] / correctFreqs[i] - 1), 1) > -3 ?
        '>•' : '>>•')
    return output;
}