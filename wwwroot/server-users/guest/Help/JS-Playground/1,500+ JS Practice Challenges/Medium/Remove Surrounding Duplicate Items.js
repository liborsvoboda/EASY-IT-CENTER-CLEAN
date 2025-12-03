/*

Remove Surrounding Duplicate Items

Create a function that takes a sequence of either strings or numbers, removes the surrounding duplicates and returns an array of items without any items with the same value next to each other and preserves the original order of items.

Examples
uniqueInOrder("AAAABBBCCDAABBB") ➞ ["A", "B", "C", "D", "A", "B"]

uniqueInOrder("ABBCcAD") ➞ ["A", "B", "C", "c", "A", "D"]

uniqueInOrder([1, 2, 2, 3, 3]) ➞ [1, 2, 3]

Notes
The initial sequence of items can be either a string or an array.
Tests are case sensitive.
*/



//#############################################################
//#  SOLUTION 1 
//#############################################################


function uniqueInOrder(sequence) {
    return Array.from(sequence).filter((x, i, a) => x !== a[i - 1]);
}




//#############################################################
//#  SOLUTION 2  
//#############################################################


function uniqueInOrder(sequence) {
    return [...sequence].filter((a, i) => a !== sequence[i + 1])
}



//#############################################################
//#  SOLUTION 3
//#############################################################


function uniqueInOrder(sequence) {
    var arr = Array.isArray(sequence) ? sequence : sequence.split('');

    return arr.filter(function(val, index) {
        return arr[index - 1] !== val;
    });
}




//#############################################################
//#  SOLUTION 4
//#############################################################



function uniqueInOrder(s) {
    return (typeof s === "string" ? s.split("") : s).reduce((a, c) => a.slice(-1)[0] === c ? a : [...a, c], []);
}




//#############################################################
//#  SOLUTION 5
//#############################################################



const uniqueInOrder = item => {
    const arr = typeof item === 'string' ? item.split('') : item

    return arr.reduce((acc, val) => {
        return (acc.slice(-1)[0] === val) ? acc : acc.concat(val)
    }, [])
}