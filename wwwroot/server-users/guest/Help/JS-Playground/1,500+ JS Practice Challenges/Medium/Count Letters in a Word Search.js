/*

Count Letters in a Word Search

Create a function that counts the number of times a particular letter shows up in the word search.

Examples
letterCounter([
  ["D", "E", "Y", "H", "A", "D"],
  ["C", "B", "Z", "Y", "J", "K"],
  ["D", "B", "C", "A", "M", "N"],
  ["F", "G", "G", "R", "S", "R"],
  ["V", "X", "H", "A", "S", "S"]
], "D") ➞ 3

// "D" shows up 3 times: twice in the first row, once in the third row.

letterCounter([
  ["D", "E", "Y", "H", "A", "D"],
  ["C", "B", "Z", "Y", "J", "K"],
  ["D", "B", "C", "A", "M", "N"],
  ["F", "G", "G", "R", "S", "R"],
  ["V", "X", "H", "A", "S", "S"]
], "H") ➞ 2

Notes
You will always be given an array with five sub-arrays.
*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


const letterCounter = (a, l) => a.flat().filter(x => x == l).length;


const letterCounter = (a, l) => a.reduce((t, s) => t + s.reduce((i, v) => i + (v == l), 0), 0)





//#############################################################
//#  SOLUTION 2  
//#############################################################


const letterCounter = (arr, letter) =>
    arr.reduce(
        (total, row) =>
        total + row.reduce((subtotal, char) => subtotal + (char === letter), 0),
        0
    );







//#############################################################
//#  SOLUTION 3
//#############################################################


function letterCounter(arr, letter) {
    return arr.reduce((xi, x) => xi.concat(x), [])
        .filter(x => x === letter).length;
}






//#############################################################
//#  SOLUTION 4
//#############################################################



function letterCounter(arr, letter) {
    return arr.map(a => a.reduce((acc, next) => next == letter ? acc + 1 : acc + 0, 0))
        .reduce((acc, next) => acc + next)
}






function letterCounter(arr, letter) {
    return arr.reduce((a, b) => a.concat(b)).filter(x => x == letter).length
}




//#############################################################
//#  SOLUTION 5
//#############################################################



function letterCounter(arr, letter) {
    return arr.reduce((acc, a) => {
        return acc + a.filter(b => b === letter).length;
    }, 0)
}





//#############################################################
//#  SOLUTION 6
//#############################################################



function letterCounter(arr, letter) {
    let count = 0
    arr.map(i => {
        i.map(x => {
            if (x === letter) {
                count++
            }
        })
    })
    return count
}