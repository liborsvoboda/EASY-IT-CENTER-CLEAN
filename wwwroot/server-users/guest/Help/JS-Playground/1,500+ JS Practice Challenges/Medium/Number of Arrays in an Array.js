/*

Number of Arrays in an Array

Return the total number of arrays inside a given array.


Examples
numOfSubbarrays([[1, 2, 3]]) ➞ 1

numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 3

numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 4

numOfSubbarrays([1, 2, 3]) ➞ 0


*/



//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################



//#  SOLUTION 1 

function numOfSubbarrays(arr) {
    return arr.filter(a => a instanceof Array).length;
}



function numOfSubbarrays(arr) {
    return arr.reduce((a, c) => a + (c instanceof Array), 0)
}



//#  SOLUTION 2  

function numOfSubbarrays(arr) {
    return arr
        .filter(Array.isArray)
        .length
}


//#  SOLUTION 3


function numOfSubbarrays(arr) {
    return arr.reduce((t, c) => t + (Array.isArray(c)), 0);
};


//#  SOLUTION 4

const numOfSubbarrays = a => a.filter(x => x.length).length;

const numOfSubbarrays = a => a.flat().length != a.length ? a.length : 0

const numOfSubbarrays = arr => arr.reduce((total, curr) => total + Array.isArray(curr), 0);

//#  SOLUTION 5


function numOfSubbarrays(arr) {
    var numberOfArra = 0;
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            numberOfArra++;
        }
    }
    return numberOfArra;
}


//#  SOLUTION 6

function numOfSubbarrays(arr) {
    let count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) count++;
    }
    return count;
}



//#  SOLUTION 7

function numOfSubbarrays(arr) {
    let someArr = [arr.length, arr[0].length]
    if (someArr[1] == undefined) return 0
    return someArr[0]
}



//#  SOLUTION 8

function numOfSubbarrays(arr) {
    let inc = 0;
    for (i in arr) {
        if (Array.isArray(...arr) === true) {
            inc++
        }
    }
    return inc;

}


/* 
numOfSubbarrays([[1, 2, 3]]) ➞ 1
numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 3
numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]) ➞ 4
numOfSubbarrays([1, 2, 3]) ➞ 0
*/