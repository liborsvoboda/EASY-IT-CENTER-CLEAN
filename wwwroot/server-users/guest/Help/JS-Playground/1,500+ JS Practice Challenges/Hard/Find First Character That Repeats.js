/*

Find First Character That Repeats

Create a function that takes a string and returns the first character that repeats. If there is no repeat of a character, return "-1".

Examples
firstRepeat("legolas") ➞ "l"

firstRepeat("Gandalf") ➞ "a"

firstRepeat("Balrog") ➞ "-1"

firstRepeat("Isildur") ➞ "-1"
// Case sensitive "I" not equal to "i"

Notes
Tests are case sensitive.

*/


//#############################################################
//#  SOLUTION 1 
//#############################################################


const firstRepeat = chars => (chars.match(/(\w)\w*\1/) || [, '-1'])[1];



//#############################################################
//#  SOLUTION 2  
//#############################################################


function firstRepeat(chars) {
    return [...chars].filter((x, i, a) => a.indexOf(x) !== a.lastIndexOf(x))[0] || '-1';
}



//#############################################################
//#  SOLUTION 3
//#############################################################


function firstRepeat(chars) {
    const newArr = [...chars].filter((e, index) => chars.indexOf(e) !== index)
    return newArr.length > 0 ? newArr[0] : '-1'
}


//#############################################################
//#  SOLUTION 4
//#############################################################


firstRepeat = c => new Set(c).size == c.length ? '-1' : [...new Set([...c].filter(a => c.indexOf(a) != c.lastIndexOf(a)))][0]