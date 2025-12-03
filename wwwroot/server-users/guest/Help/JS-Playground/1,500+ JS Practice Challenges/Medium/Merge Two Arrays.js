/*

Merge Two Arrays

Create a function that takes two arrays and combines them by alternatingly taking elements from each array in turn.

The arrays may be of different lengths, with at least one character / digit.
The first array will contain string characters (lowercase, a-z).
The second array will contain integers (all positive).
Examples
mergeArrays(["f", "d", "w", "t"], [5, 3, 7, 8])
➞ ["f", 5, "d", 3, "w", 7, "t", 8]

mergeArrays([1, 2, 3], ["a", "b", "c", "d", "e", "f"])
➞ [1, "a", 2, "b", 3, "c", "d", "e", "f"]

mergeArrays(["a", "b", "c", "d", "e"], [1, 2, 3, 4, 5])
➞ ["a", 1, "b", 2, "c", 3, "d", 4, "e", 5]

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function mergeArrays(a, b) {
    var result = []
    for (var i = 0; i < Math.max(a.length, b.length); i++) {
        if (a[i]) result.push(a[i])
        if (b[i]) result.push(b[i])
    }
    return result
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


function mergeArrays(a, b) {
    return [].concat(...a.map((v, i) => (b[0]) ? [v, b.shift()] : v), b)
}




//#############################################################
//#  SOLUTION 3
//#############################################################


function mergeArrays(a, b) {
    let result = [];
    while (a.length + b.length > 0) {
        if (a.length > 0) result = [...result, a.shift()];
        if (b.length > 0) result = [...result, b.shift()];
    }
    return result;
}



//#############################################################
//#  SOLUTION 4
//#############################################################


function mergeArrays(a, b) {
    let arr = [];
    let length = a.length > b.length ? a.length : b.length;
    for (let i = 0; i < length; i++) {
        if (a[i]) { arr.push(a[i]) }
        if (b[i]) { arr.push(b[i]) }
    }
    return arr;
}




//#############################################################
//#  SOLUTION 5
//#############################################################


function mergeArrays(a, b) {
    let n = [];
    while (a.length > 0 || b.length > 0) {
        if (a.length > 0) {
            n.push(a.shift());
        }
        if (b.length > 0) {
            n.push(b.shift());
        }
    }
    return n;
}