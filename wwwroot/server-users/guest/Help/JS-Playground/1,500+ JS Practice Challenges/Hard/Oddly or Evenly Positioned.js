/*

Oddly or Evenly Positioned
Create a function that returns the characters from an array or string r on odd or even positions, depending on the specifier s. The specifier will be "odd" for items on odd positions (1, 3, 5, ...) and "even" for items on even positions (2, 4, 6, ...).

Examples
charAtPos([2, 4, 6, 8, 10], "even") ➞ [4, 8]
// 4 & 8 occupy the 2nd & 4th positions

charAtPos("EDABIT", "odd") ➞ "EAI"
// "E", "A" and "I" occupy the 1st, 3rd and 5th positions

charAtPos(["A", "R", "B", "I", "T", "R", "A", "R", "I", "L", "Y"], "odd") ➞ ["A", "B", "T", "A", "I", "Y"]


Notes
Arrays are zero-indexed, so, index+1 = position or position-1 = index.
There will not be an empty string or an empty array.
A slightly different version of this challenge can be found here.
A recursive version of this challenge can be found here.

*/



//#############################################################
//#    SOLUTION 1
//#############################################################


function charAtPos(r, s) {
    let result = [];
    for (let i = 0; i < r.length; i++) {
        if (i % 2 === 0 && s === 'odd' || i % 2 !== 0 && s === 'even') {
            result.push(r[i]);
        }
    }
    return Array.isArray(r) ? result : result.join("");
}



//#############################################################
//#    SOLUTION 2
//#############################################################


function charAtPos(r, s) {
    return s === 'even' ? logic.getEven(r) : logic.getOdd(r)
}

const logic = {
    generateArr: (r) => {
        let arr = []
        for (let i = 0; i < r.length; i += 2) {
            arr.push(i)
        }
        return arr
    },
    getEven: (r) => {
        let array = logic.generateArr(r).map(i => i + 1)
        array = array.map(i => r[i])
        return typeof(r) === 'string' ? array.filter(x => typeof(x) !== undefined).join('') : array.filter(x => typeof(x) !== 'undefined')
    },
    getOdd: (r) => {
        let array = logic.generateArr(r)
        array = array.map(i => r[i])
        return typeof(r) === 'string' ? array.join('') : array
    }
}




//#############################################################
//#    SOLUTION 3
//#############################################################


const filter = (arr, s) => arr.filter((_, i) => s === 'even' ? (i + 1) % 2 === 0 : (i + 1) % 2)
const charAtPos = (r, s) => Array.isArray(r) ? filter(r, s) : filter([...r], s).join('')




//#############################################################
//#    SOLUTION 4
//#############################################################


function charAtPos(r, s) {
    if (Array.isArray(r)) {
        return s === "even" ? r.filter((el, i) => (i + 1) % 2 == 0) : r.filter((el, i) => (i + 1) % 2 !== 0)
    } else {
        return s === "even" ? [...r].filter((el, i) => (i + 1) % 2 == 0).join("") : [...r].filter((el, i) => (i + 1) % 2 !== 0).join("")
    }
}