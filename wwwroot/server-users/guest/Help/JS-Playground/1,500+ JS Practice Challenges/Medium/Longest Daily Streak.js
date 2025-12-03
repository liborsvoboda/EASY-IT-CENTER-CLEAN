/*

Longest Daily Streak

Create a function that takes an array of booleans that represent whether or not a player has logged into a game that day. Output the longest streak of consecutive logged in days.

Examples
dailyStreak([true, true, false, true]) ➞ 2

dailyStreak([false, false, false]) ➞ 0

dailyStreak([true, true, true, false, true, true]) ➞ 3


Notes
Return your output as an integer.
If a given array is all false, return 0 (see example #2).

*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


const dailyStreak = arr => Math.max(...arr.join('').split('false').map(v => v.length / 4));


const dailyStreak = arr => Math.max(...(arr.join("").match(/(true)+/g) || [""]).map(v => v.length / 4));



//#############################################################
//#  SOLUTION 2  
//#############################################################


function dailyStreak(arr) {
    const arrMap = arr.map(bool => bool === true ? "1" : "0").join("").split("0")
    const sortedArr =
        arrMap
        .map(num => num.split(""))
        .map(arr => arr.reduce((x, y) => +x + +y, 0))
        .sort((a, b) => b - a)
    return sortedArr[0]
}




//#############################################################
//#  SOLUTION 3
//#############################################################


const dailyStreak = arr => {
    const arr2 = arr.join('').split(/false+/g);
    return Math.max(...arr2.map(str => str.length)) / 4;
}



//#############################################################
//#  SOLUTION 4
//#############################################################


const dailyStreak = a => {
    a = a.join("").match(/(true)+/g);
    return a ? Math.max(...a.map(v => v.length / 4)) : 0;
}


//#############################################################
//#  SOLUTION 5
//#############################################################


const dailyStreak = a => (s = [0], a.forEach(o => o ? s[0]++ : s.unshift(0)), Math.max(...s))



//#############################################################
//#  SOLUTION 6
//#############################################################


const dailyStreak = vector =>
    vector.every(e => e === false) ? 0 : Math.max(...vector.join(``)
        .match(/(true)+/g)
        .map(m => m.length / 4))





//#############################################################
//#  SOLUTION 7
//#############################################################


function dailyStreak(arr) {

    return arr
        .join(" ")
        .split("false")
        .map(str => (str.trim().length ? str.trim().split(" ").length : 0))
        .sort((a, b) => b - a)[0];
}





//#############################################################
//#  SOLUTION 8
//#############################################################




function dailyStreak(arr) {
    if (arr.indexOf(true) === -1) {
        return 0;
    } else {
        var tmp = arr.map(function(elem) {
            return elem ? 1 : 0
        });

        var matches = tmp.join("").match(/[1]{2,}/g)
        return matches ? Math.max(...matches.map(elem => elem.length)) : 1;
    }
}