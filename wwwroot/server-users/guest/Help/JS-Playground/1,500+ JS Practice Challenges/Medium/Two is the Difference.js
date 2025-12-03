/*

Two is the Difference

Create a function that takes an array of integers and returns all pairs of integers that have a difference of two. The resulting array should be sorted in ascending order of values.

Examples
differenceTwo([1, 2, 3, 4]) ➞ [[1, 3], [2, 4]]

differenceTwo([1, 23, 3, 4, 7]) ➞ [[1, 3]]

differenceTwo([4, 3, 1, 5, 6]) ➞ [[1, 3], [3, 5], [4, 6]]


Notes
Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.
*/





//#############################################################
//#  SOLUTION 1 
//#############################################################



function differenceTwo(n) {
    return n.map(x => n.find(a => Math.abs(a - x) == 2) != undefined ? [x, n.find(a => Math.abs(a - x) == 2)].sort((a, b) => a - b) : undefined).filter(x => x != undefined).map(JSON.stringify).reverse().filter(function(e, i, a) {
        return a.indexOf(e, i + 1) === -1;
    }).reverse().map(JSON.parse).sort((a, b) => a[0] - b[0])
}


//#############################################################
//#  SOLUTION 2  
//#############################################################


function differenceTwo(n) {
    let arr = [];
    n.sort((a, b) => a - b).map(e => n.includes(e + 2) ? arr.push([e, e + 2]) : e);
    return arr;
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function differenceTwo(n) {
    n.sort((a, b) => a - b)
    newArray = []
    n.map(
            (el, i) => n.slice(i + 1).map(
                el2 =>
                Math.abs(el - el2) == 2 ? newArray.push([el, el2].sort((a, b) => a - b)) : 0))
        .sort((a, b) => a - b)
    return newArray
}



//#############################################################
//#  SOLUTION 4
//#############################################################



function differenceTwo(n) {
    return n.map(x => n.find(a => Math.abs(a - x) == 2) != undefined ? [x, n.find(a => Math.abs(a - x) == 2)].sort((a, b) => a - b) : undefined).filter(x => x != undefined).map(JSON.stringify).reverse().filter(function(e, i, a) {
        return a.indexOf(e, i + 1) === -1;
    }).reverse().map(JSON.parse).sort((a, b) => a[0] - b[0])
}



//#############################################################
//#  SOLUTION 5
//#############################################################



const differenceTwo = (n) =>
    n.map(e => Array.from({ length: n.length }, (_, i) => [e, n[i]].sort((a, b) => a - b)))
    .flat().sort((a, b) => a[0] - b[0])
    .filter((e, i, arr) => Math.abs(e[0] - e[1]) == 2).filter((e, i) => i % 2);




//#############################################################
//#  SOLUTION 6
//#############################################################


function differenceTwo(n) {
    n.sort((a, b) => a - b);
    return n.filter(x => n.includes(x + 2)).map(x => [x, x + 2]);
}