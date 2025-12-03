/*

Box Completely Filled?

Create a function that checks if the box is completely filled with the asterisk symbol *.

Examples
completelyFilled([
  "#####",
  "#***#",
  "#***#",
  "#***#",
  "#####"
]) ➞ true

completelyFilled([
  "#####",
  "#* *#",
  "#***#",
  "#***#",
  "#####"
]) ➞ false

completelyFilled([
  "###",
  "#*#",
  "###"
]) ➞ true

completelyFilled([
  "##",
  "##"
]) ➞ true


Notes
Boxes of size n <= 2 are considered automatically filled (see example #4).
*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


function completelyFilled(arr) {
    return arr.every(x => !x.includes(' '));
}



//#############################################################
//#  SOLUTION 2  
//#############################################################



const completelyFilled = arr => arr.slice(1, -1).every(str => new Set(str).size === 2);


const completelyFilled = (arr) => arr.length <= 2 ? true : arr.join("").includes(" ") ? false : true



//#############################################################
//#  SOLUTION 3
//#############################################################



function completelyFilled(arr) {
    return (arr.length < 2 || (arr.join('').match(/\*/g) || []).length == Math.pow(arr.length - 2, 2))
}


//#############################################################
//#  SOLUTION 4
//#############################################################



function completelyFilled(arr) {
    const totalVol = arr[0].length * arr.length;
    const fillVol = ((arr[0].length) - 2) * ((arr.length) - 2)
    const asteriskCount = arr.join('').replace(/[^\*]/gi, "").length

    return totalVol < 5 ? true : asteriskCount == fillVol
}



//#############################################################
//#  SOLUTION 5
//#############################################################


function completelyFilled(arr) {
    if (arr.length <= 2) {
        return true;
    } else {
        return arr.filter(x => x.includes(" ")).length > 0 ? false : true;
    }
}





//#############################################################
//#  SOLUTION 6
//#############################################################


function completelyFilled(arr) {
    return arr.every(x => x.split('').every(i => i === '#' || i === "*"))
}





//#############################################################
//#  SOLUTION 7
//#############################################################


function completelyFilled(arr) {
    let boxContents = arr.slice(1, arr.length - 1);
    return boxContents.reduce((acc, line) => isCompletelyFilled(line) && acc, true);
}

function isCompletelyFilled(line) {
    return line.split("").reduce((acc, value) => ((value === "*") || (value === "#")) && acc, true);
}





//#############################################################
//#  SOLUTION 8
//#############################################################


function completelyFilled(arr) {
    return arr.length <= 2 || arr.filter(r => r.includes('*'))
        .every(r => !r.includes(' '))
}



//#############################################################
//#  SOLUTION 9
//#############################################################



const completelyFilled = (arr) => arr.
filter(box => box.includes(' '))
    .length === 0;