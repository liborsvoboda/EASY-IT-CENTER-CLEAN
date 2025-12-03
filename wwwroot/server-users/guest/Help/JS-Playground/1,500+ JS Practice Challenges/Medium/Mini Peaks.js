/*

Mini Peaks

Write a function that returns all the elements in an array that are strictly greater than their adjacent left and right neighbors.

Examples
miniPeaks([4, 5, 2, 1, 4, 9, 7, 2]) ➞ [5, 9]
// 5 has neighbours 4 and 2, both are less than 5.

miniPeaks([1, 2, 1, 1, 3, 2, 5, 4, 4]) ➞ [2, 3, 5]

miniPeaks([1, 2, 3, 4, 5, 6]) ➞ []

Notes
Do not count boundary numbers, since they only have one left/right neighbor.
If no such numbers exist, return an empty array.

*/




//#############################################################
//#                        MY SOLUTIONS                       #
//#############################################################





//#############################################################
//#  SOLUTION 1 
//#############################################################


function miniPeaks(arr) {
    return arr.filter((x, i, a) => x > a[i - 1] && x > a[i + 1])
}



//#############################################################
//#  SOLUTION 2  
//#############################################################


const miniPeaks = arr => arr.slice(1, -1).filter((num, i) => num > arr[i] && num > arr[i + 2]);



function miniPeaks(arr) {
    return arr.filter((it, i, ray) => { if (i != 0 && i != ray.length - 1) return it > ray[i - 1] && it > ray[i + 1] });
}

//#############################################################
//#  SOLUTION 3
//#############################################################

function miniPeaks(arr) {
    var r = [];
    for (var i = 1; i < arr.length - 1; i++) {
        console.log(arr[i]);
        if ((arr[i] > arr[i - 1]) && (arr[i] > arr[i + 1])) {
            r.push(arr[i]);
        }
    }
    return r;
}




//#############################################################
//#  SOLUTION 4
//#############################################################


function miniPeaks(arr) {
    var miniPeaks = [];
    for (var ndx = 1; ndx < arr.length - 1; ndx++) {
        if (arr[ndx] > arr[ndx - 1] && arr[ndx] > arr[ndx + 1]) {
            miniPeaks.push(arr[ndx]);
        }
    }
    return miniPeaks;
}