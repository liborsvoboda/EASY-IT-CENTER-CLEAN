/*

Moving to the End

Write a function that moves all elements of one type to the end of the array.

Examples
moveToEnd([1, 3, 2, 4, 4, 1], 1) ➞ [3, 2, 4, 4, 1, 1]
// Move all the 1s to the end of the array.

moveToEnd([7, 8, 9, 1, 2, 3, 4], 9) ➞ [7, 8, 1, 2, 3, 4, 9]

moveToEnd(["a", "a", "a", "b"], "a") ➞ ["b", "a", "a", "a"]

Notes
Keep the order of the un-moved items the same.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function moveToEnd(arr, el) {
    return arr.filter(x => x != el).concat(arr.filter(x => x == el));
}




function moveToEnd(arr, el) {
    return arr.sort((a, b) => a === el ? 1 : b === el ? -1 : 0)
}




//#############################################################
//#  SOLUTION 2  
//#############################################################



const moveToEnd = (arr, el) => arr.sort((a, b) => (a === el ? 1 : b === el ? -1 : 0));


let moveToEnd = (arr, el) => arr.filter(x => x != el).concat(arr.filter(x => x == el))

//#############################################################
//#  SOLUTION 3
//#############################################################


function moveToEnd(arr, el) {

    let res = [];
    let newArr = arr.filter(x => x !== el);
    let diff = arr.length - newArr.length;

    for (let i = 0; i < diff; i++) {
        newArr.push(el);
    }
    return newArr;
}





//#############################################################
//#  SOLUTION 4
//#############################################################


function moveToEnd(arr, el) {
    const extras = []
    return [...arr.filter(item => {
        if (item === el) {
            extras.push(el)
            return false
        }
        return true
    }), ...extras]
}




//#############################################################
//#  SOLUTION 5
//#############################################################



function moveToEnd(arr, el) {
    return [
        ...arr.filter(v => v !== el),
        ...arr.filter(v => v === el)
    ];
}





//#############################################################
//#  SOLUTION 6
//#############################################################


function moveToEnd(arr, el) {
    return arr.filter(cur => cur !== el)
        .concat(arr.filter(curr => curr === el));
}