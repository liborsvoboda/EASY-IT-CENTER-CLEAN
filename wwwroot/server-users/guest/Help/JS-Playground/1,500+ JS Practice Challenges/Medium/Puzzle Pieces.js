/*

Puzzle Pieces

Write a function that takes two arrays and adds the first element in the first array with the first element in the second array, the second element in the first array with the second element in the second array, etc, etc. Return true if all element combinations add up to the same number. Otherwise, return false.

Examples
puzzlePieces([1, 2, 3, 4], [4, 3, 2, 1]) ➞ true
// 1 + 4 = 5;  2 + 3 = 5;  3 + 2 = 5;  4 + 1 = 5
// Both arrays sum to [5, 5, 5, 5]

puzzlePieces([1, 8, 5, 0, -1, 7], [0, -7, -4, 1, 2, -6]) ➞ true

puzzlePieces([1, 2], [-1, -1]) ➞ false

puzzlePieces([9, 8, 7], [7, 8, 9, 10]) ➞ false

Notes
Each array will have at least one element.
Return false if both arrays are of different length.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################


function puzzlePieces(a1, a2) {
    if (a1.length !== a2.length) return false;
    var c = a1[0] + a2[0];
    for (var i in a1) {
        if (a1[i] + a2[i] != c) return false;
    }
    return true;
}







//#############################################################
//#  SOLUTION 2  
//#############################################################


function puzzlePieces(a1, a2) {
    return a1.length === a2.length && new Set(a1.map((v, i) => v + a2[i])).size === 1;
}







//#############################################################
//#  SOLUTION 3
//#############################################################



const puzzlePieces = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;
    return new Set(arr1.map((val, i) => val + arr2[i])).size === 1;
};





//#############################################################
//#  SOLUTION 4
//#############################################################



function puzzlePieces(a1, a2) {
    return a1.length !== a2.length ? false : a1.map((a, i) => a + a2[i]).filter((a, i, arr) => i === arr.indexOf(a)).length === 1
}




//#############################################################
//#  SOLUTION 5
//#############################################################



function puzzlePieces(a1, a2) {
    const sum = a1.map((v, i) => v + a2[i])
    return a1.length === a2.length ? sum.every(x => x === sum[0]) : false
}