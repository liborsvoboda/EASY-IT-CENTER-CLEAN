/*

Merge Arrays in Order

Given two arrays, merge them to one array and sort the new array in the same order as the first array.

Examples
mergeSort([1, 2, 3], [5, 4, 6]) ➞ [1, 2, 3, 4, 5, 6]

mergeSort([8, 6, 4, 2], [-2, -6, 0, -4]) ➞ [8, 6, 4, 2, 0, -2, -4, -6]

mergeSort([120, 180, 200], [190, 175, 130]) ➞ [120, 130, 175, 180, 190, 200]


Notes
You'll always get two arrays as arguments.
The first array is always sorted, either asc or desc.

*/




//#############################################################
//#  SOLUTION 1 
//#############################################################



const mergeSort = (a1, a2) => [...a1, ...a2].sort((a, b) => a1[0] < a1[1] ? a - b : b - a);



//#############################################################
//#  SOLUTION 2  
//#############################################################


function mergeSort(arr1, arr2) {
    return arr1.concat(arr2).sort((a, b) => arr1[0] < arr1[1] ? a - b : b - a);
}



//#############################################################
//#  SOLUTION 3
//#############################################################


const mergeSort = (arr1, arr2) => arr1.concat(arr2).sort((a, b) => arr1[0] < arr1[1] ? a - b : b - a)


function mergeSort(arr1, arr2) {
    return (arr1[0] > arr1[1]) ? arr1.concat(arr2).sort((a, b) => b - a) : arr1.concat(arr2).sort((a, b) => a - b)
}


//#############################################################
//#  SOLUTION 4
//#############################################################


function mergeSort(arr1, arr2) {
    return [...arr1, ...arr2].sort((a, b) => arr1[0] > arr1[1] ? b - a : a - b)
}


//#############################################################
//#  SOLUTION 5
//#############################################################


function mergeSort(arr1, arr2) {
    let newArr = arr1.concat(arr2)
    return newArr.some(value => Math.sign(value) === -1) ?
        newArr.sort((a, b) => b - a) :
        (newArr.length < 5) ?
        newArr :
        newArr.sort((a, b) => a - b)
}