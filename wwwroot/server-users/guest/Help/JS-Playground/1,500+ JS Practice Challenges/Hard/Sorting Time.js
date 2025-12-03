/*

Sorting Time
JavaScript has a beautiful built-in function sort that sorts an iterable, usually an array of numbers, sorting them in ascending order, but using a block you can sort the iterable in different ways.

Create a function that takes an array of integers as an argument and returns the same array in ascending order. Using sort() would be easy, but for this challenge YOU have to sort the array creating your own algorithm.

Examples
sortArray([2, -5, 1, 4, 7, 8]) ➞ [-5, 1, 2, 4, 7, 8]

sortArray([23, 15, 34, 17, -28]) ➞ [-28, 15, 17, 23, 34]

sortArray([38, 57, 45, 18, 47, 39]) ➞ [18, 38, 39, 45, 47, 57]


Notes
The arrays can contain either positive or negative elements.
The arrays will only contain integers.
The arrays won't contain duplicate numbers.
This is a challenge to enhance your ability, using the sort built-in won't enhance your skills.

*/





//#############################################################
//#  SOLUTION 1 
//#############################################################


const sortArray = arr => {
    const sortedArray = []
    const len = arr.length
    for (let i = 0; i < len; i++) {
        sortedArray.push(Math.min(...arr))
        arr.splice(arr.indexOf(Math.min(...arr)), 1)
    }
    return sortedArray
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


const sortArray = arr =>
    arr.reduce((acc, curr, i) => {
        const index = acc.findIndex(x => x >= curr)
        acc.splice(index >= 0 ? index : acc.length, 0, curr)
        return acc
    }, [])



//#############################################################
//#  SOLUTION 3
//#############################################################


function sortArray(arr) {
    var arr1 = [];
    for (var i = 0; i < arr.length; i++) {
        var esMenor = false;
        for (var j = 0; j < arr.length; j++) {
            if (arr[i] <= arr[j]) {
                esMenor = true;
            } else {
                esMenor = false;
                break;
            }
        }
        if (esMenor || arr.length == 1) {
            arr1.push(arr[i]);
            arr.splice(arr.indexOf(arr[i]), 1);
            i = -1;
        }
    }
    return arr1;
}



//#############################################################
//#  SOLUTION 4
//#############################################################


// Merge Sort
// 1. Base Case: When arr's length is <= 1, return it
// 2. Split the input array into left and right half
// 3. merge the left and right half and in ascending pattern
function sortArray(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.trunc((arr.length - 1) / 2);
    let arr1 = sortArray(arr.slice(0, mid + 1));
    let arr2 = sortArray(arr.slice(mid + 1, arr.length));

    return merge(arr1, arr2);
}

function merge(arr1, arr2) {
    const mergedArr = Array(arr1.length + arr2.length);
    let index = 0;
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            mergedArr[index] = arr1[i];
            i++;
        } else {
            mergedArr[index] = arr2[j];
            j++;
        }
        index++;
    }
    while (i < arr1.length) {
        mergedArr[index] = arr1[i];
        i++;
        index++;
    }

    while (j < arr2.length) {
        mergedArr[index] = arr2[j];
        j++;
        index++;
    }
    return mergedArr;
}